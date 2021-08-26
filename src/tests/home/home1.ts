import { NightwatchTests, NightwatchBrowser } from 'nightwatch';

const home: NightwatchTests = {
  '@tags': ['home_default'], // tags should reference the project that this will run for (e.g web-reservations) and the name of the owner (e.g. who to contact if it breajs)
  'Demo test': (browser: NightwatchBrowser) => {
    browser
      .url('https://nightwatch-demo.netlify.com/')
      .waitForElementVisible('[data-nw=name-input]')
      .setValue('[data-nw=name-input]', 'Pierre')
      .pause(1000)
      .assert.containsText('[data-nw=welcome-message]', 'Welcome Pierre !')
      .end();
  },
};

export default home;
