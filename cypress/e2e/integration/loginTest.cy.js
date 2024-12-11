import { LoginPage } from "../../support/pageObjects/loginPage";
// import { NavbarPage } from "../../support/pageObjects/navbarPages";



describe('Login Functionality Test', () => {
    it('should login successfully', () => {
        const loginPage = new LoginPage();
        // const navbarPage = new NavbarPage();
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()

        // navbarPage.clickDashboard();
        // navbarPage.clickAboutme();

        // cy.get('input[name="username"]').type('Admin');
        // cy.get('[type="password"]').type('admin123');
        // cy.get('[type="submit"]').click();
    });
    
});