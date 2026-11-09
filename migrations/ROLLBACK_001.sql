-- ROLLBACK for kotihom_001_lock_down_grants
-- Restores the over-broad Supabase default grants. This RE-OPENS the hole where anon can
-- UPDATE/DELETE verified donations through public.donations_public. There is no reason to run it
-- except to diagnose a missing-grant regression, and then only briefly.
-- STATUS: NOT APPLIED.
grant all on public.donations_public, public.donation_stats to anon, authenticated;
grant all on public.donations, public.settings, public.expenses, public.admins to anon, authenticated;
-- Not reverted on purpose: is_admin() execute (anon never had it), default-privilege change (affects
-- only future objects), and the receipt_no restart (harmless; data-free). To revert the default
-- privileges as well, uncomment:
-- alter default privileges in schema public grant all on tables    to anon, authenticated;
-- alter default privileges in schema public grant all on functions to anon;
