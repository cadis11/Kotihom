-- Read-only checks for migration 004. One statement per line. Every row must say ok = true.
select 'new insert policy exists' as chk, count(*) = 1 as ok from pg_policies where schemaname = 'storage' and tablename = 'objects' and policyname = 'anon uploads proofs (uuid names only)' and cmd = 'INSERT';
select 'old permissive policy is gone' as chk, count(*) = 0 as ok from pg_policies where schemaname = 'storage' and tablename = 'objects' and policyname = 'anyone uploads proofs';
select 'policy check mentions bucket and name pattern' as chk, with_check like '%proofs%' and with_check like '%jpg|png|webp|pdf%' as ok from pg_policies where schemaname = 'storage' and tablename = 'objects' and policyname = 'anon uploads proofs (uuid names only)';
select 'no DELETE policy for proofs was added' as chk, count(*) = 0 as ok from pg_policies where schemaname = 'storage' and tablename = 'objects' and cmd in ('DELETE', 'ALL') and policyname ilike '%proof%';
select 'admin reads proofs policy unchanged' as chk, count(*) = 1 as ok from pg_policies where schemaname = 'storage' and tablename = 'objects' and policyname = 'admin reads proofs';
select 'assets policy unchanged' as chk, count(*) = 1 as ok from pg_policies where schemaname = 'storage' and tablename = 'objects' and policyname = 'admin manages assets';
