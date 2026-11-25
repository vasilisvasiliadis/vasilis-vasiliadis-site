const { chromium } = require('playwright');
(async () => {
  const [src, out, shots] = process.argv.slice(2);
  const proxy = process.env.HTTPS_PROXY || process.env.https_proxy;
  const browser = await chromium.launch(proxy ? { proxy: { server: proxy } } : {});
  const ctx = await browser.newContext({ ignoreHTTPSErrors: true });
  const page = await ctx.newPage();
  await page.goto('file://' + src, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  const fams = await page.evaluate(() => [...document.fonts].filter(f => f.status === 'loaded').map(f => f.family + ' ' + f.weight));
  console.log('loaded fonts:', [...new Set(fams)].join(', '));
  await page.pdf({ path: out, printBackground: true, preferCSSPageSize: true });
  await browser.close();
})();
