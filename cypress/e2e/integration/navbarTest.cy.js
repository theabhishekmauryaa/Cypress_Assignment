import { NavbarPage } from "../../support/pageObjects/navbarPages";

describe('Navbar Testing for Flipkart', () => {
    const navbarPage = new NavbarPage();
    
    beforeEach(() => {
        cy.visit('https://www.flipkart.com/')
    });

    it('should be navigate to Title', () => {

        navbarPage.clickHome();
        
    });

    it('should navigate to About me', () => {

        navbarPage.clickAbout();
        
    });

    it('should navigate to contact us', () => {

        navbarPage.clickContact();
        
    });
});