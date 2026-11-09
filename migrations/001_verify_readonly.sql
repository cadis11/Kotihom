-- READ-ONLY verification for migration 001. STATUS: NOT RUN.
-- Rule: every non-comment line is ONE complete call. Submit each line on its own. Nothing here writes.
-- Expected result is in the comment line directly above each statement.

-- V1 expected: ERROR 42501 permission denied for view donations_public (before 001 this returned a plan)
begin read only; set local role anon; explain (costs off) update public.donations_public set amount_npr = 1 where id = '00000000-0000-0000-0000-000000000000'; rollback;
-- V2 expected: ERROR 42501 permission denied
begin read only; set local role anon; explain (costs off) delete from public.donations_public where id = '00000000-0000-0000-0000-000000000000'; rollback;
-- V3 expected: ERROR 42501 permission denied for table donations (before 001: plan with One-Time Filter false)
begin read only; set local role anon; explain (costs off) update public.donations set amount_npr = 1 where id = '00000000-0000-0000-0000-000000000000'; rollback;
-- V4a expected: succeeds (a number)
begin read only; set local role anon; select count(*) from public.donations_public; rollback;
-- V4b expected: succeeds (one row)
begin read only; set local role anon; select * from public.donation_stats; rollback;
-- V4c expected: succeeds (6)
begin read only; set local role anon; select count(*) from public.settings; rollback;
-- V4d expected: succeeds (0 until expenses are entered)
begin read only; set local role anon; select count(*) from public.expenses; rollback;
-- V5a expected: ERROR 42501 permission denied for table donations
begin read only; set local role anon; select count(*) from public.donations; rollback;
-- V5b expected: ERROR 42501 permission denied for table admins
begin read only; set local role anon; select count(*) from public.admins; rollback;
-- V6 expected: succeeds, plan shows "Insert on donations" (the public form still works)
begin read only; set local role anon; explain (costs off) insert into public.donations(donor_name, amount, amount_npr, method) values ('x', 1, 1, 'esewa'); rollback;
-- V7a expected: 0 rows (no role holds a table privilege outside the intended list)
select r as role, o as object, p as privilege from unnest(array['anon','authenticated']) r, unnest(array['donations','settings','expenses','admins','donations_public','donation_stats']) o, unnest(array['SELECT','INSERT','UPDATE','DELETE','TRUNCATE','REFERENCES','TRIGGER']) p where has_table_privilege(r, 'public.' || o, p) and (r, o, p) not in (values ('anon','donations','INSERT'),('anon','settings','SELECT'),('anon','expenses','SELECT'),('anon','donations_public','SELECT'),('anon','donation_stats','SELECT'),('authenticated','donations','SELECT'),('authenticated','donations','INSERT'),('authenticated','donations','UPDATE'),('authenticated','settings','SELECT'),('authenticated','settings','INSERT'),('authenticated','settings','UPDATE'),('authenticated','expenses','SELECT'),('authenticated','expenses','INSERT'),('authenticated','expenses','UPDATE'),('authenticated','expenses','DELETE'),('authenticated','admins','SELECT'),('authenticated','donations_public','SELECT'),('authenticated','donation_stats','SELECT'));
-- V7b expected: 0 rows (every intended privilege is actually present)
select v.r as role, v.o as object, v.p as privilege from (values ('anon','donations','INSERT'),('anon','settings','SELECT'),('anon','expenses','SELECT'),('anon','donations_public','SELECT'),('anon','donation_stats','SELECT'),('authenticated','donations','SELECT'),('authenticated','donations','INSERT'),('authenticated','donations','UPDATE'),('authenticated','settings','SELECT'),('authenticated','settings','INSERT'),('authenticated','settings','UPDATE'),('authenticated','expenses','SELECT'),('authenticated','expenses','INSERT'),('authenticated','expenses','UPDATE'),('authenticated','expenses','DELETE'),('authenticated','admins','SELECT'),('authenticated','donations_public','SELECT'),('authenticated','donation_stats','SELECT')) as v(r, o, p) where not has_table_privilege(v.r, 'public.' || v.o, v.p);
-- V7c expected: 0 rows (no column-level grants hiding behind the table-level revoke)
select attrelid::regclass as rel, attname from pg_attribute where attacl is not null and attrelid in ('public.donations'::regclass,'public.settings'::regclass,'public.expenses'::regclass,'public.admins'::regclass,'public.donations_public'::regclass,'public.donation_stats'::regclass);
-- V7d expected: anon=false, authenticated=true
select has_function_privilege('anon', 'public.is_admin()', 'execute') as anon_exec, has_function_privilege('authenticated', 'public.is_admin()', 'execute') as authenticated_exec;
-- V7e expected: proacl contains no entry starting with "=" (that would mean PUBLIC can execute)
select proacl::text from pg_proc where oid = 'public.is_admin()'::regprocedure;
-- V7f informational: default ACLs for the public schema no longer grant anon/authenticated on new tables/functions
select defaclrole::regrole as owner_role, defaclobjtype, defaclacl::text from pg_default_acl where defaclnamespace = 'public'::regnamespace;
-- V8 (separate tool call, not SQL): get_advisors type=security. Expected: 2x security_definer_view ERROR (accepted: views are the controlled public window and are now read-only), 1x authenticated_security_definer_function_executable WARN for is_admin (accepted), nothing new.
-- V9 expected: donations 0, expenses 0, settings 6, admins 0, proofs 0
select (select count(*) from public.donations) as donations, (select count(*) from public.expenses) as expenses, (select count(*) from public.settings) as settings, (select count(*) from public.admins) as admins, (select count(*) from storage.objects where bucket_id = 'proofs') as proofs;
-- V10 expected: last_value NULL (receipt_no sequence restarted and not yet used)
select sequencename, last_value from pg_sequences where schemaname = 'public';
-- V11 (after owner creates the admin user, with its real uuid in place of the placeholder) expected: update/insert plans succeed; delete -> ERROR 42501
-- begin read only; set local role authenticated; set local request.jwt.claims = '{"sub":"<ADMIN-UUID>","role":"authenticated"}'; explain (costs off) update public.donations set status = 'verified' where id = '00000000-0000-0000-0000-000000000000'; rollback;
-- begin read only; set local role authenticated; set local request.jwt.claims = '{"sub":"<ADMIN-UUID>","role":"authenticated"}'; explain (costs off) delete from public.donations where id = '00000000-0000-0000-0000-000000000000'; rollback;
