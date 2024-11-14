'use strict';

const BasePage = require('./basePage');

const PAGE_IDENTIFIER = ".dash-container";
const DB_NAV_BAR = ".pay-nav-bar";
const DB_NAV_BAR_TITLE = ".navbar-brand";
const DB_NAV_ACCOUNT_SERVICES_LINK = ".nav-link.services";
const DB_NAV_ACTIVITY_LINK = ".nav-link.activity";
const DB_NAV_HELP_BUTTON = ".nav-link.help";
const DB_NAV_LOGIN_BUTTON = "a[type='submit']";
const DB_BALANCE_DETAILS = ".card-group.dashboard";
const DB_STATEMENT_BALANCE_LABEL = "h5[class='card-title']";
const DB_MAP_PAYMENT_LABEL = ".map-title.card-title";
const DB_TOTAL_BALANCE_LABEL = ".tb-title.card-title";
const DB_STATEMENT_BALANCE_AMOUNT = ".sb-value.card-text";
const DB_MAP_PAYMENT_AMONT = ".map-miv-val";
const DB_TOTAL_BALANCE_AMOUNT = ".tb-value.card-text";
const DB_STATEMENT_BALANCE_DATE = ".sb-date.text";
const DB_MAP_PAYMENT_DUE = ".map-title-2.card-text";
const DB_TOTAL_BALANCE_CREDIT = ".text.tb-credit-title";
const DB_TRSX_COMPONENT = ".text.tb-credit-title";
const DB_RECENT_HEADER_COMPONENT = ".recent-activity-table";
const DB_TRSX_ROW = ".card-group.dashboard";
const DB_THANK_YOU_PAYED = ".map-payed-title-2.card-text";
const DB_VIEW_TRSX_BUTTON = ".sb-button.btn.btn-outline-primary";
const DB_MAP_BUTTON = "button[type='submit']";
const DB_BALANCE_DETAILS_LINK = ".tb-link.nav-link.active";
const PAGE_LOGO = ".app_logo";
const PAY_BILL_LABEL = ".pay-title-label";

const MIN_PAY_CHX_BOX = 'input[value="minimum_payment"]';
const PAY_STMNT_BAL_CHX_BOX = 'input[value="statement_balance"]';
const PAY_TOTAL_BAL_CHX_BOX = 'input[value="total_balance"]';
const PAY_OTHER_CHX_BOX = 'input[value="other_amount"]';


const PAYMENT_INPUT = "#dollarInput";
const PAY_NOW_BUTTON = ".pay-now.btn.btn-primary";

class DashBoardPage extends BasePage {
  constructor(driver) {
    super(driver, PAGE_IDENTIFIER);
  }

  async isPageLoaded() {
    return await this.exists();
  }

  async getNavBarTitle() {
    let navTitle = await this.findElementByCss(DB_NAV_BAR_TITLE);
    return navTitle;
  }
  async getNavBar() {
    let navBar = await this.findElementByCss(DB_NAV_BAR);
    return navBar;
  }
  async getBalanceDetailsComponent() {
    let component = await this.findElementByCss(DB_BALANCE_DETAILS);
    return component;
  }
  async getTransactionsComponent() {
    let component = await this.findElementByCss(DB_TRSX_COMPONENT);
    return component;
  }
  async getRecentTransactionsComponent() {
    let component = await this.findElementByCss(DB_RECENT_HEADER_COMPONENT);
    return component;
  }

  async getAccountServicesLInk() {
    return await this.findElementByCss(DB_NAV_ACCOUNT_SERVICES_LINK);
  }

  async getActivityLink() {
    return await this.findElementByCss(DB_NAV_ACTIVITY_LINK);
  }

  async getHelpButton() {
    let helpButton = await this.findElementByCss(DB_NAV_HELP_BUTTON);
    helpButton.click();
  }

  async getLoginButton() {
    let helpButton = await this.findElementByCss(DB_NAV_LOGIN_BUTTON);
    getLoginButton.click();
  }
  async getLogo() {
    return await this.findElementByCss(PAGE_LOGO);
  }

  async getTrsxButton() {
    return await this.findElementByCss(DB_VIEW_TRSX_BUTTON);
  }

  async getStatementBalanceLabel() {
    return await this.findElementByCss(DB_STATEMENT_BALANCE_LABEL);
  }

  async getMapPaymentLabel() {
    return await this.findElementByCss(DB_MAP_PAYMENT_LABEL);
  }

