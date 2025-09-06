import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 390, height: 844 });
  
  await page.goto('http://localhost:5173');
  await page.waitForTimeout(3000);
  
  // Scroll to Notre Approche section
  await page.evaluate(() => {
    window.scrollTo(0, window.innerHeight * 1.5);
  });
  
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'notre-approche-mobile.png' });
  
  // Click on first accordion item
  await page.click('text=Recherche & Acquisition de Terrains');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'notre-approche-expanded.png' });
  
  await browser.close();
})();