describe("Counter App E2E", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it("should display the initial count", async () => {
    await expect(element(by.text("Count: 0"))).toBeVisible();
  });

  it("should increment the count when the increment button is pressed", async () => {
    await element(by.text("Increment")).tap();
    await expect(element(by.text("Count: 1"))).toBeVisible();
  });
});
