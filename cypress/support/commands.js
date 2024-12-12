// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('completeLogin', (type = 'user1') => {
    cy.fixture('example').then((data) => {
        const formData = data[type]
        cy.visit('https://www.saucedemo.com');
        cy.get('[data-test="username"]').clear().type(formData.username)
        cy.get('[data-test="password"]').clear().type(formData.password)
        cy.get('[data-test="login-button"]').click();
        

    })
});

Cypress.Commands.add('addToCart', (products) => {
    products.forEach(index => {
        cy.get('.inventory_item').eq(index).find('button').click();
    });
    cy.get('.shopping_cart_link').should('contain', products.length.toString());
});

Cypress.Commands.add('checkout', (type = 'checkData') => {
    cy.fixture('example').then((data) => {
        const formData = data[type]
        cy.get('.shopping_cart_link').click();
        cy.contains('Checkout').click();
        cy.get('[data-test="firstName"]').clear().type(formData.firstName);
        cy.get('[data-test="lastName"]').clear().type(formData.lastName);
        cy.get('[data-test="postalCode"]').clear().type(formData.postalCode);
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="finish"]').click();
    })
});

Cypress.Commands.add('validateCheckout', () => {
    cy.get('.complete-header').contains('Thank you for your order!').should('be.visible');
});

Cypress.Commands.add('logout', () => {
    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click();
});

//Cypress.Commands.add('completeLogin', (type = 'user2') => {
    //cy.fixture('example').then((data) => {
        //const formData = data[type]
        //cy.visit('https://www.saucedemo.com');
        //cy.get('[data-test="username"]').clear().type(formData.username)
        //cy.get('[data-test="password"]').clear().type(formData.password)
        //cy.get('[data-test="login-button"]').click();
        

    //})
//});

//Cypress.Commands.add('completeLogin', (type = 'user1') => {
    //cy.fixture('example').then((data) => {
        //const formData = data[type]
        //cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('exist');
        //cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click(); 
    //}) 
//});
