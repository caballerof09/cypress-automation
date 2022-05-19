
  // testing login funcionality
describe('testing login', () => {
    it('testing login!', () => {
        //go to website
        cy.visit('https://www.demoblaze.com');
        //click on login button
        cy.get('#login2').click();
        //click username
        cy.get('#loginusername').click();
        //type username
        cy.get('#loginusername').type('pedro@gbuzz.com');
        //click password
        cy.get('#loginpassword').click();
        //enter password
        cy.get('#loginpassword').type('123456');
        //click login buttom and login 
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        //close popup 
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-header > .close').click();

    })
  })
  


