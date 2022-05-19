//testing cart funcionality
describe('testing cart', () => {
it('testing cart!', () => {
    //go to website
    cy.visit('https://www.demoblaze.com');
    //click on any product
    cy.get(':nth-child(4) > .card > :nth-child(1) > .card-img-top').click();
    //click on add to cart button
    cy.get('.col-sm-12 > .btn').click();
    //click on cart button
    cy.get(':nth-child(4) > .nav-link').click();
    //click on checkout button
    cy.get('.col-lg-1 > .btn').click();
    //fill name field
    cy.get('#name').type('Pedro');
    //fill country field
    cy.get('#country').type('Canada');
    //fill city field
    cy.get('#city').type('Torornto');
    //fill credit card field
    cy.get('#card').type('1234567891234567');
    //fill month field
    cy.get('#month').type('5');
    //fill year field
    cy.get('#year').type('2022');
    //click on pay button
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    //close popup
    cy.get('.confirm').click();
    //close popup
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click();
    // click on home page button    
    cy.get('.active > .nav-link').click();


  })
})