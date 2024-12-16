describe('Test user1',{testIsolation:false}, () => {
    
    
    it('Visit webpage', () => {
        
        cy.visit('https://www.saucedemo.com/')
    }); 

    it('login', () => {
        cy.completeLogin('user1');
        
    });
    
    it('addToCart', () => {
        cy.addToCart([0, 1, 2]);
        
    });

    it('Checkout', () => {
        cy.checkout('checkData');
        cy.validateCheckout();
    });
    
    it('Logout', () => {
        cy.logout();
        cy.clearCookies();
    });

    

});



describe('Test user2',{testIsolation:false}, () => {
    
    
        it('Visit webpage', () => {
            
            cy.visit('https://www.saucedemo.com/')
        }); 
    
    it('login', () => {
        cy.completeLogin('user2');
        
        
    });
    
    it('addToCart', () => {
        cy.addToCart([0, 1, 2]);
        
    });

    it('Checkout', () => {
        cy.checkout('checkData');
        cy.validateCheckout();
    });
    
    it('Logout', () => {
        cy.logout();
        cy.clearCookies();
    });

});
