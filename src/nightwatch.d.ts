import { EnhancedPageObject } from 'nightwatch';

declare module 'nightwatch' {
  export interface ElementCommands {
    waitForElementPresent(selector: string, message?: string): this;
  }

  export type PageObject<T = unknown> = EnhancedPageObject<
    T['commands'][0],
    T['elements']
  >;

  // Uncomment to extend types
  //interface NightwatchCustomPageObjects {}

  //export interface NightwatchCustomCommand {
  //(this: Nightwatch, ...args: any[]): Nightwatch;
  //}

  export interface NightwatchBrowser {
    weiredPause: (this: NightwatchBrowser, ms: number) => NightwatchBrowser;
  }
  export interface NightwatchGlobals {
    timeToWait: number;
  }
}
