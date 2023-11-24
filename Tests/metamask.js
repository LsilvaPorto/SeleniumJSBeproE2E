const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const { setupMetamask } = require('./helpers/metamask-helper');
const { getAllWindowsAndTabs } = require('./helpers/window-helper');

  (async function example() {
    const chromeOptions = new chrome.Options();

    // Substitua '/caminho/para/sua/extensao' pelo caminho real da pasta da extensão
    chromeOptions.addArguments(`--load-extension=metamask/`);

    const driver = await new Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();
    // await driver.manage().setTimeouts({ implicit: 30000 });

    try {

      await driver.get('https://afrodite.bepro.network');  // Substitua pela URL da sua página

      const windows = await getAllWindowsAndTabs(driver);

      await driver.switchTo().window(windows[1]);

      const tituloDaPagina = await driver.getTitle();
      console.log('Título da Segunda Guia:', tituloDaPagina);

      await setupMetamask(driver);

      await driver.switchTo().window(windows[0]);

      //await driver.findElement(By.css('button.btn.btn-white')).click();

    } finally {
      //await driver.quit();
    }
  })();
