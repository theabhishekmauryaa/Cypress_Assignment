
export class LoginPage {
    
     usernameInput = 'input[name="username"]';
     passwordInput = '[type="password"]';
     loginButton = 'button[type="submit"]';
    
    enterUsername(username){
        cy.get(this.usernameInput).type(username);
    }
    enterPassword(password){
        cy.get(this.passwordInput).type(password);
    }
    clickLogin(){
        cy.get(this.loginButton).click();
    }
}