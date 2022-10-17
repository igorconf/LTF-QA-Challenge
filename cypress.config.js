const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      baseUrl: 'https://hml-app.learntofly.global',
      chromeWebSecurity: false
    },
  },
);
