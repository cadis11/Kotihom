-- Behaviour test for migration 004. NOT RUN YET (needs 004 applied). Always ends in an exception so nothing persists.
-- Tests the policy expression against names, as the anon role, with direct INSERTs into storage.objects.
do $$
declare r text := ''; ok_names text[] := array['1a2b3c4d-5e6f-4a1b-8c9d-0e1f2a3b4c5d.jpg','1a2b3c4d-5e6f-4a1b-8c9d-0e1f2a3b4c5d.pdf'];
        bad_names text[] := array['x.jpg','folder/1a2b3c4d-5e6f-4a1b-8c9d-0e1f2a3b4c5d.jpg','1A2B3C4D-5E6F-4A1B-8C9D-0E1F2A3B4C5D.jpg','1a2b3c4d-5e6f-4a1b-8c9d-0e1f2a3b4c5d.exe','1a2b3c4d-5e6f-4a1b-8c9d-0e1f2a3b4c5d.jpg.html'];
        nm text;
begin
  set local role anon;
  foreach nm in array ok_names loop
    begin insert into storage.objects (bucket_id, name) values ('proofs', nm); r := r || 'ok:' || nm || '=inserted ';
    exception when others then r := r || 'ok:' || nm || '=DENIED(BAD) '; end;
  end loop;
  foreach nm in array bad_names loop
    begin insert into storage.objects (bucket_id, name) values ('proofs', nm); r := r || 'bad:' || nm || '=INSERTED(BAD) ';
    exception when others then r := r || 'bad:' || nm || '=denied '; end;
  end loop;
  begin insert into storage.objects (bucket_id, name) values ('assets', '1a2b3c4d-5e6f-4a1b-8c9d-0e1f2a3b4c5d.jpg'); r := r || 'assets=INSERTED(BAD) ';
  exception when others then r := r || 'assets=denied '; end;
  reset role;
  raise exception 'T-ST-004 %', r;
end $$;
-- Expected: both ok names inserted; every bad name and the assets-bucket attempt denied. (Direct inserts into storage.objects
-- may also need the storage owner's triggers; if the sandbox role cannot insert there, run this part via the HTTP upload on the preview instead.)
