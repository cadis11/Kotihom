-- Rollback for migration 004: restore the original upload policy (any name in bucket 'proofs').
drop policy if exists "anon uploads proofs (uuid names only)" on storage.objects;
drop policy if exists "anyone uploads proofs" on storage.objects;
create policy "anyone uploads proofs" on storage.objects for insert to anon, authenticated
  with check (bucket_id = 'proofs');
