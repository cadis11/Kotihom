-- Read-only checks for migration 002. One statement per line. Run after applying; every row must say ok = true.
select 'function exists, 1 arg' as chk, count(*) = 1 as ok from pg_proc p join pg_namespace n on n.oid = p.pronamespace where n.nspname = 'public' and p.proname = 'donation_status' and p.pronargs = 1;
select 'security definer' as chk, p.prosecdef as ok from pg_proc p join pg_namespace n on n.oid = p.pronamespace where n.nspname = 'public' and p.proname = 'donation_status';
select 'search_path is empty' as chk, coalesce(p.proconfig::text, '') like '%search_path=""%' as ok from pg_proc p join pg_namespace n on n.oid = p.pronamespace where n.nspname = 'public' and p.proname = 'donation_status';
select 'result has exactly 2 columns: status, created_on' as chk, pg_get_function_result(p.oid) = 'TABLE(status text, created_on date)' as ok from pg_proc p join pg_namespace n on n.oid = p.pronamespace where n.nspname = 'public' and p.proname = 'donation_status';
select 'anon can execute' as chk, has_function_privilege('anon', 'public.donation_status(text)', 'execute') as ok;
select 'authenticated can execute' as chk, has_function_privilege('authenticated', 'public.donation_status(text)', 'execute') as ok;
select 'anon still cannot select donations' as chk, not has_table_privilege('anon', 'public.donations', 'select') as ok;
select 'anon still cannot update donations' as chk, not has_table_privilege('anon', 'public.donations', 'update') as ok;
select 'function body never mentions receipt_no or admin_note' as chk, pg_get_functiondef(p.oid) !~* 'receipt_no|admin_note|donor_name|phone|email|proof_path|message|txn_ref|amount' as ok from pg_proc p join pg_namespace n on n.oid = p.pronamespace where n.nspname = 'public' and p.proname = 'donation_status';
