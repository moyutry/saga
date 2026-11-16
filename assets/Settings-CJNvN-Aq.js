import{C as e,d as t,g as n,j as r,k as i,r as a,t as o,u as s}from"./settings-Cod2JY6U.js";import{$ as c,Bt as l,D as u,Et as d,Jt as ee,Lt as f,O as p,Ot as m,Pt as h,S as te,St as g,Tt as ne,Ut as re,Yt as ie,Zt as _,_t as v,an as y,bt as b,gt as x,ht as ae,jt as oe,mt as se,p as ce,pt as S,vt as le,w as ue,wt as de,xt as C,yt as fe}from"./index-D0c7zHt9.js";import{G as w,H as pe,_ as T,b as E,o as D,t as O,v as me,x as k}from"./ui-BDXduCUp.js";import{t as he}from"./copy-QZuMQrkQ.js";import{n as A,r as ge}from"./plus-DZ0PnLQU.js";import{a as _e,i as j,n as ve,o as ye,s as M,t as N}from"./keys-D95uRPcd.js";import{t as P}from"./wand-sparkles-BAxo3Ih9.js";import{a as F,t as be}from"./i18n-BOpYFhiX.js";import{l as xe,rt as I,tt as L}from"./actions-C4rhBsg5.js";import{n as R,t as Se}from"./PlayerSettings-Dsj_XyzP.js";var z={name:`database`,size:24,node:[[`ellipse`,{cx:`12`,cy:`5`,rx:`9`,ry:`3`,key:`msslwz`}],[`path`,{d:`M3 5V19A9 3 0 0 0 21 19V5`,key:`1wlel7`}],[`path`,{d:`M3 12A9 3 0 0 0 21 12`,key:`mv7ke4`}]]};z.node;var B=A(z),V={name:`download`,size:24,node:[[`path`,{d:`M12 15V3`,key:`m9g1x1`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`path`,{d:`m7 10 5 5 5-5`,key:`brsn70`}]]};V.node;var Ce=A(V),H={name:`log-out`,size:24,node:[[`path`,{d:`m16 17 5-5-5-5`,key:`1bji2h`}],[`path`,{d:`M21 12H9`,key:`dn1m92`}],[`path`,{d:`M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4`,key:`1uf3rs`}]]};H.node;var we=A(H),U={name:`monitor-play`,size:24,node:[[`path`,{d:`M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z`,key:`vbtd3f`}],[`path`,{d:`M12 17v4`,key:`1riwvh`}],[`path`,{d:`M8 21h8`,key:`1ev6f3`}],[`rect`,{x:`2`,y:`3`,width:`20`,height:`14`,rx:`2`,key:`x3v2xh`}]]};U.node;var Te=A(U),W={name:`palette`,size:24,node:[[`path`,{d:`M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z`,key:`e79jfc`}],[`circle`,{cx:`13.5`,cy:`6.5`,r:`.5`,fill:`currentColor`,key:`1okk4w`}],[`circle`,{cx:`17.5`,cy:`10.5`,r:`.5`,fill:`currentColor`,key:`f64h9f`}],[`circle`,{cx:`6.5`,cy:`12.5`,r:`.5`,fill:`currentColor`,key:`qy21gx`}],[`circle`,{cx:`8.5`,cy:`7.5`,r:`.5`,fill:`currentColor`,key:`fotxhn`}]]};W.node;var Ee=A(W),G={name:`sliders-horizontal`,size:24,node:[[`path`,{d:`M10 5H3`,key:`1qgfaw`}],[`path`,{d:`M12 19H3`,key:`yhmn1j`}],[`path`,{d:`M14 3v4`,key:`1sua03`}],[`path`,{d:`M16 17v4`,key:`1q0r14`}],[`path`,{d:`M21 12h-9`,key:`1o4lsq`}],[`path`,{d:`M21 19h-5`,key:`1rlt1p`}],[`path`,{d:`M21 5h-7`,key:`1oszz2`}],[`path`,{d:`M8 10v4`,key:`tgpxqk`}],[`path`,{d:`M8 12H3`,key:`a7s4jb`}]]};G.node;var De=A(G),K={name:`smartphone`,size:24,node:[[`rect`,{width:`14`,height:`20`,x:`5`,y:`2`,rx:`2`,ry:`2`,key:`1yt0o3`}],[`path`,{d:`M12 18h.01`,key:`mhygvu`}]]};K.node;var Oe=A(K),q={name:`upload`,size:24,node:[[`path`,{d:`M12 3v12`,key:`1x0j5s`}],[`path`,{d:`m17 8-5-5-5 5`,key:`7q97r8`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}]]};q.node;var ke=A(q),J=r(i(),1);async function Y(){await Promise.race([S().catch(()=>{}),new Promise(e=>setTimeout(e,6e3))])}async function Ae(e){let t=v().find(t=>t.id===e);t&&C&&g.getState().session?.user.id!==e&&(await Y(),C.auth.stopAutoRefresh(),localStorage.setItem(`velvet.auth`,JSON.stringify(t.session)),location.hash=`#/`,location.reload())}async function X(){C&&(await Y(),C.auth.stopAutoRefresh(),localStorage.removeItem(`velvet.auth`),location.hash=`#/`,location.reload())}async function je(){if(!C)return;let e=g.getState().session?.user.id;await Y(),e&&ae(e),await C.auth.signOut({scope:`local`}).catch(()=>{})}var Me=`-- Saga — Supabase schema (safe to run again any time — it only adds what is missing)
-- Your data lives in one generic document table; every row is private to its owner (row level security).
-- Friends can read each other's watchlist (titles + status + rating only) and send suggestions.

create table if not exists public.docs (
  user_id    uuid        not null default auth.uid() references auth.users on delete cascade,
  coll       text        not null,              -- items | history | plans | goals | lists | kv
  id         text        not null,
  data       jsonb,
  deleted    boolean     not null default false,
  updated_at bigint      not null,              -- client clock (ms), last write wins
  synced_at  timestamptz not null default now(), -- server clock, used as the pull cursor
  primary key (user_id, coll, id)
);

create index if not exists docs_user_synced on public.docs (user_id, synced_at);

alter table public.docs enable row level security;

drop policy if exists "own docs" on public.docs;
create policy "own docs" on public.docs
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create or replace function public.docs_touch() returns trigger
language plpgsql as $$
begin
  new.synced_at := clock_timestamp();
  return new;
end $$;

drop trigger if exists docs_touch on public.docs;
create trigger docs_touch before insert or update on public.docs
  for each row execute function public.docs_touch();

-- ───────────────────────── Friends ─────────────────────────

create or replace function public.new_invite_code() returns text
language plpgsql as $$
declare
  chars text := 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  c text := '';
begin
  for i in 1..6 loop
    c := c || substr(chars, 1 + floor(random() * length(chars))::int, 1);
  end loop;
  return c;
end $$;

create table if not exists public.profiles (
  id         uuid primary key default auth.uid() references auth.users on delete cascade,
  name       text not null default '',
  avatar     text,                                   -- an emoji
  color      text,                                   -- avatar colour
  code       text not null unique default public.new_invite_code(),
  updated_at timestamptz not null default now()
);
-- TMDB / OMDb keys you chose to share with friends, so they don't need their own
alter table public.profiles add column if not exists shared_keys jsonb;

create table if not exists public.friends (
  user_id    uuid not null references auth.users on delete cascade,
  friend_id  uuid not null references auth.users on delete cascade,
  created_at timestamptz not null default now(),
  primary key (user_id, friend_id),
  check (user_id <> friend_id)
);

create table if not exists public.suggestions (
  id         uuid primary key default gen_random_uuid(),
  from_id    uuid not null default auth.uid() references auth.users on delete cascade,
  to_id      uuid not null references auth.users on delete cascade,
  media_type text not null check (media_type in ('movie', 'tv')),
  tmdb_id    integer not null,
  title      text,
  poster     text,
  year       integer,
  note       text,
  status     text not null default 'new' check (status in ('new', 'added', 'seen', 'dismissed')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists suggestions_to on public.suggestions (to_id, created_at desc);
create index if not exists suggestions_from on public.suggestions (from_id, created_at desc);

-- true when \`other\` is one of my friends (security definer → no policy recursion)
create or replace function public.is_friend(other uuid) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.friends where user_id = auth.uid() and friend_id = other);
$$;

alter table public.profiles enable row level security;
alter table public.friends enable row level security;
alter table public.suggestions enable row level security;

drop policy if exists "profiles: me and friends" on public.profiles;
create policy "profiles: me and friends" on public.profiles
  for select using (id = auth.uid() or public.is_friend(id));
drop policy if exists "profiles: insert mine" on public.profiles;
create policy "profiles: insert mine" on public.profiles
  for insert with check (id = auth.uid());
drop policy if exists "profiles: update mine" on public.profiles;
create policy "profiles: update mine" on public.profiles
  for update using (id = auth.uid()) with check (id = auth.uid());

drop policy if exists "friends: mine" on public.friends;
create policy "friends: mine" on public.friends
  for select using (auth.uid() = user_id or auth.uid() = friend_id);
drop policy if exists "friends: unfriend" on public.friends;
create policy "friends: unfriend" on public.friends
  for delete using (auth.uid() = user_id or auth.uid() = friend_id);

drop policy if exists "suggestions: mine" on public.suggestions;
create policy "suggestions: mine" on public.suggestions
  for select using (auth.uid() = from_id or auth.uid() = to_id);
drop policy if exists "suggestions: send to friends" on public.suggestions;
create policy "suggestions: send to friends" on public.suggestions
  for insert with check (auth.uid() = from_id and public.is_friend(to_id));
drop policy if exists "suggestions: answer" on public.suggestions;
create policy "suggestions: answer" on public.suggestions
  for update using (auth.uid() = to_id or auth.uid() = from_id);
drop policy if exists "suggestions: delete" on public.suggestions;
create policy "suggestions: delete" on public.suggestions
  for delete using (auth.uid() = to_id or auth.uid() = from_id);

-- Friends may read your watchlist titles (not your history, plans or settings).
drop policy if exists "friends read items" on public.docs;
create policy "friends read items" on public.docs
  for select using (coll = 'items' and public.is_friend(user_id));

create or replace function public.touch_updated_at() returns trigger
language plpgsql as $$
begin
  new.updated_at := now();
  return new;
end $$;
drop trigger if exists suggestions_touch on public.suggestions;
create trigger suggestions_touch before update on public.suggestions
  for each row execute function public.touch_updated_at();
drop trigger if exists profiles_touch on public.profiles;
create trigger profiles_touch before update on public.profiles
  for each row execute function public.touch_updated_at();

-- Every new account gets a profile with an invite code.
create or replace function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, name)
  values (new.id, coalesce(nullif(new.raw_user_meta_data->>'name', ''), split_part(new.email, '@', 1)))
  on conflict (id) do nothing;
  return new;
end $$;
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users
  for each row execute function public.handle_new_user();
insert into public.profiles (id, name)
  select id, coalesce(nullif(raw_user_meta_data->>'name', ''), split_part(email, '@', 1)) from auth.users
  on conflict (id) do nothing;

-- Use someone's invite code → you're friends (both ways).
create or replace function public.connect_friend(invite text) returns uuid
language plpgsql security definer set search_path = public as $$
declare
  me uuid := auth.uid();
  other uuid;
begin
  if me is null then raise exception 'not signed in'; end if;
  select id into other from public.profiles where code = upper(trim(invite));
  if other is null then raise exception 'invite code not found'; end if;
  if other = me then raise exception 'that is your own code'; end if;
  insert into public.friends (user_id, friend_id) values (me, other), (other, me) on conflict do nothing;
  return other;
end $$;

-- Who sent this invite? (shown on the sign-in screen of an invite link)
create or replace function public.invite_info(invite text) returns table (name text, avatar text, color text)
language sql stable security definer set search_path = public as $$
  select name, avatar, color from public.profiles where code = upper(trim(invite)) limit 1;
$$;

-- A fresh invite code (e.g. after sharing it too widely).
create or replace function public.reset_invite_code() returns text
language plpgsql security definer set search_path = public as $$
declare c text := public.new_invite_code();
begin
  update public.profiles set code = c where id = auth.uid();
  return c;
end $$;

revoke all on function public.connect_friend(text) from public, anon;
revoke all on function public.reset_invite_code() from public, anon;
grant execute on function public.connect_friend(text) to authenticated;
grant execute on function public.reset_invite_code() to authenticated;
grant execute on function public.invite_info(text) to anon, authenticated;

-- ───────────────────────── Live updates ─────────────────────────
do $$ begin
  alter publication supabase_realtime add table public.docs;
exception when duplicate_object then null;
end $$;
do $$ begin
  alter publication supabase_realtime add table public.suggestions;
exception when duplicate_object then null;
end $$;
do $$ begin
  alter publication supabase_realtime add table public.friends;
exception when duplicate_object then null;
end $$;
`,Z=ge();function Q({title:e,icon:t,children:n,className:r,sub:i}){return(0,Z.jsxs)(`section`,{className:L(`surface rounded-[28px] p-5 md:p-6`,r),children:[(0,Z.jsxs)(`div`,{className:`mb-4 flex items-center gap-3`,children:[t&&(0,Z.jsx)(`span`,{className:`bg-brand-gradient grid size-10 shrink-0 place-items-center rounded-2xl text-white shadow-lg [&_svg]:size-5`,children:t}),(0,Z.jsxs)(`div`,{className:`min-w-0`,children:[(0,Z.jsx)(`h2`,{className:`text-[18px] font-bold tracking-tight`,children:e}),i&&(0,Z.jsx)(`p`,{className:`text-xs text-fg3`,children:i})]})]}),n]})}function $({label:e,help:t,value:n,onSave:r,test:i,envProvided:a,getUrl:o}){let{t:s}=F(),[c,l]=(0,J.useState)(n),[u,d]=(0,J.useState)(!1),[f,p]=(0,J.useState)(`idle`),m=async(e=c)=>{p(`testing`);let t=await i(e.trim()).catch(()=>!1);p(t?`ok`:`bad`),t&&r(e.trim())};return(0,Z.jsxs)(`div`,{className:`py-2`,children:[(0,Z.jsxs)(`div`,{className:`mb-2 flex items-center justify-between gap-2`,children:[(0,Z.jsx)(`span`,{className:`text-sm font-semibold`,children:e}),(0,Z.jsxs)(`button`,{onClick:()=>j(o),className:`flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold text-accent hover:bg-accent/10`,children:[s(`settings.getKey`),` `,(0,Z.jsx)(M,{className:`size-3`})]})]}),(0,Z.jsxs)(`div`,{className:`flex gap-2`,children:[(0,Z.jsxs)(`div`,{className:`relative flex-1`,dir:`ltr`,children:[(0,Z.jsx)(D,{type:u?`text`:`password`,value:c,onChange:e=>{l(e.target.value),p(`idle`)},onPaste:e=>{let t=e.clipboardData.getData(`text`);t.trim().length>20&&setTimeout(()=>m(t),50)},onBlur:()=>c.trim()!==n&&r(c.trim()),placeholder:a?s(`settings.envKey`):`••••••••••••`,className:L(`pe-11 font-mono text-xs`,f===`ok`&&`border-good/60`,f===`bad`&&`border-bad/60`),dir:`ltr`}),(0,Z.jsx)(`button`,{onClick:()=>d(!u),className:`absolute top-1/2 right-4 -translate-y-1/2 text-fg3 hover:text-fg`,children:u?(0,Z.jsx)(ie,{className:`size-4`}):(0,Z.jsx)(ee,{className:`size-4`})})]}),(0,Z.jsx)(O,{onClick:()=>m(),disabled:!c.trim()||f===`testing`,className:`h-12`,icon:f===`testing`?(0,Z.jsx)(E,{className:`size-4`}):f===`ok`?(0,Z.jsx)(w,{className:`size-4 text-good`}):f===`bad`?(0,Z.jsx)(pe,{className:`size-4 text-bad`}):void 0,children:s(`settings.test`)})]}),(0,Z.jsx)(`p`,{className:L(`mt-1.5 text-xs leading-relaxed`,f===`ok`?`text-good`:f===`bad`?`text-bad`:`text-fg3`),children:f===`ok`?s(`settings.keyOk`):f===`bad`?s(`settings.keyBad`):t})]})}function Ne(){let{t:e}=F(),t=le(),[n,r]=(0,J.useState)(t?.url||``),[i,a]=(0,J.useState)(t?.key||``),[o,s]=(0,J.useState)(!1),c=[{k:`sync.s1`,action:(0,Z.jsxs)(`button`,{onClick:()=>j(`https://supabase.com/dashboard/new`),className:`flex shrink-0 items-center gap-1 rounded-full bg-panel2 px-3 py-1.5 text-xs font-bold hover:bg-panel3`,children:[`supabase.com `,(0,Z.jsx)(M,{className:`size-3`})]})},{k:`sync.s2`,action:(0,Z.jsxs)(`button`,{onClick:async()=>{await navigator.clipboard.writeText(Me),s(!0),setTimeout(()=>s(!1),2e3)},className:L(`flex shrink-0 items-center gap-1 rounded-full px-3 py-1.5 text-xs font-bold transition`,o?`bg-good text-black`:`bg-accent text-white`),children:[o?(0,Z.jsx)(w,{className:`size-3.5`}):(0,Z.jsx)(he,{className:`size-3.5`}),` `,e(o?`sync.copied`:`sync.copySql`)]})},{k:`sync.s3`},{k:`sync.s4`}];return(0,Z.jsxs)(`div`,{className:`mt-4 rounded-3xl border border-line p-4`,children:[(0,Z.jsxs)(`div`,{className:`flex items-center gap-2 text-sm font-bold`,children:[(0,Z.jsx)(B,{className:`size-4 text-accent`}),` `,e(`settings.server`)]}),(0,Z.jsx)(`p`,{className:`mt-1 text-xs leading-relaxed text-fg3`,children:e(`settings.serverHelp`)}),(0,Z.jsx)(`ol`,{className:`mt-3 space-y-2`,children:c.map((t,n)=>(0,Z.jsxs)(`li`,{className:`flex items-center gap-3 rounded-2xl bg-panel p-2.5`,children:[(0,Z.jsx)(`span`,{className:`grid size-7 shrink-0 place-items-center rounded-full bg-panel3 text-xs font-bold`,children:n+1}),(0,Z.jsx)(`span`,{className:`min-w-0 flex-1 text-[13px] leading-snug`,children:e(t.k)}),t.action]},t.k))}),(0,Z.jsxs)(`div`,{className:`mt-3 flex flex-col gap-2`,children:[(0,Z.jsx)(D,{value:n,onChange:e=>r(e.target.value),placeholder:`https://xxxx.supabase.co`,dir:`ltr`,className:`font-mono text-xs`}),(0,Z.jsx)(D,{value:i,onChange:e=>a(e.target.value),placeholder:e(`settings.serverKey`),dir:`ltr`,className:`font-mono text-xs`}),(0,Z.jsxs)(`div`,{className:`flex gap-2`,children:[(0,Z.jsx)(O,{variant:`primary`,disabled:!n.trim()||!i.trim(),onClick:()=>{x({url:n.trim().replace(/\/+$/,``),key:i.trim()}),b(!1),I(e(`settings.serverSaved`)),setTimeout(()=>location.reload(),600)},children:e(`sync.connect`)}),t&&(0,Z.jsx)(O,{variant:`ghost`,onClick:()=>{x(null),location.reload()},children:e(`common.remove`)})]})]})]})}function Pe(){let{t:e,lang:t}=F(),n=g(e=>e.session),r=g(e=>e.localMode),i=se(),a=c(e=>e.me),o=y();if(C&&n){let r=v().filter(e=>e.id!==n.user.id);return(0,Z.jsxs)(`div`,{children:[(0,Z.jsxs)(`div`,{className:`flex items-center gap-3 rounded-3xl bg-panel2 p-3`,children:[a?(0,Z.jsx)(p,{p:a,size:46}):(0,Z.jsx)(`span`,{className:`bg-brand-gradient grid size-11 place-items-center rounded-full text-lg font-bold text-white uppercase`,children:n.user.email?.[0]}),(0,Z.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,Z.jsx)(`div`,{className:`truncate text-[15px] font-bold`,children:a?.name||n.user.email}),(0,Z.jsx)(`div`,{className:`truncate text-xs text-fg3`,children:n.user.email}),(0,Z.jsxs)(`div`,{className:`text-xs text-fg3`,children:[i.status===`syncing`?e(`settings.syncing`):i.lastSync?e(`settings.lastSync`,{t:ce(i.lastSync,t)}):``,i.status===`error`&&(0,Z.jsxs)(`span`,{className:`text-bad`,children:[` · `,i.error]})]})]})]}),(0,Z.jsxs)(`div`,{className:`mt-3 flex flex-wrap gap-2`,children:[(0,Z.jsx)(O,{onClick:()=>S(),icon:(0,Z.jsx)(h,{className:L(`size-4`,i.status===`syncing`&&`animate-spin`)}),children:e(`settings.syncNow`)}),(0,Z.jsx)(O,{onClick:()=>o(`/friends`),icon:(0,Z.jsx)(ne,{className:`size-4`}),children:e(`nav.friends`)}),(0,Z.jsx)(O,{variant:`ghost`,onClick:()=>je(),icon:(0,Z.jsx)(we,{className:`size-4`}),children:e(`settings.signOut`)})]}),(0,Z.jsxs)(`div`,{className:`mt-5 border-t border-line pt-4`,children:[(0,Z.jsx)(`div`,{className:`mb-2 text-xs font-bold tracking-wide text-fg3`,children:e(`settings.accountsHere`)}),(0,Z.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[r.map(t=>(0,Z.jsxs)(`button`,{onClick:()=>Ae(t.id),className:`flex items-center gap-3 rounded-2xl p-2 text-start transition hover:bg-panel2 active:scale-[0.98]`,children:[(0,Z.jsx)(p,{p:{name:t.name||t.email,avatar:t.avatar,color:t.color},size:36}),(0,Z.jsxs)(`span`,{className:`min-w-0 flex-1`,children:[(0,Z.jsx)(`span`,{className:`block truncate text-sm font-semibold`,children:t.name||t.email.split(`@`)[0]}),(0,Z.jsx)(`span`,{className:`block truncate text-xs text-fg3`,children:t.email})]}),(0,Z.jsx)(`span`,{className:`rounded-full bg-panel2 px-3 py-1.5 text-xs font-bold`,children:e(`settings.switch`)})]},t.id)),(0,Z.jsxs)(`button`,{onClick:()=>X(),className:`flex items-center gap-3 rounded-2xl p-2 text-start text-sm font-semibold text-fg2 transition hover:bg-panel2 hover:text-fg`,children:[(0,Z.jsx)(`span`,{className:`grid size-9 place-items-center rounded-full border-2 border-dashed border-line2`,children:(0,Z.jsx)(d,{className:`size-4`})}),e(`settings.addAccount`)]})]}),(0,Z.jsx)(`p`,{className:`mt-2 text-xs leading-relaxed text-fg3`,children:e(`settings.accountsHint`)})]})]})}return(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`p`,{className:`text-sm text-fg2`,children:e(`settings.localMode`)}),C&&r&&(0,Z.jsx)(O,{className:`mt-3`,variant:`primary`,onClick:()=>b(!1),icon:(0,Z.jsx)(_,{className:`size-4`}),children:e(`settings.signIn`)}),!fe()&&(0,Z.jsx)(Ne,{})]})}function Fe(){let{t}=F(),[r,i]=(0,J.useState)(null),a=async()=>{let e={app:`velvet`,version:1,exportedAt:new Date().toISOString(),items:await n.items.toArray(),history:await n.history.toArray(),plans:await n.plans.toArray(),goals:await n.goals.toArray(),lists:await n.lists.toArray(),kv:(await n.kv.toArray()).filter(e=>e.key!==`settings`)},t=new Blob([JSON.stringify(e)],{type:`application/json`}),r=document.createElement(`a`);r.href=URL.createObjectURL(t),r.download=`saga-backup-${new Date().toISOString().slice(0,10)}.json`,r.click(),URL.revokeObjectURL(r.href)},o=async n=>{try{let r=JSON.parse(await n.text()),i=0;for(let t of[`items`,`history`,`plans`,`goals`,`lists`,`kv`]){let n=r[t];Array.isArray(n)&&n.length&&(await e(t,n),i+=n.length)}I(t(`settings.imported`,{n:i}),{kind:`ok`})}catch{I(t(`common.error`),{kind:`err`})}};return(0,Z.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,Z.jsx)(O,{onClick:a,icon:(0,Z.jsx)(Ce,{className:`size-4`}),children:t(`settings.export`)}),(0,Z.jsxs)(`label`,{className:`surface surface-hover inline-flex h-10 cursor-pointer items-center gap-2 rounded-full px-4.5 text-sm font-semibold`,children:[(0,Z.jsx)(ke,{className:`size-4`}),t(`settings.import`),(0,Z.jsx)(`input`,{type:`file`,accept:`application/json`,className:`hidden`,onChange:e=>e.target.files?.[0]&&o(e.target.files[0])})]}),(0,Z.jsx)(O,{onClick:async()=>{let e=await n.items.toArray();for(let n=0;n<e.length;n++){i(t(`settings.refreshing`,{d:n+1,t:e.length}));try{await xe(e[n],!0)}catch{}}i(null)},disabled:!!r,icon:r?(0,Z.jsx)(E,{className:`size-4`}):(0,Z.jsx)(h,{className:`size-4`}),children:r||t(`settings.refreshAll`)}),(0,Z.jsx)(O,{variant:`ghost`,onClick:async()=>{if(await n.cache.clear(),`caches`in window)for(let e of await caches.keys())await caches.delete(e);I(t(`settings.cacheCleared`))},icon:(0,Z.jsx)(m,{className:`size-4`}),children:t(`settings.clearCache`)})]})}function Ie(){let{t:e,lang:n}=F(),r=t(),i=y();return(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(te,{title:e(`settings.title`)}),(0,Z.jsxs)(`div`,{className:`stagger mt-6 grid gap-4 lg:grid-cols-2`,children:[(0,Z.jsxs)(Q,{title:e(`settings.general`),icon:(0,Z.jsx)(Ee,{}),children:[(0,Z.jsx)(R,{label:e(`settings.language`),children:(0,Z.jsx)(T,{value:r.lang,onChange:e=>s({lang:e}),options:[{value:`he`,label:`עברית`},{value:`en`,label:`English`}]})}),(0,Z.jsx)(R,{label:e(`settings.theme`),children:(0,Z.jsx)(T,{value:r.theme,onChange:e=>s({theme:e}),options:[{value:`dark`,label:e(`settings.theme.dark`)},{value:`oled`,label:e(`settings.theme.oled`)},{value:`light`,label:e(`settings.theme.light`)}]})}),(0,Z.jsx)(R,{label:e(`settings.accent`),children:(0,Z.jsx)(`div`,{className:`flex gap-2.5`,children:o.map(e=>(0,Z.jsx)(`button`,{onClick:()=>s({accent:e.color}),className:L(`size-8 rounded-full ring-offset-[3px] ring-offset-bg transition hover:scale-110 active:scale-90`,(r.accent===e.color||e.id===`saga`&&r.accent===`#f0436a`)&&`ring-2 ring-fg`),style:{background:`linear-gradient(135deg, ${e.color}, ${e.color2})`},"aria-label":e.id},e.id))})})]}),(0,Z.jsxs)(Q,{title:e(`settings.data`),icon:(0,Z.jsx)(l,{}),sub:e(`settings.dataSub`),children:[(0,Z.jsx)($,{label:e(`settings.tmdbKey`),help:e(`settings.tmdbHelp`),value:r.tmdbKey,onSave:e=>s({tmdbKey:e}),test:ye,envProvided:a(),getUrl:ve}),(0,Z.jsx)($,{label:e(`settings.omdbKey`),help:e(`settings.omdbHelp`),value:r.omdbKey,onSave:e=>s({omdbKey:e}),test:_e,getUrl:N})]}),(0,Z.jsx)(Q,{title:e(`settings.account`),icon:(0,Z.jsx)(_,{}),sub:e(`settings.accountSub`),children:(0,Z.jsx)(Pe,{})}),(0,Z.jsxs)(Q,{title:e(`settings.display`),icon:(0,Z.jsx)(De,{}),children:[(0,Z.jsx)(R,{label:e(`settings.ratingSource`),children:(0,Z.jsx)(T,{size:`sm`,value:r.ratingSource,onChange:e=>s({ratingSource:e}),options:[{value:`imdb`,label:`IMDb`},{value:`tmdb`,label:`TMDB`}]})}),(0,Z.jsx)(R,{label:e(`settings.posterSize`),children:(0,Z.jsx)(T,{size:`sm`,value:r.posterSize,onChange:e=>s({posterSize:e}),options:[{value:`sm`,label:e(`settings.size.sm`)},{value:`md`,label:e(`settings.size.md`)},{value:`lg`,label:e(`settings.size.lg`)}]})}),(0,Z.jsx)(R,{label:e(`settings.defaultStatus`),children:(0,Z.jsx)(me,{value:r.defaultStatus,onChange:e=>s({defaultStatus:e}),options:be.map(t=>({value:t,label:e(`status.${t}`)}))})}),(0,Z.jsx)(R,{label:e(`settings.specials`),children:(0,Z.jsx)(k,{checked:r.includeSpecials,onChange:e=>s({includeSpecials:e})})}),(0,Z.jsx)(R,{label:e(`settings.spoilers`),children:(0,Z.jsx)(k,{checked:r.hideSpoilers,onChange:e=>s({hideSpoilers:e})})})]}),de()&&(0,Z.jsxs)(Q,{title:e(`settings.openPlayerSettings`),icon:(0,Z.jsx)(Te,{}),className:`lg:col-span-2`,children:[(0,Z.jsx)(`div`,{className:`mb-4`,children:(0,Z.jsx)(O,{onClick:()=>i(`/files`),icon:(0,Z.jsx)(re,{className:`size-4`}),children:e(`nav.files`)})}),(0,Z.jsx)(Se,{})]}),(0,Z.jsx)(Q,{title:e(`settings.backup`),icon:(0,Z.jsx)(B,{}),children:(0,Z.jsx)(Fe,{})}),(0,Z.jsxs)(Q,{title:e(`settings.more`),icon:(0,Z.jsx)(oe,{}),children:[(0,Z.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,Z.jsx)(O,{onClick:()=>i(`/welcome`),icon:(0,Z.jsx)(P,{className:`size-4`}),children:e(`settings.replayWelcome`)}),(0,Z.jsx)(O,{onClick:()=>i(`/universes`),icon:(0,Z.jsx)(f,{className:`size-4`}),children:e(`settings.manageUniverses`)})]}),(0,Z.jsxs)(`div`,{className:`mt-5 flex items-start gap-3 rounded-2xl bg-panel p-3.5`,children:[(0,Z.jsx)(Oe,{className:`mt-0.5 size-5 shrink-0 text-accent`}),(0,Z.jsx)(`p`,{className:`text-sm leading-relaxed text-fg2`,children:e(`settings.install`)})]}),(0,Z.jsxs)(`div`,{className:`mt-6 flex items-center gap-3 text-fg3`,children:[(0,Z.jsx)(ue,{size:30}),(0,Z.jsxs)(`span`,{className:`text-xs`,children:[n===`he`?u.tagline.he:u.tagline.en,` · `,e(`settings.about`)]})]})]})]})]})}export{Ie as default};