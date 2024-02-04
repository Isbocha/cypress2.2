const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "xc61bi",
  e2e: {
    baseUrl: "https://petstore.swagger.io/v2/",
    setupNodeEvents(on, config) {
    },
  },
});