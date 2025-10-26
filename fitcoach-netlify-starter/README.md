# FitCoach – Netlify Starter (Next.js 14 + Tailwind)

Modern training & nutrition tracker scaffold, **ready for Netlify**.

## Quick start

1) Create a repo on GitHub and upload these files (or push via git).
2) In **Netlify → Add new site → Import from Git**: select your repo.
3) Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
4) Add plugin automatically from `netlify.toml`.

## Dev locally
```bash
npm install
npm run dev
```

## Environment
Create `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=your-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon
```

(Barcode lookup API is a placeholder. In Phase 2, wire Supabase and real foods tables.)

## Pages
- `/` landing
- `/login` auth page (client-side helper)
- `/app` protected shell
- `/app/scan` barcode MVP (camera)
- `/api/foods/lookup` API route (replace with Supabase query)

## Netlify
- Uses `@netlify/plugin-nextjs` for SSR/functions.
- Edit `netlify.toml` if needed.

## Next steps
- Add Supabase schema & RLS (see plan from chat).
- Implement real lookup, meals, workouts, dashboards.
