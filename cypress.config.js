const { defineConfig } = require("cypress");
// const{downloadFile} = require("cypress-downloadfile/lib/addPlugin");
// const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin');

module.exports = defineConfig({
  e2e: {
    watchForFileChanges:false,
    defaultCommandTimeout: 922903000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // on('task', { downloadFile });
      // addMatchImageSnapshotPlugin(on, config);
    },
  },
  //  env: {
  //     BACKTRACE_UNIVERSE: 'your-universe',
  //     BACKTRACE_TOKEN: 'your-token'
  //   }
});
