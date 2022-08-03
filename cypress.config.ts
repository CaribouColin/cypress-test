import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    specPattern: 'cypress/specs/**/*.spec.ts',
    defaultCommandTimeout: 30000,
    chromeWebSecurity: false,
    video: true,
    retries: {
        runMode: 2,
    },
    screenshotOnRunFailure: true,
    fixturesFolder: false,
    screenshotsFolder: 'cypress/artifacts/screenshots',
    videosFolder: 'cypress/artifacts/videos',
    supportFile: false,
  },
})