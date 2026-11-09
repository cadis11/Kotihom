-- Rollback for migration 002. Removes the lookup function; nothing else depends on it.
-- (Turn the client feature off first: build without --lookup, or the page shows its generic error for a lookup.)
drop function if exists public.donation_status(text);
