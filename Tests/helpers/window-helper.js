
async function getAllWindowsAndTabs(driver, numberOfTabsToWaitFor = 2) {
    await driver.wait(
        async () => (await driver.getAllWindowHandles()).length === numberOfTabsToWaitFor,
        100000
    );
    return await driver.getAllWindowHandles();
}

module.exports = { getAllWindowsAndTabs }