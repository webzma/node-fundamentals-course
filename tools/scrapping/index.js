const puppeteer = require("puppeteer");

(async () => {
  console.log("Lanzamos el navegador");
  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();
  await page.goto("https://webzma.vercel.app/");

  let titulo1 = await page.evaluate(() => {
    const h1 = document.querySelector("h1");
    return h1.textContent;
  });

  console.log(titulo1);

  browser.close();
  console.log("Navegador cerrado...");
})();
