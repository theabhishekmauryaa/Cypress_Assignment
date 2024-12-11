import { Daynimic } from '../../support/pageObjects/dynamicContentPage';


describe('Dynamic Content Testing for Flipkart', () => {
  const dynamicContentPage = new Daynimic();
  
    beforeEach(() => {
      cy.visit('https://www.flipkart.com');
    });
  
    it('should load new content when scrolling', () => {
      dynamicContentPage.scrollToBottom();
      dynamicContentPage.verifyNewContentLoaded('button[type="submit"]'); 
    });
  });