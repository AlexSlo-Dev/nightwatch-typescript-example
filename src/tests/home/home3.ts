import { NightwatchTests, NightwatchBrowser } from 'nightwatch';

const home: NightwatchTests = {
  '@tags': ['home_3'], // tags should reference the project that this will run for (e.g web-reservations) and the name of the owner (e.g. who to contact if it breajs)
  'Demo test 3': async (browser: NightwatchBrowser) => {
    console.log('================');
    console.log(browser.launch_url);
    console.log(browser.globals);
    console.log(browser.globals.timeToWait);
    console.log('================');
    await browser
      .url(browser.launch_url)
      .waitForElementVisible('[data-nw=name-input]')
      .setValue('[data-nw=name-input]', 'Pierre')
      .weiredPause(browser.globals.timeToWait)
      .assert.containsText('[data-nw=welcome-message]', 'Welcome Pierre !')
      .end();
  },
};

export default home;
