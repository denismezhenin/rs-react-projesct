// import { defineConfig } from "cypress";
// import registerCodeCoverageTasks from "@cypress/code-coverage/task";

// export default defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//       // eslint-disable-next-line @typescript-eslint/no-var-requires
//       registerCodeCoverageTasks(on, config);
//       return config;
//     },
//     baseUrl: "http://localhost:3001",
//     video: false,
//   },
// });
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    codeCoverage: {
      exclude: "cypress/**/*.*",
    },
  },
  e2e: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    baseUrl: "http://localhost:3001",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      require("@cypress/code-coverage/task")(on, config);

      return config;
    },
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    setupNodeEvents(on, config) {
      // require("@cypress/code-coverage/task")(on, config);
      // return config;
    },
  },
});
