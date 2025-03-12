import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    specPattern: 'cypress/integration/**/*.spec.ts',
    video: false,
    screenshotOnRunFailure: false,
    viewportWidth: 1200,
    viewportHeight: 792,
    supportFile: false,
    testIsolation: false
  },
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/my-test-output-[hash].xml',
    toConsole: true
  },
  waitForAnimations: false
});
