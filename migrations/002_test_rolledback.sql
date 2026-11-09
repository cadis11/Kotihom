-- Behaviour test for migration 002. NOT RUN YET (needs 002 applied; the Manager decides when).
-- Runs inside one DO block that ALWAYS ends in an exception carrying the results, so nothing persists.
-- Fixtures use donor_name 'RLSTEST...'. Identity sequence values may be consumed (accepted, as in earlier tests).
do $$
declare
  r text := '';
  a uuid := 'aaaaaaaa-bbbb-4ccc-8ddd-eeeeeeeeeeee';   -- pending
  b uuid := '11111111-2222-4333-8444-555555555555';   -- verified
  c uuid := 'cccccccc-dddd-4eee-8fff-000000000000';   -- rejected
  n int; s text; d date; cols int;
begin
  insert into public.donations (id, donor_name, amount, currency, amount_npr, method, status, source, verified_at)
  values (a, 'RLSTEST a', 100, 'NPR', 100, 'esewa', 'pending',  'online', null),
         (b, 'RLSTEST b', 100, 'NPR', 100, 'esewa', 'verified', 'admin',  now()),
         (c, 'RLSTEST c', 100, 'NPR', 100, 'esewa', 'rejected', 'admin',  null);

  set local role anon;
  select count(*) into n from public.donation_status('aaaaaaaabbbb');                  r := r || format('a12=%s ', n);          -- expect 1
  select status into s from public.donation_status('KH-AAAA-AAAA-BBBB');               r := r || format('pending=%s ', s);      -- expect pending
  select status into s from public.donation_status('111111112222');                    r := r || format('verified=%s ', s);     -- expect verified
  select status into s from public.donation_status('ccccccccdddd');                    r := r || format('rejected=%s ', s);     -- expect rejected
  select count(*) into n from public.donation_status('aaaaaaaabbb');                   r := r || format('short11=%s ', n);      -- expect 0
  select count(*) into n from public.donation_status('');                              r := r || format('empty=%s ', n);        -- expect 0
  select count(*) into n from public.donation_status(null);                            r := r || format('null=%s ', n);         -- expect 0
  select count(*) into n from public.donation_status('zzzzzzzzzzzz');                  r := r || format('nonhex=%s ', n);       -- expect 0
  select count(*) into n from public.donation_status('000000000000');                  r := r || format('nomatch=%s ', n);      -- expect 0
  select count(*) into cols from information_schema.parameters where specific_schema = 'public' and specific_name like 'donation_status%' and parameter_mode = 'OUT';
  r := r || format('outcols=%s ', cols);                                                                                       -- expect 2
  begin
    perform 1 from public.donations;                                                   r := r || 'anon_select_donations=ALLOWED(BAD) ';
  exception when insufficient_privilege then r := r || 'anon_select_donations=denied ';
  end;
  reset role;
  raise exception 'T-RPC-002 %', r;
end $$;
-- Expected message: a12=1 pending=pending verified=verified rejected=rejected short11=0 empty=0 null=0 nonhex=0 nomatch=0 outcols=2 anon_select_donations=denied
