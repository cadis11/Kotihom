-- Migration 002: donation status lookup by reference code
-- apply_migration name : kotihom_002_donation_status
-- Target project       : magxxpvdqgpugglqekxo ONLY
-- STATUS               : NOT APPLIED. Submitted for the Manager's line-by-line review (EA4). Apply only after approval.
-- Depends on           : 001 (already applied)
-- Amendments applied   : EA5 - the result has exactly two columns (status, created_on); no receipt_no, nothing else.
--
-- Input  : the 12 hex digits of the reference code (KH-1A2B-3C4D-5E6F -> 1a2b3c4d5e6f). The client sends them already
--          normalised; the function also strips every non-hex character, so a pasted "KH-1A2B-..." works.
-- Lookup : the donation id is a client-generated v4 UUID, so the first 12 hex digits are random (48 bits). The function
--          needs at least 12 hex digits, and matches the id range [h0000..., hffff...], and returns at most one row.
-- Leaks  : status ('pending' | 'verified' | 'rejected') and the Kathmandu calendar date the row was received.
--          No name, amount, contact, proof path, message, admin_note or serial number.
-- Notes  : no begin/commit (apply_migration wraps one transaction). Idempotent (create or replace, revoke/grant).
--          SECURITY DEFINER because anon has no SELECT on public.donations (001). search_path is empty and every
--          object is schema-qualified.

create or replace function public.donation_status(ref text)
returns table (status text, created_on date)
language sql
security definer
stable
set search_path = ''
as $$
  with k as (
    select left(lower(regexp_replace(coalesce(ref, ''), '[^0-9a-fA-F]', '', 'g')), 32) as h
  )
  select d.status,
         (d.created_at at time zone 'Asia/Kathmandu')::date as created_on
  from public.donations d
  cross join k
  where length(k.h) between 12 and 32
    and d.id >= (rpad(k.h, 32, '0'))::uuid
    and d.id <= (rpad(k.h, 32, 'f'))::uuid
  order by d.created_at
  limit 1;
$$;

revoke all     on function public.donation_status(text) from public, anon, authenticated;
grant  execute on function public.donation_status(text) to anon, authenticated;

comment on function public.donation_status(text) is
  'Returns (status, created_on) for the donation whose id starts with the given 12+ hex digits. No other data.';
