const { By, until } = require('selenium-webdriver');

const locator = {
    importWalletButton: By.css('[data-testid="onboarding-import-wallet"]'),
    metamaskAgree: By.css('[data-testid="metametrics-i-agree"]'),
    confirmSecretPhrase: By.css('[data-testid="import-srp-confirm"]'),
    createPasswordInput: By.css('[data-testid="create-password-new"]'),
    confirmPasswordInput: By.css('[data-testid="create-password-confirm"]'),
    acceptTerms: By.css('[data-testid="create-password-terms"]'),
    submitPassword: By.css('[data-testid="create-password-import"]'),
    inputSecretPhrase0: By.css('[data-testid="import-srp__srp-word-0"]'),
    inputSecretPhrase1: By.css('[data-testid="import-srp__srp-word-1"]'),
    inputSecretPhrase2: By.css('[data-testid="import-srp__srp-word-2"]'),
    inputSecretPhrase3: By.css('[data-testid="import-srp__srp-word-3"]'),
    inputSecretPhrase4: By.css('[data-testid="import-srp__srp-word-4"]'),
    inputSecretPhrase5: By.css('[data-testid="import-srp__srp-word-5"]'),
    inputSecretPhrase6: By.css('[data-testid="import-srp__srp-word-6"]'),
    inputSecretPhrase7: By.css('[data-testid="import-srp__srp-word-7"]'),
    inputSecretPhrase8: By.css('[data-testid="import-srp__srp-word-8"]'),
    inputSecretPhrase9: By.css('[data-testid="import-srp__srp-word-9"]'),
    inputSecretPhrase10: By.css('[data-testid="import-srp__srp-word-10"]'),
    inputSecretPhrase11: By.css('[data-testid="import-srp__srp-word-11"]'),
    gotItButton: By.css('[data-testid="onboarding-complete-done"]'),
    nextButton: By.css('[data-testid="pin-extension-next"]'),
    doneButton: By.css('[data-testid="pin-extension-done"]'),
    spinner: By.css('svg.lds-spinner'),
};

async function fillMetamaskSecretPhrase(driver) {
    await driver.findElement(locator.inputSecretPhrase0).sendKeys('test');
    await driver.findElement(locator.inputSecretPhrase1).sendKeys('test');
    await driver.findElement(locator.inputSecretPhrase2).sendKeys('test');
    await driver.findElement(locator.inputSecretPhrase3).sendKeys('test');
    await driver.findElement(locator.inputSecretPhrase4).sendKeys('test');
    await driver.findElement(locator.inputSecretPhrase5).sendKeys('test');
    await driver.findElement(locator.inputSecretPhrase6).sendKeys('test');
    await driver.findElement(locator.inputSecretPhrase7).sendKeys('test');
    await driver.findElement(locator.inputSecretPhrase8).sendKeys('test');
    await driver.findElement(locator.inputSecretPhrase9).sendKeys('test');
    await driver.findElement(locator.inputSecretPhrase10).sendKeys('test');
    await driver.findElement(locator.inputSecretPhrase11).sendKeys('junk');
}

async function setupMetamask(driver) {
    await driver.findElement(locator.importWalletButton).click();
    await driver.findElement(locator.metamaskAgree).click();
    await fillMetamaskSecretPhrase(driver);
    await driver.findElement(locator.confirmSecretPhrase).click();
    await driver.findElement(locator.createPasswordInput).sendKeys('P4$$word');
    await driver.findElement(locator.confirmPasswordInput).sendKeys('P4$$word');
    await driver.findElement(locator.acceptTerms).click();
    await driver.findElement(locator.submitPassword).click();

    try {
        await driver.wait(until.elementIsNotVisible(await driver.findElement(locator.spinner)), 30000);
    } catch (error) {
        await driver.findElement(locator.gotItButton).click();
        await driver.findElement(locator.nextButton).click();
        await driver.findElement(locator.doneButton).click();
    }
}

module.exports = { setupMetamask };