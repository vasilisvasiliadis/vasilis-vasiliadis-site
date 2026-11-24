# vasilis-vasiliadis-site

Επίσημο site του Βασίλη Βασιλειάδη · Mentoring | Strategy | Education · The Bill Method™

## Stack
Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Vercel

## Εντολές
```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Δομή
- `src/lib/site.ts`: μενού, πυλώνες, προϊόντα, τιμές (`price: null` = «Τιμή σύντομα»)
- `src/components/home.tsx`: ενότητες Αρχικής
- `src/app/*`: σελίδες (όσες δεν έχουν χτιστεί δείχνουν «ετοιμάζεται»)
- `public/brand`, `public/images`: λογότυπα, εξώφυλλα, φωτογραφίες

## Domains
- vasilisvasiliadis.gr: κύριο
- thebillmethod.gr: redirect (αρχική → /bill-method, υπόλοιπα 1:1), βλ. `next.config.ts`
