'use strict';

const { By } = require('selenium-webdriver');
const BasePage = require('./basePage');

 

 
const DB_MAP_PAYMENT_LABEL = ".map-title.card-title";
const DB_TOTAL_BALANCE_LABEL = ".tb-title.card-title";
const DB_MAP_PAYMENT_AMONT = ".map-miv-val";
const DB_TOTAL_BALANCE_AMOUNT = ".tb-value.card-text"; 
const DB_MAP_PAYMENT_DUE = ".map-title-2.card-text";
const DB_TOTAL_BALANCE_CREDIT = ".text.tb-credit-title";
const DB_VIEW_TRSX_BUTTON = ".sb-button.btn.btn-outline-primary";
const DB_MAP_BUTTON = "button[type='submit']";
const DB_BALANCE_DETAILS_LINK = ".tb-link.nav-link.active";
const PAGE_LOGO = ".app_logo";



class PaymemntPage extends BasePage {

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
        mapButton.click();
      }
      async getBalanceButton() {
        let mapButton = await this.findElementByCss(DB_BALANCE_DETAILS_LINK);
        mapButton.click();
      }





    //   async enterUserEmail(emailText) {
    //     const emailTextbox = await this.getUserEmailTextbox();
    //     emailTextbox.sendKeys(emailText);
    //   }

    //   async enterUserPassword(password) {
    //     const passwordTextbox = await this.getUserPasswordTextbox();
    //     passwordTextbox.sendKeys(password);

    //   }
}

module.exports = PaymemntPage;
