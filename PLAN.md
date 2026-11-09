# Kutihom Mahayagya website — manager plan

Goal: bilingual (Nepali/English) site for a 1 crore (10,000,000) ahuti Kutihom Hawan for the prosperity of Nepal. Public donation transparency + private admin.

## Stack
Single-file index.html, Supabase (DB, Auth, Storage), Vercel via GitHub. Same flow as NUVA.

## Acceptance checklist (manager reviews against this)
1. Hero with title, "date to be announced" until set, venue, Nepal-prosperity purpose.
2. Progress: ahutis offered vs 1 crore, and verified funds raised, both admin-controlled/live.
3. Payment methods: eSewa, Khalti, Nepali bank, International; QR/IDs from settings.
4. Donation form: proof upload, donor chooses full / first name / anonymous, honeypot field.
5. Donations are PENDING and invisible publicly until an admin verifies them.
6. Public ledger shows only verified donations; never phone/email/proof/txn ref.
7. Public expenses table for transparency.
8. Admin (Supabase Auth, not a hard-coded password): pending queue with approve/reject and editable NPR value, manual add (cash/offline), all-donations with status change (no deletion), expenses, settings, CSV export.
9. All user-supplied text HTML-escaped.
10. Nepali and English strings complete; language toggle persists.
11. Mobile-first layout.
12. RLS: anon can only insert pending online donations and read public views/settings/expenses.
