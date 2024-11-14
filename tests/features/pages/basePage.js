const webdriver = require('selenium-webdriver');
const { Driver } = require('selenium-webdriver/chrome');
const Select = require('selenium-webdriver/lib/select');
const using = webdriver.By;
 
 


'use strict'
 
class BasePage {
    
    constructor(driver, selector = '') {
        this.driver = driver;
        this.selector = selector;
     
    }

    async findElement(selector) {
        const elements = await this.driver.findElement(using.css( selector));
        
        return elements[0];
    }

    async getText(selector){
        const elements = await this.driver.findElement(using.css( selector));
     
        return await elements.getText()
    }

    async findElementByCss(selector) {
        const elements = await this.driver.findElements(using.css(selector));
        return elements[0];
    }

    async exists() {
        const elements = await this.driver.findElements(using.css(this.selector));
        return elements.length > 0;
    }

    async implicitWait(milliSeconds){
        const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
        await sleep(milliSeconds);
    }


    async highlightElement(element) {
          
        const originalStyle = await element.getAttribute('style');
        await this.driver.executeScript(
            "arguments[0].setAttribute(arguments[1], arguments[2])",
            element,
            "style",
            `background: ${"yellow"}; border: 2px solid red; ${originalStyle}`
        );
        await this.driver.sleep(2000);
        await this.driver.executeScript(
            "arguments[0].setAttribute(arguments[1], arguments[2])",
            element,
            "style",
            originalStyle
        );
    }
    
    async switchToAlert() {
       const text =  await this.driver.switchTo().alert().getText();
       return console.log(text);
    }
    async appceptAlert() {
     await this.driver.switchTo().alert().accept();
       
    }
    async getTextFromAlert() {
    const alertText= await this.driver.switchTo().alert().getText();
     return alertText
    }
    
    async   scrollToElement(element) {
        await this.driver.executeScript("arguments[0].scrollIntoView(true);", element);
    }
    
    async   scrollBy(x, y) {
        await this.driver.executeScript(`window.scrollBy(${x}, ${y});`);
    }
    
    async   scrollToBottom() {
        await this.driver.executeScript("window.scrollTo(0, document.body.scrollHeight);");
    }

    async doubleClick(element){
        await this.driver.Actions.doubleClick(element).perform();
    }
    async rightClick(element){
        await this.driver.Actions.contextClick(element).perform();
    }
    async dragAndDrop(selector1, selector2){
        let elementToDrag = this.findElementByCss(selector1)
        let dropTarget = this.findElementByCss(selector2)
        await this.driver.Actions.dragAndDrop(elementToDrag, dropTarget).perform();
    }




 
}

module.exports = BasePage;
