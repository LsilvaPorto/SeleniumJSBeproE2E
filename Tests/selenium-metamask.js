const { Builder, until } = require("selenium-webdriver");
const { MetaMask, Loader } = require("selenium-metamask");
const { chrome, Options} = require('selenium-webdriver/chrome');

(async function example() {
    // const chromeOptions = new chrome.Options();

    // const chromeDriverPath = '/usr/local/bin/chromedriver2';
    // const chromeServiceBuilder = new chrome.ServiceBuilder(chromeDriverPath);

    // // Substitua '/caminho/para/sua/extensao' pelo caminho real da pasta da extensão
    // chromeOptions.addArguments('--allow-running-insecure-content', '--disable-web-security').excludeSwitches("enable-automation", 'useAutomationExtension');//, '--load-extension=metamask/');
    // chromeOptions.setChromeBinaryPath('/Applications/Google Chrome 2.app/Contents/MacOS/Google Chrome');

    // const driver = await new Builder().forBrowser('chrome').setChromeOptions(chromeOptions).setChromeService(chromeServiceBuilder).build();
    // await driver.manage().setTimeouts({ implicit: 30000 });

    const builder = new Builder()
        .withCapabilities({
            'goog:chromeOptions': {
                excludeSwitches: ['enable-automation', 'useAutomationExtension'],
            },
        })
        .forBrowser('chrome')
    const loader = new Loader(builder)

    loader.loadChromeExtension(new Options())

    try {
        const driver = builder.build()
        const metaMask = new MetaMask(driver, until)
        const session = await metaMask.login('test test test test test test test test test test test junk');
        await session.addNetwork({
            name: 'NetworkName',
            chainIdentifier: '123',
            explorerUrl: 'https://explorer.example.com',
            rpcUrl: 'https://rpc.example.com',
            symbol: 'EXAMPLE',
        })
        await driver.get('https://afrodite.bepro.network');  // Substitua pela URL da sua página

    } finally {
        // await driver.quit();
    }
})();