  async getTotalBalanceLabel() {
    return await this.findElementByCss(DB_TOTAL_BALANCE_LABEL);
  }

  async getStatementBalanceAmount() {
    return await this.findElementByCss(DB_STATEMENT_BALANCE_AMOUNT);
  }
  async getPaymentAmount() {
    return await this.findElementByCss(DB_MAP_PAYMENT_AMONT);
  }
  async getTotalBalanceAmount() {
    return await this.findElementByCss(DB_TOTAL_BALANCE_AMOUNT);
  }

  async getStatementBalanceDate() {
    return await this.findElementByCss(DB_STATEMENT_BALANCE_DATE);
  }

  async getPaymentDate() {
    return await this.findElementByCss(DB_MAP_PAYMENT_DUE);
  }

  async getTotalBalanceCredit() {
    return await this.findElementByCss(DB_TOTAL_BALANCE_CREDIT);
  }

  async getMapButton() {
    let mapButton = await this.findElementByCss(DB_MAP_BUTTON);
    await this.implicitWait(1000);
    await mapButton.click();
  }
  async getBalanceButton() {
    let mapButton = await this.findElementByCss(DB_BALANCE_DETAILS_LINK);
    mapButton.click();
  }

  async selectMinPaymentCheckBox() {
    let checkBox = await this.findElementByCss(MIN_PAY_CHX_BOX);
    checkBox.click();
  }

  async selectPayStatementBalanceCheckBox() {
    let checkBox = await this.findElementByCss(PAY_STMNT_BAL_CHX_BOX);
    checkBox.click();
  }

  async selectTotalBalanceCheckBox() {
    let checkBox = await this.findElementByCss(PAY_TOTAL_BAL_CHX_BOX);
    checkBox.click();
  }

  async selectPayOtherAmountCheckBox() {
    let checkBox = await this.findElementByCss(PAY_OTHER_CHX_BOX);
    checkBox.click();
  }

  async selectPaymentCheckBox(checkbox) {
    checkbox === "Minimun Payment Due"
      ? this.selectMinPaymentCheckBox()
      : checkbox === "Pay Statement Balance"
      ? this.selectPayStatementBalanceCheckBox()
      : checkbox === "Pay Total Balance"
      ? this.selectTotalBalanceCheckBox()
      : checkbox === "Pay Other Amount"
      ? this.selectPayOtherAmountCheckBox()
      : await driver.wait(this.findElement(NO_SUCH_ELEMENT), 5000);
  }

  async iterateThroughCheckBox() {
    for (let i = 0; i < 5; i++) {
      const row = await this.findElementByCss("div[data-rowindex*='" + i + "'");
      const rowValues = await row.getText();
      console.log(rowValues);
    }
  }

  async getPayBillLabel() {
    let label = await this.getText(PAY_BILL_LABEL);
    return label;
  }

  async getThankYouLabel() {
    let label = await this.getText(DB_THANK_YOU_PAYED);
    return label;
  }

  async getPaymentInput() {
    return await this.findElementByCss(PAYMENT_INPUT);
  }

  async enterPaymentAmount(amount) {
    const inputBox = await this.getPaymentInput();
    await inputBox.clear();
    await inputBox.sendKeys(amount);
  }

  async clickPayNowButton() {
    let checkBox = await this.findElementByCss(PAY_NOW_BUTTON);
    await checkBox.click();
  }

  async alertSwitch() {
    let alert = await this.switchToAlert();
    return alert;
  }
  async alertAccept() {
    let alert = await this.appceptAlert();
    return alert;
  }
  async alertGetText() {
    let alert = await this.appceptAlert();
    return alert;
  }

  async() {}

  async selectFromDroDown() {
    // const options = await this.findElementByCss('.dropdown-list-item');
    // for (let option of options) {
    //   if ((await option.getAttribute('value')) === "balance") {
    //     await option.click();
    //     break;
    //   }
    // }

    for (let i = 0; i < 3; i++) {
      const row = await this.findElementByCss("l si:nth-child(" + i + ")");
      const rowValues = await row.getText();
      console.log(rowValues);
    }
  }
}
  
  

    // // Find all link elements
    // const links = await driver.findElements(By.tagName('a'));

    // // Retrieve and print the href attribute of each link
    // for (let link of links) {
    //   const href = await link.getAttribute('href');
    //   console.log(href);
    // }



module.exports = DashBoardPage;
