import { NightwatchTestHooks } from 'nightwatch';
import rimraf from 'rimraf';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const cleanupOutput = (done: any) => {
  const path = 'output/screenshots';
  rimraf(path, (err) => {
    err && console.log(err);
    done(err);
  });
};

const globals: NightwatchTestHooks = {
  timeToWait: 1001,
  before(done) {
    console.log;
    cleanupOutput(done);
  },
};

module.exports = globals;
