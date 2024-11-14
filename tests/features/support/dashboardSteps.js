const assert = require('chai').assert;
const { Given, When, Then} = require('cucumber');
const And = Then;
const DashBoard = require('../pages/dashboard');
const timeouts = require('../support/constants');
const BasePage = require("../pages/basePage");

let b = new BasePage();

When('I navigate to the Dasboard', async function () {
  const dashboard = new DashBoard(this.driver);
  await this.driver.wait(async () => await dashboard.getLogo(), timeouts.STEP_TIMEOUTS.TIMEOUT);
});

Then('I should click on the make a payment button', async function () {
  const dashboard = new DashBoard(this.driver);
   await dashboard.getMapButton();
});

Then('I should see the nav bar', async function () {
  const dashboard = new DashBoard(this.driver);
  await dashboard.getNavBar()
  
});
Then('I select drop down', async function () {
  const dashboard = new DashBoard(this.driver);
  await dashboard.selectFromDroDown();
  
});

Then('I should see the balance details component', async function () {
  const dashboard = new DashBoard(this.driver);
  await dashboard.getBalanceDetailsComponent();
});

Then('I should see the transactions component', async function () {
  const dashboard = new DashBoard(this.driver);
  await dashboard.getTransactionsComponent();
});

Then('I should see the recent transactions header', async function () {
  const dashboard = new DashBoard(this.driver);
  await dashboard.getRecentTransactionsComponent()
});

Then('I should see the header with text {string}', async function (expectedText) {
  const dashboard =  new DashBoard(this.driver);
  await dashboard.implicitWait(1000)
  const header = await dashboard.getPayBillLabel();
  assert.strictEqual(header, expectedText);
}, timeouts.STEP_TIMEOUTS.TIMEOUT);


Then('I should click on the Minimun Payment Due checkbox', async function () {
  const dashboard = new DashBoard(this.driver);
   await dashboard.selectMinPaymentCheckBox();
});

Then('I should click on the {string} checkbox', async function (checkbox) {
  const dashboard = new DashBoard(this.driver);
  await dashboard.selectPaymentCheckBox(checkbox) 
});

Then('I should click on the Pay Statement Balance checkbox', async function () {
  const dashboard = new DashBoard(this.driver);
  await dashboard.selectPayStatementBalanceCheckBox()
});

Then('I should click on the Pay Total Balance checkbox', async function () {
  const dashboard = new DashBoard(this.driver);
  await dashboard.selectTotalBalanceCheckBox()
});

Then('I should click on the Pay Other Amount checkbox', async function () {
  const dashboard = new DashBoard(this.driver);
  await dashboard.selectPayOtherAmountCheckBox()
});

Then('I should enter the {string}', async function (amount) {
  const dashboard = new DashBoard(this.driver);
  await dashboard.enterPaymentAmount(amount);
}, timeouts.STEP_TIMEOUTS.TIMEOUT);

Then('I should enter the minimum amount', async function () {
  const dashboard = new DashBoard(this.driver);
  await dashboard.enterPaymentAmount("40.00");

}, timeouts.STEP_TIMEOUTS.TIMEOUT);

Then('I click on the pay now button', async function () {
  const dashboard = new DashBoard(this.driver);
  await dashboard.clickPayNowButton();
}, timeouts.STEP_TIMEOUTS.TIMEOUT);

Then('I should see the Thank You For Your Payment Alert', async function () {
  const dashboard = new DashBoard(this.driver);
  await dashboard.alertSwitch();
}, timeouts.STEP_TIMEOUTS.TIMEOUT);

// Then('I should see the alert {message}', async function (message) {
//   const dashboard = new DashBoard(this.driver);
//   await dashboard.alertSwitch();
//   const header = await dashboard.getPayBillLabel();
//   assert.strictEqual(message, expectedText);
// }, timeouts.STEP_TIMEOUTS.TIMEOUT);

When('I should click on ok button in the alert box', async function () {
  const dashboard = new DashBoard(this.driver);
  await dashboard.implicitWait(3000)
  await dashboard.alertAccept();
}, timeouts.STEP_TIMEOUTS.TIMEOUT);

Then('I should see the {string} label on the dashboard', async function (expectedText) {
  const dashboard = new DashBoard(this.driver);
  const text = await dashboard.getThankYouLabel();
  assert.strictEqual(text, expectedText);
}, timeouts.STEP_TIMEOUTS.TIMEOUT);
