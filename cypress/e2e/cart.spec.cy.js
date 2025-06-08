// This test suite covers the cart operations of the SauceDemo application.
// It includes tests for adding items to the cart, removing items, and verifying the cart badge.
// Each test checks the visibility and content of the cart badge after performing operations.
// The tests use Cypress commands to interact with the cart buttons and verify the expected outcomes.
// The tests are structured to run after a successful login, ensuring the user is authenticated.
// The selectors used in the tests are based on the data-test attributes provided in the HTML of the inventory page.
// The tests are designed to be clear and concise, focusing on the essential functionality of the cart.

describe('SauceDemo Cart Operations', () => {
    const url = 'https://www.saucedemo.com/';
    const inputUsername = '[data-test="username"]';
    const inputPassword = '[data-test="password"]';
    const loginButton = '[data-test="login-button"]';
    const cartBadge = '.shopping_cart_badge';
    const addToCartBtn = '[data-test="add-to-cart-sauce-labs-backpack"]';
    const removeBtn = '[data-test="remove-sauce-labs-backpack"]';

    beforeEach(() => {
        cy.visit(url);
        cy.get(inputUsername).type('standard_user');
        cy.get(inputPassword).type('secret_sauce');
        cy.get(loginButton).click();
        cy.url().should('include', '/inventory.html');
    });

    it('should add an item to the cart and show badge', () => {
        cy.get(addToCartBtn).click();
        cy.get(cartBadge).should('be.visible').and('contain', '1');
    });

    it('should remove an item from the cart and hide badge', () => {
        cy.get(addToCartBtn).click();
        cy.get(removeBtn).click();
        cy.get(cartBadge).should('not.exist');
    });

    it('should update badge when multiple items are added', () => {
        cy.get('[data-test^="add-to-cart-"]').each(($btn, idx) => {
            if (idx < 3) cy.wrap($btn).click();
        });
        cy.get(cartBadge).should('be.visible').and('contain', '3');
    });
});