-- data_002: venue for the 2083 B.S. Rashtraguru Yogi Naraharinath Memorial National Welfare Kotihom (proposed).
-- NOT APPLIED. Run by the Manager/owner after approval, with the owner's credentials (like data_001).
-- Merges into settings.event; every other key (date_en, date_np, date_iso, title_*, ...) is kept. No date field is touched.
-- Previous values (SELECT on 2026-11-10, project magxxpvdqgpugglqekxo):
--   venue_np = 'स्थान घोषणा हुनेछ'      venue_en = 'Venue to be announced'      date_iso = NULL
-- Strings must equal build/tools/gates/hero_strings.json (gate G-hero compares them). The dash in the ward number is U+2013.
update public.settings
set value = value || jsonb_build_object(
      'venue_np', 'श्री शिव गोरक्षनाथ पीठ सिद्धाश्रम, पचभैया–३१ पोखरा (प्रस्तावित)',
      'venue_en', 'Shri Shiva Gorakshanath Peeth Siddhashram, Pachbhaiya–31, Pokhara (proposed)'),
    updated_at = now()
where key = 'event';

-- verify (expect 1 row; date_iso still null; both venues exactly as above)
select value->>'venue_np' as venue_np, value->>'venue_en' as venue_en, value->>'date_iso' as date_iso,
       value->>'date_np' as date_np, value->>'date_en' as date_en,
       (value->>'venue_np') ~ '३१' as np_digits_ok,
       position(chr(8211) in value->>'venue_np') > 0 as np_endash_ok,
       position(chr(8211) in value->>'venue_en') > 0 as en_endash_ok
from public.settings where key = 'event';
-- share_text: no row exists on 2026-11-10, so the i18n share_text is used. If a row appears later, update it consistently.
select key from public.settings where key = 'share_text';
