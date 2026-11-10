-- ROLLBACK for data_002: restore the venue strings recorded before the change. Touches only venue_np / venue_en.
update public.settings
set value = value || jsonb_build_object(
      'venue_np', 'स्थान घोषणा हुनेछ',
      'venue_en', 'Venue to be announced'),
    updated_at = now()
where key = 'event';
select value->>'venue_np' as venue_np, value->>'venue_en' as venue_en, value->>'date_iso' as date_iso from public.settings where key = 'event';
