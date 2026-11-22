# borderlands3-cheats-.org

Borderlands 3 Cheats marketing site (live: **borderlands3cheats.org**) — Astro 7 static build.

### Cloudflare Pages

| Setting | Value |
|--------|--------|
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node | `>=22.12.0` |
| Deploy command | *(empty — recommended)* **or** `npm run deploy:cf` |

Pre-ship: `npm run qa`

Avoid bare `npx wrangler deploy` on a Pages project — use **`npm run deploy:cf`** (`wrangler pages deploy dist`).