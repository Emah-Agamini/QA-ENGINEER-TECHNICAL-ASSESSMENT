// This test suite covers the checkout flow of the SauceDemo application.
// It includes tests for adding items to the cart, proceeding to checkout, filling out the form, and completing the order.
// Each test checks the URL and content of the page after each step to ensure the flow is correct.
// The tests use Cypress commands to interact with the checkout form and verify the expected outcomes.
// The tests are structured to run after a successful login, ensuring the user is authenticated.
// The selectors used in the tests are based on the data-test attributes provided in the HTML of the checkout pages.
// The tests are designed to be clear and concise, focusing on the essential functionality of the checkout process.
// The test suite can be extended with additional scenarios as needed, such as testing invalid form submissions or edge cases.


describe('SauceDemo Checkout Flow', () => {
    const url = 'https://www.saucedemo.com/';
    const inputUsername = '[data-test="username"]';
    const inputPassword = '[data-test="password"]';
    const loginButton = '[data-test="login-button"]';
    const addToCartButton = '[data-test="add-to-cart-sauce-labs-backpack"]';
    const cartIcon = '.shopping_cart_link';
    const checkOutButton = '[data-test="checkout"]';
    const inputFirstName = '[data-test="firstName"]';
    const inputLastName = '[data-test="lastName"]';
    const inputPostalCode = '[data-test="postalCode"]';
    const continueButton = '[data-test="continue"]';
    const finishButton = '[data-test="finish"]';
    const completeHeader = '.complete-header';

    beforeEach(() => {
        cy.visit(url);
        cy.get(inputUsername).type('standard_user');
        cy.get(inputPassword).type('secret_sauce');
        cy.get(loginButton).click();
        cy.url().should('include', '/inventory.html');
    });

    it('should complete the checkout process successfully', () => {
        // Add item to cart
        cy.get(addToCartButton).click();
        // Go to cart
        cy.get(cartIcon).click();
        cy.url().should('include', '/cart.html');
        // Start checkout
        cy.get(checkOutButton).click();
        cy.url().should('include', '/checkout-step-one.html');
        // Fill out form
        cy.get(inputFirstName).type('Emmanuel');
        cy.get(inputLastName).type('Agamini');
        cy.get(inputPostalCode).type('300123');
        cy.get(continueButton).click();
        cy.url().should('include', '/checkout-step-two.html');
        // Finish checkout
        cy.get(finishButton).click();
        cy.url().should('include', '/checkout-complete.html');
        cy.get(completeHeader).should('contain', 'Thank you for your order!');
    });
});



// describe('SauceDemo Checkout Flow', () => {
//     const url = 'https://www.saucedemo.com/';
//     const inputUsername = '.input_error.form_input[placeholder="Username"]';
//     const inputPassword = '.input_error.form_input[placeholder="Password"]';
//     const loginButton = '.submit-button.btn_action';
//     const addToCartButton = '.btn_inventory';
//     const cartIcon = '.shopping_cart_link';
//     const checkOutButton = '.checkout_button';
//     const inputFirstName = '.checkout_info .input_error.form_input[placeholder="First Name"]';
//     const inputLastName = '.checkout_info .input_error.form_input[placeholder="Last Name"]';
//     const inputPostalCode = '.checkout_info .input_error.form_input[placeholder="Zip/Postal Code"]';
//     const continueButton = '.cart_button';
//     const finishButton = '.cart_button';
//     const completeHeader = '.complete-header';

//     beforeEach(() => {
//         cy.visit(url);
//         cy.get(inputUsername).type('standard_user');
//         cy.get(inputPassword).type('secret_sauce');
//         cy.get(loginButton).click();
//         cy.url().should('include', '/inventory.html');
//     });

//     it('should complete the checkout process successfully', () => {
//         // Add item to cart (first product)
//         cy.get(addToCartButton).first().click();
//         // Go to cart
//         cy.get(cartIcon).click();
//         cy.url().should('include', '/cart.html');
//         // Start checkout
//         cy.get(checkOutButton).click();
//         cy.url().should('include', '/checkout-step-one.html');
//         // Fill out form
//         cy.get(inputFirstName).type('Emmanuel');
//         cy.get(inputLastName).type('Agamini');
//         cy.get(inputPostalCode).type('300123');
//         cy.get(continueButton).contains('Continue').click();
//         cy.url().should('include', '/checkout-step-two.html');
//         // Finish checkout
//         cy.get(finishButton).contains('Finish').click();
//         cy.url().should('include', '/checkout-complete.html');
//         cy.get(completeHeader).should('contain', 'Thank you for your order!');
//     });
// });
