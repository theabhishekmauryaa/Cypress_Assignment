export class NavbarPage{

    clickHome(){
cy.get('a[aria-label="Flipkart"]').click();
    }


    clickAbout(){
        cy.get('a[aria-label="About Us"]').click();
    }

    clickContact(){
cy.get('a[aria-label="Contact Us"]');
    }
}

