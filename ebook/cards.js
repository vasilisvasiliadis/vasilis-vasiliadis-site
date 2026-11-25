const { chromium } = require('playwright');
const cards = [
  ["Τα δύσκολα χρόνια δεν σου δίνουν πτυχίο.", "Σου δίνουν ραχοκοκαλιά."],
  ["Όποιος δεν αντέχει να φανεί χαμηλά για λίγο,", "δεν θα αντέξει να μείνει ψηλά για πολύ."],
  ["Την απουσία των δικών σου ανθρώπων δεν τη μετράς.", "Μόνο την πληρώνεις."],
  ["Το «απέτυχα» είναι γεγονός. Το «είμαι αποτυχημένος» είναι ταυτότητα.", "Διάλεξε ποιο θα κρατήσεις."],
  ["Βάλε όλη σου τη δύναμη να ξεκολλήσεις τη ρόδα.", "Μόλις ξεκολλήσει, την κουμαντάρεις όπου θέλεις."],
  ["Επιμονή δεν είναι μια ηρωική στιγμή.", "Είναι να το ξανακάνεις αύριο."],
];
(async () => {
  const out = process.argv[2];
  const proxy = process.env.HTTPS_PROXY || process.env.https_proxy;
  const b = await chromium.launch(proxy ? { proxy: { server: proxy } } : {});
  const p = await b.newPage({ viewport: { width: 1080, height: 1920 }, ignoreHTTPSErrors: true });
  for (let i = 0; i < cards.length; i++) {
    const [a, c] = cards[i];
    await p.setContent(`<!doctype html><html lang="el"><head><meta charset="utf-8"><link href="https://fonts.googleapis.com/css2?family=Fira+Sans+Extra+Condensed:wght@500;700;900&display=swap" rel="stylesheet"><style>
      body{margin:0;width:1080px;height:1920px;font-family:"Fira Sans Extra Condensed";background:#fff;background-image:linear-gradient(#dce7f2 2px,transparent 2px),linear-gradient(90deg,#dce7f2 2px,transparent 2px);background-size:54px 54px;display:flex;flex-direction:column;justify-content:center;padding:0 96px;box-sizing:border-box}
      .k{font-size:44px;font-weight:700;color:#d01b6e;letter-spacing:.08em;text-transform:uppercase;margin:0 0 40px}
      q{display:block;quotes:none;font-size:104px;line-height:1.02;font-weight:900;color:#000}
      q em{font-style:normal;color:#d01b6e}
      .who{margin-top:70px;font-size:46px;font-weight:700;color:#000}
      .who small{display:block;font-weight:500;color:#5d5f66;font-size:38px;margin-top:10px}
      .tag{position:absolute;bottom:120px;left:96px;font-size:40px;font-weight:700;color:#5d5f66}
    </style></head><body><p class="k">Αποτυχημένος · ${i+1}/6</p><q>${a} <em>${c}</em></q><p class="who">Βασίλης «Bill» Βασιλειάδης<small>@vasiliadisvas</small></p><p class="tag">#ΞεκόλλαΤηΡόδα · vasilisvasiliadis.gr/apotyximenos</p></body></html>`, { waitUntil: 'networkidle' });
    await p.evaluate(() => document.fonts.ready);
    await p.screenshot({ path: `${out}/karta-${i+1}.png` });
  }
  await b.close();
})();
