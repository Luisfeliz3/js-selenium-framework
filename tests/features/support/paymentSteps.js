const assert = require('chai').assert;
const { Given, When, Then} = require('cucumber');
const And = Then;
const Payment = require('../pages/payment');
const timeouts = require('../support/constants');

// async needed to use await inside the function
Then('I should see a text box for entering the email', async function () {
  const payment = new Payment(this.driver);
  await this.driver.wait(async () => await payment.getUserEmailTextbox(), timeouts.STEP_TIMEOUTS.TIMEOUT);
});

Then('I should see a text box for entering the password', async function () {
  const payment = new Payment(this.driver);
  await this.driver.wait(async () => await payment.getUserPasswordTextbox(), timeouts.STEP_TIMEOUTS.TIMEOUT);
});

And('I should see a sign in button', async function () {
  const payment = new Payment(this.driver);
  await this.driver.wait(async () => await payment.getSignInButton(), timeouts.STEP_TIMEOUTS.TIMEOUT);
});

And('I should see a trsx button', async function () {
  const payment = new Payment(this.driver);
  await this.driver.wait(async () => await payment.getTrsxButton(), timeouts.STEP_TIMEOUTS.TIMEOUT);
});

When('I should see payment logo', async function () {
  const payment = new Payment(this.driver);
  await this.driver.wait(async ()=> await payment.highLightElement()) 
  await this.driver.wait(async () => await payment.getLogo(), timeouts.STEP_TIMEOUTS.TIMEOUT);
});

And('I should see a login header with text {string}', async function (expectedText) {
  const payment = new Payment(this.driver);
  const header = await payment.getLoginHeader();
  const headerText = await header.getText();
  assert.strictEqual(headerText, expectedText);
}, timeouts.STEP_TIMEOUTS.TIMEOUT);

And('I should see a email address label with text {string}', async function (expectedText) {
  const payment = new Payment(this.driver);
  const emailLabel = await payment.getEmailLabel();
  const emailLabelText = await emailLabel.getText();
  assert.strictEqual(emailLabelText, expectedText);
}, timeouts.STEP_TIMEOUTS.TIMEOUT);

And('I attempt to login without any credentials', async function () {
  const payment = new Payment(this.driver);
  await payment.signIn();
}, timeouts.STEP_TIMEOUTS.TIMEOUT);

When('I enter email as {string}', async function (emailAddress) {
  const payment = new Payment(this.driver);
  await payment.enterUserEmail(emailAddress);
});

When('I enter password as {string}', async function (password) {
  const payment = new Payment(this.driver);
  await payment.enterUserPassword(password);
});

When('I attempt to login', async function () {
  const payment = new Payment(this.driver);
  await payment.signIn();
}, timeouts.STEP_TIMEOUTS.TIMEOUT);
