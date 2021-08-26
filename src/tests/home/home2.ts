import { NightwatchTests, NightwatchBrowser } from 'nightwatch';
import sleep from '../../helpers/sleep_code';

const home: NightwatchTests = {
  '@tags': ['home_2'], // tags should reference the project that this will run for (e.g web-reservations) and the name of the owner (e.g. who to contact if it breajs)
  'Demo test 2': async (browser: NightwatchBrowser) => {
    await sleep(2);
    browser
      .url('https://nightwatch-demo.netlify.com/')
      .waitForElementVisible('[data-nw=name-input]')
      .setValue('[data-nw=name-input]', 'Pierre')
      .weiredPause(1001) // try putting 1000 and see how the error is trigger
      .assert.containsText('[data-nw=welcome-message]', 'Welcome Pierre !')
      .end();
  },
};

export default home;
