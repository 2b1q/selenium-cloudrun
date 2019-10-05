const { Driver, By, Key, until } = require('./selenium.client');

// selenium web api
exports.run = (req, res) => {
  const start = new Date();
  test()
    .then(result => {
      const end = new Date();
      const rtt = Math.abs(start - end);
      console.log(`test ended succefully. RTT: ${rtt / 1000} sec`);
      res.send({ result, rtt });
    })
    .catch(err => res.status(500).send({ error: err }));
};

// selenium hardcoded runner
const test = () =>
  new Promise(async (resolve, reject) => {
    const browser = process.env.browser;
    const hub_link = process.env.hub ? `http://${process.env.hub}:4444/wd/hub` : undefined;
    const driver = new Driver(browser, hub_link).driver;
    try {
      await driver.get('http://www.google.com/ncr');
      await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
      await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    } catch (err) {
      await driver.quit();
      return reject(err);
    }
    await driver.quit();
    resolve('done');
  });
