const puppeteer = require('puppeteer-extra')
const fs = require('fs');

// Add stealth plugin and use defaults (all tricks to hide puppeteer usage)
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())


puppeteer.launch({ headless: true }).then(async browser => {
  console.log('Running tests..')
  const page = await browser.newPage()
  await page.goto('https://yjszs.yzu.edu.cn/tzgg/tzgg.htm')
  await page.waitForTimeout(5000)
  const content = await page.content();
  fs.writeFileSync('tzgg.htm', content);
  await browser.close()
  console.log(`All done, check the screenshot. ✨`)
})
