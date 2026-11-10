-- DATA-ONLY update (no schema change). STATUS: NOT APPLIED.
-- Target project: magxxpvdqgpugglqekxo. Run right after migration 001.
-- Keeps every other key in settings.event (date_en, date_np, date_iso, venue_en, venue_np ...).

-- (A) REQUIRED: spelling fix
update public.settings set value = value || jsonb_build_object('title_en','Kotihom Mahayagya','title_np','कोटिहोम महायज्ञ'), updated_at = now() where key = 'event';

-- (B) OPTIONAL (Manager's Step 0b wording; run only if wanted): neutral Nepali placeholders
-- update public.settings set value = value || jsonb_build_object('date_np','मिति घोषणा हुनेछ','venue_np','स्थान घोषणा हुनेछ'), updated_at = now() where key = 'event';

-- Read-back (read-only): expect title_en/title_np new, date_iso null, no old spelling anywhere in settings
-- select value from public.settings where key = 'event';
-- select key from public.settings where value::text ~* 'kutihom|कुटिहोम|कुटी';   -- expect 0 rows
