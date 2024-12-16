// ***********************************************
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

