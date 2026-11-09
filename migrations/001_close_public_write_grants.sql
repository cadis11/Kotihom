-- Migration 001: close public write grants
-- apply_migration name : kotihom_001_lock_down_grants
-- Target project       : magxxpvdqgpugglqekxo ONLY
-- STATUS               : NOT APPLIED (Manager applies after reading this file)
-- Why                  : anon could UPDATE/DELETE verified donations through the auto-updatable,
--                        owner-privileged view public.donations_public (RLS is skipped on that path).
-- Notes                : no begin/commit (apply_migration wraps in a transaction). Idempotent.
--                        Rollback: ROLLBACK_001.sql (no reason to ever run it).

-- views: read-only for everyone
revoke all on public.donations_public, public.donation_stats from anon, authenticated;
grant select on public.donations_public, public.donation_stats to anon, authenticated;

-- tables: least privilege (RLS unchanged; defence in depth)
revoke all on public.donations, public.settings, public.expenses, public.admins from anon, authenticated;
grant insert                         on public.donations to anon;
grant select, insert, update         on public.donations to authenticated;
grant select                         on public.settings, public.expenses to anon;
grant select, insert, update         on public.settings to authenticated;
grant select, insert, update, delete on public.expenses to authenticated;
grant select                         on public.admins to authenticated;

-- is_admin(): authenticated only (RLS policies need it); anon already cannot execute
revoke execute on function public.is_admin() from public, anon;
grant  execute on function public.is_admin() to authenticated;

-- future objects must not silently re-open this
alter default privileges in schema public revoke all on tables    from anon, authenticated;
alter default privileges in schema public revoke all on functions from anon;

-- reset receipt numbers only while the table is empty (earlier tests consumed values)
do $$ begin
  if not exists (select 1 from public.donations) then
    alter table public.donations alter column receipt_no restart with 1;
  end if;
end $$;
