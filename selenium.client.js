const { Builder, By, Key, until } = require('selenium-webdriver');

// Creates new WebDriver instances.
// The environment variables listed below may be used to override a builder's configuration, allowing quick runtime changes.
// SELENIUM_BROWSER: defines the target browser in the form browser[:version][:platform].
// SELENIUM_REMOTE_URL: defines the remote URL for all builder instances.
//  This environment variable should be set to a fully qualified URL for a WebDriver server (e.g. http://localhost:4444/wd/hub).
//  This option always takes precedence over SELENIUM_SERVER_JAR.
// SELENIUM_BROWSER=chrome:36:LINUX \
// SELENIUM_REMOTE_URL=http://www.example.com:4444/wd/hub \
class Driver {
  //   constructor(browser = 'firefox', server = 'https://standalone-firefox-7cpfp2vfoa-uc.a.run.app/wd/hub') {
  constructor(browser = 'chrome', server = 'http://127.0.0.1:4444/wd/hub') {
    try {
      this.driver = new Builder()
        .forBrowser(browser)
        .usingServer(server)
        .build();
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = { Driver, By, Key, until };
