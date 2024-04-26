import { expect } from "@playwright/test";
import test from "../lambdaSetup";
 // import test from '@playwright/test'
const data = {
  URL: "https://www.lambdatest.com/selenium-playground/",
  WELCOME_MSG: "Welcome to LambdaTest",
  USER_NAME: "Mahammad Imran",
  EMAIL: "testuser@gmail.com",
  PASSWORD: "Test@123",
  COMPANY: "Lambda",
  WEBSITE: "www.lambdatest.com",
  COUNTRY: "United States",
  CITY: "NewYork",
  ADDRESS1: "Test Street1",
  ADDRESS2: "Test Street2",
  STATE: "NewYork",
  ZIP: "75330",
  SUCCESS_MSG: "Thanks for contacting us, we will get back to you shortly.",
};

test.describe("PW Tests for Lambda", async () => {
  test.beforeEach(async ({ page }) => {
    test.step("Launch Application ", async () => {
      await page.goto(data.URL);
      await page.waitForLoadState("domcontentloaded");
    });
  });

  test("Lambda Test Scenario 1", async ({ page }) => {
    await page.getByRole("link", { name: "Simple Form Demo" }).click();
    await page.getByPlaceholder("Please enter your Message").fill(data.WELCOME_MSG);
    await page.getByRole("button", { name: "Get Checked Value" }).click();
    await expect(page.locator("#message")).toHaveText(data.WELCOME_MSG);
  });

  test("Lambda Test Scenario 2", async ({ page }) => {
    await page.getByRole("link", { name: "Drag & Drop Sliders" }).click();
    await page.waitForSelector("#slider3");
    let defaultValTxt = await page.locator("#rangeSuccess").innerText();
    expect(defaultValTxt).toBe("15");
    await page.locator("#slider3").getByRole("slider").fill("95");
    let afterValTxt = await page.locator("#rangeSuccess").innerText();
    expect(afterValTxt).toBe("95");
  });

  test("Lambda Test Scenario 3", async ({ page }) => {
    await page.getByRole("link", { name: "Input Form Submit" }).click();
    await page.getByRole("button", { name: "Submit" }).click();
    await page.getByPlaceholder("Name", { exact: true }).fill(data.USER_NAME);
    await page.getByPlaceholder("Email", { exact: true }).fill(data.EMAIL);
    await page.getByPlaceholder("Password").fill(data.PASSWORD);
    await page.getByPlaceholder("Company").fill(data.COMPANY);
    await page.getByPlaceholder("Website").fill(data.WEBSITE);
    await page.getByRole("combobox").selectOption(data.COUNTRY);
    await page.getByPlaceholder("City").fill(data.CITY);
    await page.getByPlaceholder("Address 1").fill(data.ADDRESS1);
    await page.getByPlaceholder("Address 2").fill(data.ADDRESS2);
    await page.getByPlaceholder("State").fill(data.STATE);
    await page.getByPlaceholder("Zip code").fill(data.ZIP);
    await page.getByRole("button", { name: "Submit" }).click();
    await page.waitForTimeout(2000);
    const successMessage = await page
      .locator('//*[contains(@class,"loginform")]//p')
      .textContent();
    expect(successMessage).toBe(data.SUCCESS_MSG);
  });
});