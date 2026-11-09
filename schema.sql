create extension if not exists pgcrypto;

-- Admins ---------------------------------------------------------------
create table public.admins (
  user_id uuid primary key references auth.users(id) on delete cascade
);
alter table public.admins enable row level security;
create policy "admin reads own row" on public.admins
  for select to authenticated using (user_id = auth.uid());

create or replace function public.is_admin()
returns boolean language sql security definer set search_path = public stable as $$
  select exists (select 1 from public.admins where user_id = auth.uid());
$$;

-- Settings -------------------------------------------------------------
create table public.settings (
  key text primary key,
  value jsonb not null,
  updated_at timestamptz not null default now()
);
alter table public.settings enable row level security;
create policy "settings public read" on public.settings for select to anon, authenticated using (true);
create policy "settings admin write" on public.settings for all to authenticated
  using (public.is_admin()) with check (public.is_admin());

-- Donations ------------------------------------------------------------
create table public.donations (
  id uuid primary key default gen_random_uuid(),
  receipt_no bigint generated always as identity,
  created_at timestamptz not null default now(),
  donor_name text not null check (char_length(donor_name) between 1 and 120),
  display_pref text not null default 'full' check (display_pref in ('full','first','anonymous')),
  phone text check (char_length(phone) <= 40),
  email text check (char_length(email) <= 160),
  country text check (char_length(country) <= 80),
  amount numeric(14,2) not null check (amount > 0),
  currency text not null default 'NPR' check (currency in ('NPR','USD','INR','EUR','GBP','AUD')),
  amount_npr numeric(14,2) not null check (amount_npr > 0),
  method text not null check (method in ('esewa','khalti','bank','international','cash')),
  txn_ref text check (char_length(txn_ref) <= 120),
  message text check (char_length(message) <= 500),
  proof_path text,
  status text not null default 'pending' check (status in ('pending','verified','rejected')),
  source text not null default 'online' check (source in ('online','admin')),
  verified_at timestamptz,
  admin_note text
);
create index donations_status_idx on public.donations (status, created_at desc);
alter table public.donations enable row level security;

create policy "public can submit pending online donations" on public.donations
  for insert to anon, authenticated
  with check (status = 'pending' and source = 'online' and verified_at is null and admin_note is null and method <> 'cash');
create policy "admin full access donations" on public.donations for all to authenticated
  using (public.is_admin()) with check (public.is_admin());

-- Public views (verified only, no private fields) -----------------------
create view public.donations_public as
select id, receipt_no, created_at,
  case display_pref
    when 'anonymous' then null
    when 'first' then split_part(donor_name, ' ', 1)
    else donor_name end as display_name,
  country, amount, currency, amount_npr, method, message
from public.donations
where status = 'verified';

create view public.donation_stats as
select coalesce(sum(amount_npr), 0)::numeric as total_npr, count(*)::int as donor_count
from public.donations
where status = 'verified';

grant select on public.donations_public, public.donation_stats to anon, authenticated;

-- Expenses (public transparency) -----------------------------------------
create table public.expenses (
  id uuid primary key default gen_random_uuid(),
  spent_on date not null default current_date,
  item text not null check (char_length(item) <= 200),
  category text check (char_length(category) <= 80),
  amount_npr numeric(14,2) not null check (amount_npr >= 0),
  note text check (char_length(note) <= 500),
  created_at timestamptz not null default now()
);
alter table public.expenses enable row level security;
create policy "expenses public read" on public.expenses for select to anon, authenticated using (true);
create policy "expenses admin write" on public.expenses for all to authenticated
  using (public.is_admin()) with check (public.is_admin());

-- Storage ----------------------------------------------------------------
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('proofs', 'proofs', false, 5242880, array['image/jpeg','image/png','image/webp','application/pdf'])
on conflict (id) do nothing;
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('assets', 'assets', true, 3145728, array['image/jpeg','image/png','image/webp'])
on conflict (id) do nothing;

create policy "anyone uploads proofs" on storage.objects for insert to anon, authenticated
  with check (bucket_id = 'proofs');
create policy "admin reads proofs" on storage.objects for select to authenticated
  using (bucket_id = 'proofs' and public.is_admin());
create policy "admin manages assets" on storage.objects for all to authenticated
  using (bucket_id = 'assets' and public.is_admin()) with check (bucket_id = 'assets' and public.is_admin());

-- Seed settings (placeholders — admin edits these in the panel) ------------
insert into public.settings (key, value) values
 ('event', '{"title_en":"Kutihom Mahayagya","title_np":"कुटिहोम महायज्ञ","date_iso":null,"date_en":"Date to be announced","date_np":"मिति तोकिनेछ","venue_en":"Venue to be announced","venue_np":"स्थान तोकिनेछ"}'),
 ('goal_ahutis', '10000000'),
 ('ahutis_done', '0'),
 ('payments', '{"esewa":{"id":"","name":"","qr_url":""},"khalti":{"id":"","name":"","qr_url":""},"bank":{"bank":"","account_name":"","account_no":"","branch":"","qr_url":""},"intl":{"text":""}}'),
 ('rates', '{"NPR":1,"USD":135,"INR":1.6,"EUR":150,"GBP":175,"AUD":88}'),
 ('contact', '{"phone":"","email":""}')
on conflict (key) do nothing;
