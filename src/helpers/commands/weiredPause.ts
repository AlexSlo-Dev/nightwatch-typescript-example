export default class WeiredPause {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async command(ms: number) {
    if (!ms || ms % 2 === 0) {
      throw Error('I am weird, I only accept odd number');
    }
    await new Promise<null>((resolve) => {
      setTimeout(() => {
        resolve(null);
      }, ms);
    });
    return this;
  }
}
