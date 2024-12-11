class Daynimic {
    scrollToBottom() {
      cy.scrollTo('buttom');
      cy.wait(2000); 
    }
  
    verifyNewContentLoaded() {
      cy.get('button[type="submit"]') 
        .should('be.visible');
    }
  }