# vasilis-vasiliadis-site

Επίσημο site του Βασίλη Βασιλειάδη: Mentoring, Strategy, Education και η μέθοδος Bill.

## Stack
Next.js 16 (στατικό export) · TypeScript · Tailwind CSS v4 · Cloudflare Workers (static assets + API)

## Εντολές
```bash
npm install
npm run dev       # http://localhost:3000 (χωρίς /api)
npm run preview   # build + Cloudflare τοπικά, με /api (χρειάζεται .dev.vars)
npm run deploy    # build + ανέβασμα στο Cloudflare
```

## Δομή
- `src/lib/site.ts`: στοιχεία επιχείρησης, μενού, πυλώνες, προϊόντα, τιμές, σύνδεσμοι πληρωμής
- `src/lib/billscore.ts`: οι 20 ερωτήσεις και η λογική του Bill Score (ίδια με το Excel)
- `worker/index.ts`: redirect thebillmethod.gr (αρχική → /billscore), `POST /api/billscore` → MailerLite
- `wrangler.jsonc`: ρυθμίσεις Cloudflare

## Ανέβασμα στο Cloudflare (μία φορά)
1. Cloudflare → Workers & Pages → Create → Import a repository → αυτό το repo.
2. Build command: `npm run build` · Deploy command: `npx wrangler deploy`.
3. Worker → Settings → Variables and Secrets → Secret `MAILERLITE_API_KEY`
   (MailerLite → Integrations → API → νέο token).
4. Worker → Settings → Domains & Routes → Custom domain: `vasilisvasiliadis.gr`,
   `www.vasilisvasiliadis.gr`, `thebillmethod.gr`, `www.thebillmethod.gr`
   (τα domains πρέπει πρώτα να έχουν μπει στο Cloudflare με αλλαγή nameservers στο Papaki).

Από εκεί και πέρα, κάθε push στο GitHub ανεβαίνει αυτόματα.

## Bill Score → MailerLite
Το worker ξαναϋπολογίζει το σκορ και γράφει τον συνδρομητή στο group «Bill Score»
(`MAILERLITE_GROUP_ID` στο `wrangler.jsonc`), με τα πεδία `bill_score`, `bill_grade`, `bill_xtise`,
`bill_veltiose`, `bill_odigise`, `bill_anevaa`, `pilwnas_ekkinisis`, `bill_proto_vima`, `bill_proti_niki`,
`diadromi`, `eghkrisi_enimerwseon`. Η είσοδος στο group ενεργοποιεί το automation
«Bill Score · email αποτελέσματος».
