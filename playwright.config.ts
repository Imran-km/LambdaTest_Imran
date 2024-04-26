import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";

// Playwright config to run tests on LambdaTest platform and local
const config: PlaywrightTestConfig = {
  testDir: "tests",
  // testMatch: ["tests\loginTest.spec.ts"],
  timeout: 60000,
  use: {},
  projects: [
    // -- LambdaTest Config --
    // name in the format: browserName:browserVersion:platform@lambdatest
    // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
    // Use additional configuration options provided by Playwright if required: https://playwright.dev/docs/api/class-testconfig
    {
      name: "PW-Chrome:latest:MacOS Ventura@lambda",
      use: {
        viewport: { width: 1920, height: 1080 },
      },
    },
    // {
    //   name: "chrome:latest:Windows 11@lambdatest",
    //   use: {
    //     viewport: { width: 1280, height: 720 },
    //   },
    // },
    // {
    //   name: "MicrosoftEdge:latest:MacOS Ventura@lambdatest",
    //   use: {
    //     ...devices["iPhone 12 Pro Max"],
    //   },
    // },
    {
      name: "PW-Firefox:latest:Windows 11@lambda",
      use: {
        viewport: { width: 1280, height: 720 },
      },
    },
    
  ],
};

export default config;