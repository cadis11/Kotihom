/*== Kotihom organizer panel: loaded only for #/admin ==*/
window.KH && (window.KH.build.sdk = {"url":"https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.118.0/dist/umd/supabase.js","version":"2.118.0","global":"supabase","sri":""});
(function () {
var T = window.KH_T = window.KH_T || { en: {}, np: {} }, X = {"en":{"tpl_confirm":"Namaste {name}. Thank you for your contribution to the Kotihom Mahayagya (reference {code}). We have verified your payment, and it now appears in the public list as you chose. May Nepal prosper in peace."},"np":{"tpl_confirm":"नमस्ते {name}। कोटिहोम महायज्ञमा तपाईंले गर्नुभएको सहयोग (सन्दर्भ {code}) का लागि हार्दिक धन्यवाद। तपाईंको भुक्तानी पुष्टि भएको छ र तपाईंले रोजेबमोजिम अब यो सार्वजनिक सूचीमा देखिन्छ। नेपालमा शान्ति र समृद्धि कायम रहोस्।"}};
['en', 'np'].forEach(function (l) { T[l] = T[l] || {}; Object.keys(X[l]).forEach(function (k) { T[l][k] = X[l][k]; }); });
var st = document.createElement('style'); st.textContent = "#admin{min-height:100vh;background:var(--cream)}\n#admin .bar2{background:var(--kum-deep);color:var(--cream);padding:8px 0}\n#admin .bar2 .wrap{display:flex;flex-wrap:wrap;gap:8px 16px;align-items:center;justify-content:space-between}\n#admin .bar2 a{color:var(--gold);display:inline-flex;align-items:center;min-height:44px;padding:0 6px}\n#admin .bar2 .btn{min-height:44px;padding:6px 18px}\n#admin .bar2 :focus-visible{outline-color:var(--focus-dark)}\n#admin>.wrap{padding-top:24px;padding-bottom:56px}\n#aLogin{max-width:440px;margin:24px auto}\n#aLogin .btn{width:100%;margin-top:18px}\n#loginMsg:empty{display:none}\n#loginMsg{margin-top:12px}\n#aTabs{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:18px}\n.tab{min-height:44px;padding:0 18px;border:1px solid var(--field-border);border-radius:999px;background:var(--white);color:var(--ink);font-weight:600;cursor:pointer}\n.tab:hover{background:var(--sand)}\n.tab.on,.tab[aria-selected=true]{background:var(--maroon);border-color:var(--maroon);color:var(--white)}\n#admin .cols{gap:16px;align-items:start}\n#admin form.cols{grid-template-columns:minmax(0,1fr)}\n@media (min-width:760px){#admin .cols,#admin form.cols{grid-template-columns:repeat(2,minmax(0,1fr))}}\n#admin .cols .card{padding:clamp(16px,3vw,24px)}\n.wide{grid-column:1/-1}\n.fld{margin:0 0 12px}\n.fld label{margin:10px 0 4px}\n.chk{display:flex;align-items:center;gap:10px;min-height:44px;margin:8px 0;font-weight:600}\n.chk input{width:22px;height:22px;accent-color:var(--maroon);margin:0}\n#admin h3{margin:0 0 .6em}\n.acard{margin-bottom:14px;padding:16px;border:1px solid var(--line);border-left:5px solid var(--warn);border-radius:var(--r);background:var(--white);box-shadow:var(--shadow)}\n.acard .top{position:static;display:flex;flex-wrap:wrap;justify-content:space-between;gap:6px 14px;background:none;color:var(--ink);box-shadow:none}\n.acard .top>div{min-width:0;overflow-wrap:anywhere}\n.edit{display:grid;gap:0 14px;margin-top:12px;padding:12px 14px;border:1px dashed var(--field-border);border-radius:var(--r);background:var(--cream)}\n@media (min-width:760px){.edit{grid-template-columns:repeat(2,minmax(0,1fr))}.edit .fld:last-child{grid-column:1/-1}}\n.acts{display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin-top:12px}\n.acts input{width:min(100%,220px)}\n.amsg{margin-top:10px}\n.amsg:empty{display:none}\n.amsg .msg{margin:0}\n.hist{margin-top:12px;border:1px solid var(--line);border-radius:var(--r);padding:0 12px;background:var(--cream)}\n.hist summary{min-height:44px;font-size:.95rem}\n.hist pre{margin:0 0 12px;max-height:240px;overflow:auto;white-space:pre-wrap;overflow-wrap:anywhere;font:.85rem/1.5 ui-monospace,Menlo,Consolas,monospace}\n.proofbox{margin-top:12px}\n.proofbox .proofimg{display:block;max-width:100%;max-height:420px;margin-top:8px;border-radius:8px;border:1px solid var(--line);background:var(--white)}\n.proofpdf{display:block;width:100%;height:420px;margin-top:8px;border:1px solid var(--line);border-radius:8px;background:var(--white)}\n.alist{display:grid;gap:12px}\n.mini{display:flex;flex-wrap:wrap;align-items:center;gap:6px 12px;padding:10px 14px;border:1px solid var(--line);border-radius:var(--r);background:var(--white)}\n.mini>:first-child{flex:1 1 220px;min-width:0;overflow-wrap:anywhere}\n.mini .btn{margin-left:auto}\n.toast{position:fixed;left:50%;bottom:20px;z-index:60;transform:translateX(-50%);max-width:min(92vw,420px);padding:12px 18px;border-radius:var(--r);background:var(--kum-deep);color:var(--cream);box-shadow:0 6px 24px rgba(0,0,0,.3);font-weight:600}\n.toast:empty{display:none}\n#admin .r,#admin td.r{text-align:right;font-variant-numeric:tabular-nums lining-nums}\n#admin .scroll{max-width:100%}\n#admin .scroll table{min-width:480px}\n#admin .scroll .btn{white-space:nowrap}\n#admin td{overflow-wrap:normal}\n.btn.ok{background:var(--ok);border-color:var(--ok)}\n.btn.ok:hover{background:#185734;border-color:#185734}\n.btn.bad{background:var(--bad);border-color:var(--bad)}\n.btn.bad:hover{background:#7F170F;border-color:#7F170F}\n.pill{display:inline-block;padding:2px 12px;border-radius:999px;font-size:.85rem;font-weight:600;text-transform:capitalize}\n.pill.pending{background:var(--warn-bg);color:var(--warn)}\n.pill.verified{background:var(--ok-bg);color:var(--ok)}\n.pill.rejected{background:var(--bad-bg);color:var(--bad)}"; document.head.appendChild(st);
}());
(function () {
'use strict';
var KH = window.KH, U = KH.util, h = U.h, $ = U.$, clear = U.clear;
var A = { tab: 'pending', email: '', settings: {}, q: '', filter: 'all', rows: [], total: null, pending: null, dup: null };
var sb = null, opened = false, toastTimer = null;
var TABS = [['pending', 'Pending'], ['all', 'All donations'], ['add', 'Add donation'], ['expenses', 'Expenses'], ['settings', 'Settings'], ['export', 'Export']];
var METHODS = { esewa: 'eSewa', khalti: 'Khalti', bank: 'Bank', international: 'International', cash: 'Cash' };
var CURS = ['NPR', 'USD', 'INR', 'EUR', 'GBP', 'AUD'];
function ktm(now) {
var p = {};
new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Kathmandu', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' })
.formatToParts(now || new Date()).forEach(function (x) { p[x.type] = x.value; });
return p.year + '-' + p.month + '-' + p.day + ' ' + p.hour + ':' + p.minute;
}
function auditVal(v) { return String(v == null ? '' : v).replace(/[\r\n|]+/g, ' ').replace(/\s+/g, ' ').replace(/"/g, "'").trim().slice(0, 200); }
var AUDIT_ACTIONS = ['approve', 'reject', 'status', 'edit', 'note'];
function auditLine(o, now) {
if (AUDIT_ACTIONS.indexOf(o.action) < 0) throw new Error('bad audit action');
var kv = Object.keys(o.details || {}).map(function (k) { return k + '="' + auditVal(o.details[k]) + '"'; });
return [ktm(now), auditVal(o.email) || 'unknown', o.action].concat(kv).join(' | ');
}
function auditAppend(old, line) { return old ? old + '\n' + line : line; }
/* How to guard the write: NULL -> .is('admin_note', null); empty string -> .eq('admin_note', ''); else .eq('admin_note', old) */
function auditGuard(old) { return old === null || old === undefined ? { op: 'is', value: null } : { op: 'eq', value: old }; }
U.auditLine = auditLine; U.auditAppend = auditAppend; U.auditGuard = auditGuard;
/* ---------- formatting (English only) ---------- */
function nfe(n, d) { return Number(n || 0).toLocaleString('en-IN', { maximumFractionDigits: d == null ? 2 : d }); }
function moneyE(a, c) { return (c || 'NPR') + ' ' + nfe(a); }
function dateE(d) { var x = new Date(d); return isNaN(x) ? '' : x.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }); }
function msg(el, cls, txt) { clear(el); if (txt) el.appendChild(h('div', { class: 'msg ' + cls, role: cls === 'err' ? 'alert' : 'status', text: txt })); }
function codeOf(d) { return KH.refCode(d.id) || ''; }
function lbl(text, ctl) { return h('label', {}, [text, ctl]); }
function inp(name, value, type, extra) { return h('input', Object.assign({ name: name, type: type || 'text', value: value == null ? '' : String(value) }, extra || {})); }
function field(text, name, value, type, extra) { return h('div', { class: 'fld' }, [h('label', { text: text }), inp(name, value, type, extra)]); }
function sel(name, opts, cur) {
var s = h('select', { name: name });
opts.forEach(function (o) { var v = Array.isArray(o) ? o[0] : o, l = Array.isArray(o) ? o[1] : o; var op = h('option', { value: v, text: l }); if (v === cur) op.selected = true; s.appendChild(op); });
return s;
}
U.shownAs = function (d) {
var n = U.shownName(d.donor_name, d.display_pref, '(anonymous)');
return d.display_pref === 'anonymous' ? n : n + (d.country ? ' · ' + d.country : '');
};
/* ---------- session ---------- */
function expired() { sb.auth.signOut().then(function () { showLogin('Your session has expired. Please sign in again.'); }); }
function unwrap(r) {
if (r && r.error) {
var m = String(r.error.message || ''), c = String(r.error.code || '');
if (r.status === 401 || r.error.status === 401 || /jwt|token/i.test(m) || c === 'PGRST301') { expired(); throw new Error('Session expired'); }
throw r.error;
}
return r.data;
}
function showLogin(note) {
$('aLogin').hidden = false; $('aApp').hidden = true; $('logoutBtn').hidden = true;
msg($('loginMsg'), 'warn', note || '');
}
function showApp() { $('aLogin').hidden = true; $('aApp').hidden = false; $('logoutBtn').hidden = false; renderAdmin(); }
function checkAdmin() { return sb.from('admins').select('user_id').maybeSingle().then(function (r) { return !!(r.data && r.data.user_id); }); }
function init() {
sb = window.supabase.createClient(KH.cfg.url, KH.cfg.key, { auth: { persistSession: true, autoRefreshToken: true } });
return sb.auth.getSession().then(function (r) {
var s = r.data && r.data.session;
if (!s) return showLogin('');
A.email = (s.user && s.user.email) || '';
return checkAdmin().then(function (ok) { if (ok) showApp(); else showLogin(''); });
});
}
function wire() {
$('backSite').addEventListener('click', function (e) { e.preventDefault(); location.hash = ''; });
$('logoutBtn').addEventListener('click', function () { sb.auth.signOut().then(function () { showLogin(''); }); });
$('loginForm').addEventListener('submit', function (e) {
e.preventDefault();
var f = e.target, m = $('loginMsg'); msg(m, '', '');
sb.auth.signInWithPassword({ email: f.email.value.trim(), password: f.password.value }).then(function (r) {
if (r.error) { msg(m, 'err', r.error.message); return; }
A.email = (r.data.user && r.data.user.email) || f.email.value.trim();
return checkAdmin().then(function (ok) {
if (!ok) return sb.auth.signOut().then(function () { msg(m, 'err', 'This account is not an organizer.'); });
f.reset(); showApp();
});
});
});
}
/* ---------- lazy SDK (CONTRACT.md section 12) ---------- */
var sdkPromise = null;
KH.loadSdk = function () {
if (sdkPromise) return sdkPromise;
sdkPromise = new Promise(function (resolve, reject) {
if (window[KH.build.sdk.global]) return resolve(window[KH.build.sdk.global]);
var s = document.createElement('script');
/* esc-ok: trusted build constant (config.sdk.url), not user data */
s.src = KH.build.sdk.url; s.async = true; s.crossOrigin = 'anonymous';
if (KH.build.sdk.sri) s.integrity = KH.build.sdk.sri;
s.onload = function () { window[KH.build.sdk.global] && window[KH.build.sdk.global].createClient ? resolve(window[KH.build.sdk.global]) : reject(new Error('sdk global missing')); };
s.onerror = function () { sdkPromise = null; reject(new Error('sdk load failed')); };
document.head.appendChild(s);
});
return sdkPromise;
};
var mounted = false;
function shell(root) {
clear(root);
root.appendChild(h('div', { class: 'bar2' }, [h('div', { class: 'wrap' }, [h('strong', { text: 'Kotihom — Organizer panel' }),
h('span', {}, [h('a', { href: '#', id: 'backSite', text: '← Public site' }), ' ', h('button', { class: 'btn', id: 'logoutBtn', type: 'button', hidden: true, text: 'Sign out' })])])]));
var form = h('form', { id: 'loginForm', novalidate: true }, [
h('label', { for: 'lg_email', text: 'Email' }), h('input', { id: 'lg_email', name: 'email', type: 'email', required: true, autocomplete: 'username' }),
h('label', { for: 'lg_pass', text: 'Password' }), h('input', { id: 'lg_pass', name: 'password', type: 'password', required: true, autocomplete: 'current-password' }),
h('button', { class: 'btn', type: 'submit', text: 'Sign in' }), h('div', { id: 'loginMsg', role: 'alert' })]);
root.appendChild(h('div', { class: 'wrap' }, [
h('div', { id: 'aLogin', class: 'card' }, [h('h2', { text: 'Organizer sign in' }), form]),
h('div', { id: 'aApp', hidden: true }, [h('div', { id: 'aTabs', role: 'tablist', 'aria-label': 'Organizer sections' }), h('div', { id: 'aBody', role: 'tabpanel' })])]));
}
KH.adminImpl = {
mount: function (root) {
if (mounted) return;
mounted = true;
shell(root);
KH.loadSdk().then(function () { wire(); return init(); }).then(null, function () { mounted = false; msg($('loginMsg'), 'err', 'Could not load the admin tools. Check your connection and reload.'); });
}
};
/* ---------- audited write (EA1) ---------- */
/* patch: columns to change; the audit line is appended to admin_note. guardEq: optional [column, value] that must still hold. */
function writeRow(row, patch, action, details, guardEq) {
function attempt(cur, retried) {
var line = U.auditLine({ email: A.email, action: action, details: details });
var upd = Object.assign({}, patch, { admin_note: U.auditAppend(cur.admin_note, line) });
var g = U.auditGuard(cur.admin_note), q = sb.from('donations').update(upd).eq('id', cur.id);
q = g.op === 'is' ? q.is('admin_note', null) : q.eq('admin_note', g.value);
if (guardEq) q = q.eq(guardEq[0], guardEq[1]);
return q.select('id').then(function (r) {
var data = unwrap(r);
if (data && data.length) return Object.assign({}, cur, upd);
if (retried) throw new Error('This record was changed by someone else. Reload the list and try again.');
return sb.from('donations').select('*').eq('id', cur.id).single().then(function (f) {
var fresh = unwrap(f);
if (guardEq && fresh[guardEq[0]] !== guardEq[1]) throw new Error('Already handled: its status is now "' + fresh.status + '".');
return attempt(fresh, true);
});
});
}
return attempt(row, false);
}
U.writeRow = writeRow;
/* ---------- toast with 5 second undo ---------- */
function toast(text, undo) {
var box = $('aToast'); if (!box) return;
clearTimeout(toastTimer); clear(box);
box.appendChild(h('span', { text: text + ' ' }));
if (undo) {
var b = h('button', { type: 'button', class: 'btn sm ghost', text: 'Undo' });
b.addEventListener('click', function () { clearTimeout(toastTimer); clear(box); undo().then(null, function (e) { box.textContent = 'Undo failed: ' + (e.message || e); }); });
box.appendChild(b);
}
toastTimer = setTimeout(function () { clear(box); }, 5000);
}
/* ---------- tabs ---------- */
function renderAdmin() {
var tabs = $('aTabs'); clear(tabs);
TABS.forEach(function (t) {
var b = h('button', { type: 'button', role: 'tab', class: 'tab' + (A.tab === t[0] ? ' on' : ''), 'aria-selected': String(A.tab === t[0]), text: t[1] + (t[0] === 'pending' && A.pending !== null ? ' (' + A.pending + ')' : '') });
b.addEventListener('click', function () { A.tab = t[0]; renderAdmin(); });
tabs.appendChild(b);
});
var body = $('aBody'); clear(body); body.appendChild(h('p', { class: 'small', text: 'Loading…' }));
var fn = { pending: aPending, all: aAll, add: aAdd, expenses: aExpenses, settings: aSettings, export: aExport }[A.tab];
Promise.resolve().then(function () { return fn(body); }).then(null, function (e) { clear(body); body.appendChild(h('div', { class: 'msg err', role: 'alert', text: String(e && e.message || e) })); });
countPending();
}
function countPending() {
sb.from('donations').select('id', { count: 'exact', head: true }).eq('status', 'pending').then(function (r) {
if (r.error || r.count == null) return;
A.pending = r.count;
var b = document.querySelector('#aTabs .tab'); if (b) b.textContent = 'Pending (' + r.count + ')';
});
}
function fetchAll(build) {
var out = [];
function page(from) {
return build().range(from, from + 999).then(function (r) {
var d = unwrap(r); out = out.concat(d);
return d.length === 1000 ? page(from + 1000) : out;
});
}
return page(0);
}
/* ---------- duplicate index ---------- */
function normPhone(p) { var d = String(p || '').replace(/\D/g, ''); return d.length >= 7 ? d : ''; }
function loadDup() {
return fetchAll(function () { return sb.from('donations').select('id,method,txn_ref,email,phone,status').order('created_at', { ascending: false }); }).then(function (rows) {
var idx = { txn: {}, mail: {}, tel: {} };
function add(m, k, r) { if (k) (m[k] = m[k] || []).push(r); }
rows.forEach(function (r) {
add(idx.txn, r.txn_ref && String(r.txn_ref).trim() ? r.method + '|' + String(r.txn_ref).trim().toLowerCase() : '', r);
add(idx.mail, r.email ? String(r.email).trim().toLowerCase() : '', r); add(idx.tel, normPhone(r.phone), r);
});
A.dup = idx;
}).then(null, function () { A.dup = null; });
}
function dupsOf(d) {
if (!A.dup) return [];
var order = [], by = {};
[['txn', d.txn_ref && String(d.txn_ref).trim() ? d.method + '|' + String(d.txn_ref).trim().toLowerCase() : '', 'same transaction reference'],
['mail', d.email ? String(d.email).trim().toLowerCase() : '', 'same e-mail'], ['tel', normPhone(d.phone), 'same phone']].forEach(function (k) {
(A.dup[k[0]][k[1]] || []).forEach(function (r) {
if (r.id === d.id) return;
if (!by[r.id]) { by[r.id] = { r: r, why: [] }; order.push(r.id); }
if (by[r.id].why.indexOf(k[2]) < 0) by[r.id].why.push(k[2]);
});
});
return order.map(function (id) { return KH.refCode(id) + ' (' + by[id].r.status + ', ' + by[id].why.join(', ') + ')'; });
}
/* ---------- the donation card ---------- */
function proofBox(d) {
var box = h('div', { class: 'proofbox' });
if (!d.proof_path) { box.appendChild(h('p', { class: 'small', text: 'No proof attached.' })); return box; }
var b = h('button', { type: 'button', class: 'btn sm ghost', text: 'Show proof' });
b.addEventListener('click', function () {
b.disabled = true;
sb.storage.from('proofs').createSignedUrl(d.proof_path, 300).then(function (r) {
b.disabled = false;
if (r.error || !r.data) { box.appendChild(h('p', { class: 'msg err', role: 'alert', text: 'Could not load the proof: ' + ((r.error && r.error.message) || 'unknown') })); return; }
var url = r.data.signedUrl; clear(box);
if (/\.pdf$/i.test(d.proof_path)) { box.appendChild(h('a', { href: url, target: '_blank', rel: 'noopener', class: 'btn sm ghost', text: 'Open PDF in a new tab' })); box.appendChild(h('iframe', { src: url, title: 'Proof PDF', class: 'proofpdf' })); }
else box.appendChild(h('a', { href: url, target: '_blank', rel: 'noopener' }, [h('img', { src: url, alt: 'Payment proof', class: 'proofimg' })]));
});
});
box.appendChild(b); return box;
}
function tplText(lang, d) {
var T = (window.KH_T && window.KH_T[lang]) || {}, s = String(T.tpl_confirm || '');
return s.replace(/\{name\}/g, U.shownName(d.donor_name, 'full', '')).replace(/\{code\}/g, codeOf(d));
}
function card(d, onChange) {
var el = h('article', { class: 'acard', 'data-id': d.id });
var inName = inp('donor_name', d.donor_name, 'text', { maxlength: '120' }), inNpr = inp('amount_npr', d.amount_npr, 'number', { step: 'any', min: '0' });
var inPref = sel('display_pref', [['full', 'Full name'], ['first', 'First name only'], ['anonymous', 'Anonymous']], d.display_pref);
var inMsg = h('textarea', { name: 'message', maxlength: '500', rows: '3', text: d.message || '' });
var pub = h('p', { class: 'small', 'aria-live': 'polite' }), out = h('div', { class: 'amsg', role: 'status' });
function cur() { return { donor_name: inName.value.trim(), display_pref: inPref.value, message: inMsg.value.trim() || null, amount_npr: Number(inNpr.value), country: d.country }; }
function refreshPub() { var c = cur(); pub.textContent = 'Will appear publicly as: ' + U.shownAs(c) + (d.status === 'verified' ? '' : ' (once approved)'); }
[inName, inPref, inMsg].forEach(function (x) { x.addEventListener('input', refreshPub); x.addEventListener('change', refreshPub); }); refreshPub();
var dups = dupsOf(d);
el.appendChild(h('div', { class: 'top' }, [
h('div', {}, [h('strong', { text: d.donor_name }), ' ', h('span', { class: 'pill ' + d.status, text: d.status }),
h('div', { class: 'small', text: codeOf(d) + ' · ' + dateE(d.created_at) + ' · ' + (METHODS[d.method] || d.method) + (d.country ? ' · ' + d.country : '') + (d.source === 'admin' ? ' · added by organizer' : '') })]),
h('div', { class: 'r' }, [h('strong', { text: moneyE(d.amount, d.currency) }), h('div', { class: 'small', text: 'NPR ' + nfe(d.amount_npr) })])]));
el.appendChild(h('p', { class: 'small', text: [d.phone, d.email].filter(Boolean).join(' · ') + (d.txn_ref ? ' · ref: ' + d.txn_ref : '') }));
if (dups.length) el.appendChild(h('p', { class: 'msg warn', role: 'status', text: 'Possible duplicate: ' + dups.slice(0, 4).join('; ') }));
el.appendChild(proofBox(d));
el.appendChild(h('div', { class: 'edit' }, [h('div', { class: 'fld' }, [h('label', { text: 'Public name' }), inName]), h('div', { class: 'fld' }, [h('label', { text: 'Shown as' }), inPref]),
h('div', { class: 'fld' }, [h('label', { text: 'NPR value' }), inNpr]), h('div', { class: 'fld' }, [h('label', { text: 'Message (edit before approving if needed)' }), inMsg])]));
el.appendChild(pub);
var acts = h('div', { class: 'acts' });
function snapshotPatch() { return { status: d.status, verified_at: d.verified_at || null, amount_npr: d.amount_npr, donor_name: d.donor_name, display_pref: d.display_pref, message: d.message || null }; }
function changes(c) {
var o = {};
if (c.donor_name !== d.donor_name) o.name = d.donor_name + ' -> ' + c.donor_name;
if (Number(c.amount_npr) !== Number(d.amount_npr)) o.npr = d.amount_npr + ' -> ' + c.amount_npr;
if (c.display_pref !== d.display_pref) o.pref = d.display_pref + ' -> ' + c.display_pref;
if ((c.message || '') !== (d.message || '')) { o.msg = 'edited'; o.msg_was = d.message || ''; }
return o;
}
function transition(to, label, extraDetails) {
var c = cur();
if (to === 'verified' && !(c.amount_npr > 0)) { msg(out, 'err', 'Enter a valid NPR value.'); return; }
if (!c.donor_name) { msg(out, 'err', 'The public name cannot be empty.'); return; }
var prev = d, prevPatch = snapshotPatch();
var patch = { status: to, verified_at: to === 'verified' ? new Date().toISOString() : null, amount_npr: c.amount_npr > 0 ? c.amount_npr : d.amount_npr, donor_name: c.donor_name, display_pref: c.display_pref, message: c.message };
var details = Object.assign({ from: d.status, to: to }, changes(c), extraDetails || {});
acts.querySelectorAll('button').forEach(function (b) { b.disabled = true; });
writeRow(d, patch, to === 'verified' && d.status === 'pending' ? 'approve' : to === 'rejected' && d.status === 'pending' ? 'reject' : 'status', details, d.status === 'pending' ? ['status', 'pending'] : ['status', d.status]).then(function (nrow) {
toast(label + ' ' + codeOf(d) + '.', function () { return writeRow(nrow, prevPatch, 'status', { undo: 'yes', to: prev.status }).then(function () { renderAdmin(); }); });
onChange('moved', nrow);
}, function (e) { msg(out, 'err', e.message || String(e)); acts.querySelectorAll('button').forEach(function (b) { b.disabled = false; }); });
}
function btn(text, cls, fn) { var b = h('button', { type: 'button', class: 'btn sm ' + cls, text: text }); b.addEventListener('click', fn); acts.appendChild(b); return b; }
if (d.status === 'pending') {
btn('Approve', 'ok', function () { transition('verified', 'Approved'); });
var why = h('input', { type: 'text', name: 'reason', maxlength: '200', placeholder: 'Reason for rejecting (kept in the history, not shown publicly)', 'aria-label': 'Reject reason' });
acts.appendChild(why);
btn('Reject', 'bad', function () { transition('rejected', 'Rejected', why.value.trim() ? { reason: why.value.trim() } : {}); });
} else {
['pending', 'verified', 'rejected'].filter(function (s) { return s !== d.status; }).forEach(function (s) {
btn('Mark ' + s, s === 'verified' ? 'ok' : s === 'rejected' ? 'bad' : 'ghost', function () { transition(s, 'Marked ' + s); });
});
btn('Save edits only', 'ghost', function () {
var c = cur(), ch = changes(c);
if (!Object.keys(ch).length) { msg(out, 'warn', 'Nothing changed.'); return; }
writeRow(d, { donor_name: c.donor_name, display_pref: c.display_pref, message: c.message, amount_npr: c.amount_npr > 0 ? c.amount_npr : d.amount_npr }, 'edit', ch).then(function (n) { msg(out, 'ok', 'Saved.'); onChange('edited', n); }, function (e) { msg(out, 'err', e.message || String(e)); });
});
}
if (d.status === 'verified') {
[['en', 'Copy thank-you message (English)'], ['np', 'Copy thank-you message (Nepali)']].forEach(function (l) {
btn(l[1], 'ghost', function () { var t = tplText(l[0], d); (navigator.clipboard && navigator.clipboard.writeText ? navigator.clipboard.writeText(t) : Promise.reject()).then(function () { msg(out, 'ok', 'Copied.'); }, function () { msg(out, 'warn', t); }); });
});
}
el.appendChild(acts); el.appendChild(out);
if (d.admin_note) el.appendChild(h('details', { class: 'hist' }, [h('summary', { text: 'History' }), h('pre', { text: d.admin_note })]));
return el;
}
/* ---------- tabs: pending, all ---------- */
function aPending(body) {
return loadDup().then(function () { return fetchAll(function () { return sb.from('donations').select('*').eq('status', 'pending').order('created_at'); }); }).then(function (rows) {
A.pending = rows.length; var t = document.querySelector('#aTabs .tab'); if (t) t.textContent = 'Pending (' + rows.length + ')';
clear(body);
var list = h('div', { class: 'alist' });
function empty() { if (!list.querySelector('.acard')) list.appendChild(h('div', { class: 'card', text: 'No pending contributions.' })); }
rows.forEach(function (d) {
var c = card(d, function () { c.remove(); A.pending = Math.max(0, (A.pending || 1) - 1); var tb = document.querySelector('#aTabs .tab'); if (tb) tb.textContent = 'Pending (' + A.pending + ')'; empty(); });
list.appendChild(c);
});
body.appendChild(list); empty();
body.appendChild(h('div', { id: 'aToast', role: 'status', class: 'toast' }));
});
}
function adminSearch(q) {
var term = U.cleanSearch(q, true);
return term;
}
function aAll(body) {
var PAGE = 50, list = h('div', { class: 'alist' }), more = h('button', { type: 'button', class: 'btn ghost', text: 'Load more', hidden: true }), info = h('p', { class: 'small', role: 'status' });
var qIn = h('input', { type: 'search', name: 'q', maxlength: '60', placeholder: 'Search name, e-mail, phone, reference code, country', 'aria-label': 'Search donations', value: A.q });
var fSel = sel('filter', [['all', 'All statuses'], ['pending', 'Pending'], ['verified', 'Verified'], ['rejected', 'Rejected']], A.filter);
clear(body);
body.appendChild(h('div', { class: 'card' }, [h('div', { class: 'acts' }, [qIn, fSel]), info, list, more, h('p', { class: 'small', text: 'Records are never deleted. Set a wrong entry to "rejected" to keep the history.' })]));
body.appendChild(h('div', { id: 'aToast', role: 'status', class: 'toast' }));
var last = null, seq = 0;
function query(reset) {
var term = adminSearch(qIn.value), my = ++seq;
var q = sb.from('donations').select('*', { count: reset ? 'exact' : undefined }).order('receipt_no', { ascending: false }).limit(PAGE);
if (fSel.value !== 'all') q = q.eq('status', fSel.value);
if (!reset && last != null) q = q.lt('receipt_no', last);
if (term) {
var hex = KH.parseRef(term);
if (hex) { var rg = KH.refRange(hex); q = q.gte('id', rg.lo).lte('id', rg.hi); }
else q = q.or(['donor_name', 'email', 'phone', 'txn_ref', 'country'].map(function (c) { return c + '.ilike."*' + term + '*"'; }).join(','));
}
return q.then(function (r) {
if (my !== seq) return;
var rows = unwrap(r);
if (reset) { clear(list); A.total = r.count; }
rows.forEach(function (d) { list.appendChild(mini(d)); });
last = rows.length ? rows[rows.length - 1].receipt_no : last;
more.hidden = rows.length < PAGE;
info.textContent = (A.total != null ? A.total + ' matching. ' : '') + (list.children.length ? '' : 'Nothing here.');
});
}
function mini(d) {
var row = h('div', { class: 'mini' }), open = h('button', { type: 'button', class: 'btn sm ghost', text: 'Open' });
row.appendChild(h('span', { text: codeOf(d) + ' · ' + dateE(d.created_at) + ' · ' + d.donor_name + ' · ' + moneyE(d.amount, d.currency) + ' · ' }));
row.appendChild(h('span', { class: 'pill ' + d.status, text: d.status })); row.appendChild(open);
open.addEventListener('click', function () {
var c = null;
function onChange(kind, n) {
if (kind === 'edited') { var nc = card(n, onChange); c.replaceWith(nc); c = nc; return; }
row.replaceWith(mini(n || d)); c.remove();
}
c = card(d, onChange); row.after(c); open.disabled = true;
});
return row;
}
var timer = null;
qIn.addEventListener('input', function () { clearTimeout(timer); timer = setTimeout(function () { A.q = qIn.value; last = null; query(true); }, 350); });
fSel.addEventListener('change', function () { A.filter = fSel.value; last = null; query(true); });
more.addEventListener('click', function () { query(false); });
return loadDup().then(function () { return query(true); });
}
/* ---------- add offline donation ---------- */
function aAdd(body) {
return sb.from('settings').select('key,value').eq('key', 'rates').maybeSingle().then(function (r) {
var rates = (r.data && r.data.value) || { NPR: 1 };
var f = h('form', { novalidate: true }), m = h('div', { role: 'status' });
var cur = sel('currency', CURS, 'NPR'), amt = inp('amount', '', 'number', { step: 'any', min: '0', required: true }), npr = inp('amount_npr', '', 'number', { step: 'any', min: '0', required: true });
function sync() { var a = Number(amt.value), rt = Number(rates[cur.value]) || (cur.value === 'NPR' ? 1 : 0); if (a > 0 && rt) npr.value = String(Math.round(a * rt * 100) / 100); }
amt.addEventListener('input', sync); cur.addEventListener('change', sync);
[field('Full name *', 'donor_name', '', 'text', { required: true, maxlength: '120' }), h('div', { class: 'fld' }, [h('label', { text: 'Amount *' }), amt]), h('div', { class: 'fld' }, [h('label', { text: 'Currency' }), cur]),
h('div', { class: 'fld' }, [h('label', { text: 'NPR value *' }), npr]), h('div', { class: 'fld' }, [h('label', { text: 'Method' }), sel('method', Object.keys(METHODS).map(function (k) { return [k, METHODS[k]]; }), 'cash')]),
field('Country', 'country', 'Nepal'), h('div', { class: 'fld' }, [h('label', { text: 'Public name' }), sel('display_pref', [['full', 'Full name'], ['first', 'First name only'], ['anonymous', 'Anonymous']], 'full')]),
field('Phone', 'phone', ''), field('E-mail', 'email', '', 'email'), field('Reference / note', 'txn_ref', ''), h('div', { class: 'fld' }, [h('label', { text: 'Message' }), h('textarea', { name: 'message', maxlength: '500' })]),
h('button', { class: 'btn', type: 'submit', text: 'Save as verified' }), m].forEach(function (x) { f.appendChild(x); });
f.addEventListener('submit', function (e) {
e.preventDefault();
var v = function (n) { return f.elements[n].value.trim(); };
var row = { donor_name: v('donor_name'), amount: Number(v('amount')), currency: v('currency'), amount_npr: Number(v('amount_npr')), method: v('method'), country: v('country') || null, display_pref: v('display_pref'),
phone: v('phone') || null, email: v('email') || null, txn_ref: v('txn_ref') || null, message: v('message') || null, status: 'verified', source: 'admin', verified_at: new Date().toISOString(),
admin_note: U.auditLine({ email: A.email, action: 'note', details: { event: 'added offline donation' } }) };
if (!row.donor_name || !(row.amount > 0) || !(row.amount_npr > 0)) { msg(m, 'err', 'Name, amount and NPR value are required.'); return; }
sb.from('donations').insert(row).then(function (r) { if (r.error) msg(m, 'err', r.error.message); else { f.reset(); f.elements.country.value = 'Nepal'; msg(m, 'ok', 'Saved and published to the public ledger.'); } });
});
clear(body); body.appendChild(h('div', { class: 'card' }, [h('h3', { text: 'Add an offline or cash donation' }), f]));
});
}
/* ---------- expenses ---------- */
function aExpenses(body) {
return fetchAll(function () { return sb.from('expenses').select('*').order('spent_on', { ascending: false }); }).then(function (rows) {
var f = h('form', {}), m = h('div', { role: 'status' }), tb = h('tbody');
[field('Date', 'spent_on', new Date().toISOString().slice(0, 10), 'date', { required: true }), field('Item *', 'item', '', 'text', { required: true, maxlength: '200' }),
field('Category', 'category', '', 'text', { maxlength: '80', list: 'catList' }), h('datalist', { id: 'catList' }, ['Materials', 'Dakshina', 'Venue', 'Food', 'Publicity', 'Transport', 'Other'].map(function (c) { return h('option', { value: c }); })),
field('Amount (NPR) *', 'amount_npr', '', 'number', { step: 'any', min: '0', required: true }), field('Note', 'note', '', 'text', { maxlength: '500' }), h('button', { class: 'btn', type: 'submit', text: 'Add' }), m].forEach(function (x) { f.appendChild(x); });
f.addEventListener('submit', function (e) {
e.preventDefault();
var g = function (n) { return f.elements[n].value.trim(); };
sb.from('expenses').insert({ spent_on: g('spent_on'), item: g('item'), category: g('category') || null, amount_npr: Number(g('amount_npr')), note: g('note') || null }).then(function (r) { if (r.error) msg(m, 'err', r.error.message); else renderAdmin(); });
});
rows.forEach(function (x) {
var del = h('button', { type: 'button', class: 'btn sm ghost', text: 'Delete', 'aria-label': 'Delete expense ' + x.item });
del.addEventListener('click', function () { if (!window.confirm('Delete this expense? It will disappear from the public table.')) return; sb.from('expenses').delete().eq('id', x.id).then(function (r) { if (r.error) msg(m, 'err', r.error.message); else renderAdmin(); }); });
tb.appendChild(h('tr', {}, [h('td', { text: dateE(x.spent_on) }), h('td', {}, [x.item, h('div', { class: 'small', text: x.category || '' })]), h('td', { class: 'r', text: nfe(x.amount_npr) }), h('td', {}, [del])]));
});
if (!rows.length) tb.appendChild(h('tr', {}, [h('td', { class: 'small', text: 'None yet.' })]));
clear(body); body.appendChild(h('div', { class: 'cols' }, [h('div', { class: 'card' }, [h('h3', { text: 'Add expense' }), f]), h('div', { class: 'card' }, [h('h3', { text: 'Recorded expenses' }), h('div', { class: 'scroll' }, [h('table', {}, [tb])])])]));
});
}
/* ---------- settings ---------- */
function toKtmInput(iso) {
if (!iso) return '';
var d = new Date(iso); if (isNaN(d)) return '';
var p = {}; new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kathmandu', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).formatToParts(d).forEach(function (x) { p[x.type] = x.value; });
return p.year + '-' + p.month + '-' + p.day + 'T' + p.hour + ':' + p.minute;
}
function fromKtmInput(v) { return /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(v) ? v + ':00+05:45' : null; }
U.toKtmInput = toKtmInput; U.fromKtmInput = fromKtmInput;
function uploadAsset(file) {
var ext = { 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp' }[file.type];
if (!ext) return Promise.reject(new Error('QR must be JPG, PNG or WebP'));
var path = 'qr/' + U.newId() + '.' + ext;
return sb.storage.from('assets').upload(path, file, { contentType: file.type }).then(function (up) { if (up.error) throw up.error; return sb.storage.from('assets').getPublicUrl(path).data.publicUrl; });
}
function aSettings(body) {
return sb.from('settings').select('key,value').then(function (r) {
var s = {}; unwrap(r).forEach(function (x) { s[x.key] = x.value; }); A.settings = s;
var ev = s.event || {}, P = s.payments || {}, C = s.contact || {}, R = s.rates || {}, F = s.features || {}, ex = Array.isArray(s.about_extra) ? s.about_extra : [];
var pair = function (k) { var v = s[k]; return typeof v === 'object' && v ? v : {}; };
var f = h('form', { class: 'cols' }), m = h('div', { role: 'status' });
function card2(title, kids) { return h('div', { class: 'card' }, [h('h3', { text: title })].concat(kids)); }
var qrIn = {};
function qr(k, url) { var hid = inp(k + '_qr', url || '', 'hidden'), file = h('input', { type: 'file', accept: 'image/jpeg,image/png,image/webp', 'aria-label': k + ' QR image' }); qrIn[k] = file; return [h('label', { text: k + ' QR image' }), hid].concat(url ? [h('img', { src: url, alt: '', width: '90' })] : [], [file]); }
var extraRows = []; for (var i = 0; i < 3; i++) { var e = ex[i] || {}; extraRows.push(field('Extra detail ' + (i + 1) + ' label (English)', 'x' + i + '_le', e.label_en), field('Label (Nepali)', 'x' + i + '_ln', e.label_np), field('Value (English)', 'x' + i + '_ve', e.value_en), field('Value (Nepali)', 'x' + i + '_vn', e.value_np)); }
var A1 = card2('Event and counters', [field('Title (English)', 'title_en', ev.title_en), field('Title (Nepali)', 'title_np', ev.title_np), field('Date text (English)', 'date_en', ev.date_en), field('Date text (Nepali)', 'date_np', ev.date_np),
field('Event date and time (Nepal time, enables the countdown)', 'date_iso', toKtmInput(ev.date_iso), 'datetime-local'), h('p', { class: 'small', text: 'Leave empty until the date is final. The public countdown shows days only and only for a future date.' }),
field('Venue (English)', 'venue_en', ev.venue_en), field('Venue (Nepali)', 'venue_np', ev.venue_np),
field('Ahutis offered so far', 'ahutis_done', s.ahutis_done == null ? 0 : s.ahutis_done, 'number'), field('Goal (ahutis)', 'goal_ahutis', s.goal_ahutis == null ? 10000000 : s.goal_ahutis, 'number'),
h('h3', { text: 'Contact (shown in the footer)' }), field('Phone', 'c_phone', C.phone), field('E-mail', 'c_email', C.email)]);
var B1 = card2('Payment details', [field('eSewa ID / number', 'esewa_id', (P.esewa || {}).id), field('eSewa account name', 'esewa_name', (P.esewa || {}).name)].concat(qr('esewa', (P.esewa || {}).qr_url),
[field('Khalti ID / number', 'khalti_id', (P.khalti || {}).id), field('Khalti account name', 'khalti_name', (P.khalti || {}).name)], qr('khalti', (P.khalti || {}).qr_url),
[field('Bank', 'bank_bank', (P.bank || {}).bank), field('Account name', 'bank_name', (P.bank || {}).account_name), field('Account number', 'bank_acc', (P.bank || {}).account_no), field('Branch', 'bank_branch', (P.bank || {}).branch)], qr('bank', (P.bank || {}).qr_url),
[h('div', { class: 'fld' }, [h('label', { text: 'International payment instructions' }), h('textarea', { name: 'intl_text', rows: '5', text: (P.intl || {}).text || '' })]),
h('h3', { text: 'Exchange rates to NPR' })], CURS.slice(1).map(function (c) { return field(c, 'rate_' + c, R[c], 'number', { step: 'any' }); })));
var C1 = card2('Optional public text (empty = hidden or default)', [field('Amount presets (comma separated numbers, empty = none)', 'presets', (Array.isArray(s.amount_presets) ? s.amount_presets : []).join(', ')),
field('Share text (English, use {url})', 'share_en', pair('share_text').en || (typeof s.share_text === 'string' ? s.share_text : '')), field('Share text (Nepali, use {url})', 'share_np', pair('share_text').np),
field('Verification time sentence (English)', 'vt_en', s.verify_time_en), field('Verification time sentence (Nepali)', 'vt_np', s.verify_time_np),
field('Receipt policy sentence (English)', 'rp_en', s.receipt_policy_en), field('Receipt policy sentence (Nepali)', 'rp_np', s.receipt_policy_np),
field('Unspent funds sentence (English)', 'eu_en', s.exp_unspent_en), field('Unspent funds sentence (Nepali)', 'eu_np', s.exp_unspent_np),
field('Footer sign-off (empty = default text)', 'footer_sign', typeof s.footer_sign === 'string' ? s.footer_sign : '')].concat(extraRows));
var D1 = card2('Intake guard (applies only after migration 003)', [h('label', { class: 'chk' }, [inp('g_guard', 'on', 'checkbox', F.guard ? { checked: true } : {}), ' Guard on']), field('Contributions allowed per e-mail/phone/reference per hour (1-100, empty = 5)', 'g_per', F.per_identity == null ? '' : F.per_identity, 'number', { min: '1', max: '100' })]);
[A1, B1, C1, D1].forEach(function (x) { f.appendChild(x); });
f.appendChild(h('div', { class: 'wide' }, [h('button', { class: 'btn', type: 'submit', text: 'Save settings' }), m]));
f.addEventListener('submit', function (e) {
e.preventDefault();
var E = f.elements, v = function (n) { return E[n].value.trim(); };
Promise.all(Object.keys(qrIn).map(function (k) { var fl = qrIn[k].files[0]; return fl ? uploadAsset(fl).then(function (u) { E[k + '_qr'].value = u; }) : null; })).then(function () {
var rates = { NPR: 1 }; CURS.slice(1).forEach(function (c) { rates[c] = Number(v('rate_' + c)) || Number(R[c]) || 0; });
var extra = []; for (var j = 0; j < 3; j++) { var o = { label_en: v('x' + j + '_le'), label_np: v('x' + j + '_ln'), value_en: v('x' + j + '_ve'), value_np: v('x' + j + '_vn') }; if ((o.label_en || o.label_np) && (o.value_en || o.value_np)) extra.push(o); }
var presets = v('presets').split(',').map(function (x) { return Number(x.trim()); }).filter(function (n) { return isFinite(n) && n > 0; });
var per = Number(v('g_per')), feat = Object.assign({}, F, { guard: !!E.g_guard.checked }); if (per >= 1 && per <= 100) feat.per_identity = Math.floor(per); else delete feat.per_identity;
var dt = v('date_iso'), iso = fromKtmInput(dt);
if (dt && !iso) throw new Error('Event date and time: use the date picker.');
var share = { en: v('share_en'), np: v('share_np') };
var rows = [
{ key: 'event', value: Object.assign({}, ev, { title_en: v('title_en'), title_np: v('title_np'), date_en: v('date_en'), date_np: v('date_np'), venue_en: v('venue_en'), venue_np: v('venue_np'), date_iso: iso }) },
{ key: 'ahutis_done', value: Number(E.ahutis_done.value) || 0 }, { key: 'goal_ahutis', value: Number(E.goal_ahutis.value) || 10000000 },
{ key: 'contact', value: { phone: v('c_phone'), email: v('c_email') } }, { key: 'rates', value: rates },
{ key: 'payments', value: { esewa: { id: v('esewa_id'), name: v('esewa_name'), qr_url: E.esewa_qr.value }, khalti: { id: v('khalti_id'), name: v('khalti_name'), qr_url: E.khalti_qr.value },
bank: { bank: v('bank_bank'), account_name: v('bank_name'), account_no: v('bank_acc'), branch: v('bank_branch'), qr_url: E.bank_qr.value }, intl: { text: E.intl_text.value.trim() } } },
{ key: 'amount_presets', value: presets }, { key: 'share_text', value: share.en || share.np ? share : '' },
{ key: 'verify_time_en', value: v('vt_en') }, { key: 'verify_time_np', value: v('vt_np') }, { key: 'receipt_policy_en', value: v('rp_en') }, { key: 'receipt_policy_np', value: v('rp_np') },
{ key: 'exp_unspent_en', value: v('eu_en') }, { key: 'exp_unspent_np', value: v('eu_np') }, { key: 'footer_sign', value: v('footer_sign') }, { key: 'about_extra', value: extra }
];
if (s.features || E.g_guard.checked || per) rows.push({ key: 'features', value: feat });
var now = new Date().toISOString();
return sb.from('settings').upsert(rows.map(function (r) { return Object.assign({ updated_at: now }, r); }));
}).then(function (r) { if (r.error) throw r.error; msg(m, 'ok', 'Saved. The public site shows these details within a minute.'); }, function (err) { msg(m, 'err', err.message || String(err)); });
});
clear(body); body.appendChild(f);
});
}
/* ---------- export ---------- */
function csvCell(v) { v = v == null ? '' : String(v); if (/^[=+\-@\t\r]/.test(v)) v = "'" + v; return '"' + v.replace(/"/g, '""') + '"'; }
U.csvCell = csvCell;
function aExport(body) {
var b = h('button', { type: 'button', class: 'btn', text: 'Download CSV' }), m = h('div', { role: 'status' });
b.addEventListener('click', function () {
fetchAll(function () { return sb.from('donations').select('*').order('receipt_no'); }).then(function (rows) {
var cols = ['receipt_no', 'created_at', 'status', 'source', 'donor_name', 'display_pref', 'phone', 'email', 'country', 'amount', 'currency', 'amount_npr', 'method', 'txn_ref', 'message', 'verified_at', 'admin_note'];
var csv = '﻿' + [cols.join(',')].concat(rows.map(function (r) { return cols.map(function (c) { return csvCell(r[c]); }).join(','); })).join('\r\n');
var a = h('a', { download: 'kotihom-donations-' + new Date().toISOString().slice(0, 10) + '.csv' });
a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' })); a.click();
}).then(null, function (e) { msg(m, 'err', e.message || String(e)); });
});
clear(body); body.appendChild(h('div', { class: 'card' }, [h('p', { text: 'Download every donation, including private contact details, as a CSV file. Keep this file secure.' }), b, m]));
}
}());
