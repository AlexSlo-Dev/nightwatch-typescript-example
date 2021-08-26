const baseUrl = process.env.BASE_URL || `https://nightwatch-demo.netlify.com/`;

const chrome = {
  browserName: 'chrome',
  javascriptEnabled: true,
  acceptSslCerts: true,
  databaseEnabled: true,
  applicationCacheEnabled: true,
  webStorageEnabled: true,
  w3c: false,
  loggingPrefs: { driver: 'ALL', server: 'ALL', browser: 'ALL' },
};

module.exports = {
  skip_testcases_on_fail: false,
  src_folders: ['dist/tests'],
  //page_objects_path: 'dist/pages', //Uncomment if you are going to use pages
  output_folder: 'output/reports',
  custom_commands_path: 'dist/helpers/commands',
  globals_path: 'dist/helpers/globals.js',
  test_workers: {
    enabled: false,
    workers: 'auto',
  },
  selenium: {
    start_process: true, // tells nightwatch to start/stop the selenium process
    server_path: require('selenium-server').path,
    host: 'localhost',
    port: 4444, // standard selenium port
    cli_args: {
      'webdriver.chrome.driver': require('chromedriver').path,
      'webdriver.gecko.driver': require('geckodriver').path,
    },
  },
  test_settings: {
    default: {
      desiredCapabilities: {
        ...chrome,
        chromeOptions: {
          args: ['headless'],
        },
      },
      globals: {
        // for before/after hooks and variables, see src/helpers/globals.ts
      },
      silent: true,
      launch_url: baseUrl,
      webdriver: {
        start_process: true,
      },
      screenshots: {
        enabled: true,
        on_failure: true,
        on_error: true,
        path: 'output/screenshots',
      },
    },
    chrome: {
      desiredCapabilities: {
        ...chrome,
        chromeOptions: {
          args: ['--window-size=1920,1280'],
        },
      },
      webdriver: {
        start_process: true,
      },
    },
    safari: {
      desiredCapabilities: {
        w3c: false,
        browserName: 'safari',
        javascriptEnabled: true,
        acceptSslCerts: true,
      },
      webdriver: {
        server_path: '/usr/bin/safaridriver',
        port: 4445,
      },
    },
  },
};
