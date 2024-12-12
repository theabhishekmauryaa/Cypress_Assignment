describe('Login page Tests', () => {
    const url = 'https://the-internet.herokuapp.com/login';
    
    beforeEach(() => {
        cy.visit(url);
    });

    afterEach(() => {
        cy.clearCookies();
    });

    it('should display the login button', () => {
        cy.get('button').should('be.visible');
        
    });

    it('should contain a field with placeholder text "Enter your email"', () => {
        cy.get('#username').should('exist');
        // to submit
    });
    
});