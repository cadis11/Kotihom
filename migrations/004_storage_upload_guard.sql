-- Migration 004: proof upload guard (upload policy only)
-- apply_migration name : kotihom_004_storage_upload_guard
-- Target project       : magxxpvdqgpugglqekxo ONLY
-- STATUS               : NOT APPLIED. Submitted for the Manager's line-by-line review (EA4). Apply only after approval.
-- Scope                : upload policy ONLY. No delete policy (cut in review 1: orphan cleanup is not in v2.0).
--                        No change to the 'assets' bucket, the 'admin reads proofs' policy or the bucket limits.
-- Effect               : an anonymous (or any authenticated) upload to bucket 'proofs' is accepted only when the object
--                        name is exactly  <uuid>.<jpg|png|webp|pdf>  with no sub-folder. The site always uploads to
--                        <donation id>.<ext>, so real submissions are unaffected.
-- Notes                : no begin/commit. Idempotent. The mime-type and 5 MB bucket limits (schema.sql) stay as they are.

drop policy if exists "anyone uploads proofs" on storage.objects;
drop policy if exists "anon uploads proofs (uuid names only)" on storage.objects;

create policy "anon uploads proofs (uuid names only)" on storage.objects
  for insert to anon, authenticated
  with check (
    bucket_id = 'proofs'
    and name ~ '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\.(jpg|png|webp|pdf)$'
  );
