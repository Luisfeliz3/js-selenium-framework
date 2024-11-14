'use strict';

const { By } = require('selenium-webdriver');
const BasePage = require('./basePage');

const PAGE_IDENTIFIER = '#LoginComponent';
const PAGE_USEREMAIL_TEXTBOX = '#eliloUserID';
const PAGE_USERPASSWORD_TEXTBOX = '#eliloPassword';
const PAGE_LOGIN_BUTTON = '#loginSubmit';
const PAGE_LOGIN_HEADER = "#eliloUserID";
const PAGE_EMAIL_LABEL = "#eliloUserID";
const PAGE_PASSWORD_LABEL = "#eliloUserID";
const PAGE_VIEW_TRSX_BUTTON = ".sb-button.btn.btn-outline-primary";
const PAGE_LOGO = ".app_logo";



class LoginPage extends BasePage {

      constructor(driver) {
          super(driver, PAGE_IDENTIFIER);
      }

      async isPageLoaded() {
        return await this.exists();
      }

      async getUserEmailTextbox() {
        let email = await this.findElementByCss(PAGE_USEREMAIL_TEXTBOX);
        return email;
      }

      async getUserPasswordTextbox() {
        return await this.findElementByCss(PAGE_USERPASSWORD_TEXTBOX);
      }

      async getSignInButton() {
        return await this.findElementByCss(PAGE_LOGIN_BUTTON);
      }

      async signIn() {
        let loginButton = await this.findElementByCss(PAGE_LOGIN_BUTTON);
        loginButton.click();
      }

      async getLoginHeader() {
        return await this.findElementByCss(PAGE_LOGIN_HEADER);
      }
      async getLogo() {
        return await this.findElementByCss(PAGE_LOGO);
      }
      async getTrsxButton() {
        return await this.findElementByCss(PAGE_VIEW_TRSX_BUTTON);
      }

      async getEmailLabel() {
        return await this.findElementByCss(PAGE_EMAIL_LABEL);
      }

      async getPasswordLabel() {
        return await this.findElementByCss(PAGE_PASSWORD_LABEL);
      }

      async enterUserEmail(emailText) {
        const emailTextbox = await this.getUserEmailTextbox();
        emailTextbox.sendKeys(emailText);
      }

      async enterUserPassword(password) {
        const passwordTextbox = await this.getUserPasswordTextbox();
        passwordTextbox.sendKeys(password);

      }
}

module.exports = LoginPage;
