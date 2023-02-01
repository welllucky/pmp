/* eslint-disable no-undef */
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "2ktzeo",

  e2e: {
    // eslint-disable-next-line no-unused-vars
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
