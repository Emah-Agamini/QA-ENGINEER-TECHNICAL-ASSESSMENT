// This test suite covers the product filtering functionality of the SauceDemo application.
// It includes tests for sorting products by price (low to high) and by name (A to Z and Z to A).
// Each test checks the order of products after applying the selected filter.
// The tests use Cypress commands to interact with the sort dropdown and verify the expected outcomes.
// The tests are structured to run after a successful login, ensuring the user is authenticated.
// The selectors used in the tests are based on the data-test attributes provided in the HTML of the inventory page.
// The tests are designed to be clear and concise, focusing on the essential functionality of product filtering.

describe('SauceDemo Product Filters', () => {
    const url = 'https://www.saucedemo.com/';
    const inputUsername = '.input_error.form_input[type="text"]'; // Username input class
    const inputPassword = '.input_error.form_input[type="password"]'; // Password input class
    const loginButton = '.submit-button.btn_action'; // Login button class
    const sortSelect = '.product_sort_container'; // Sort dropdown class

    beforeEach(() => {
        cy.visit(url);
        cy.get(inputUsername).type('standard_user');
        cy.get(inputPassword).type('secret_sauce');
        cy.get(loginButton).click();
        cy.url().should('include', '/inventory.html');
    });

    it('should sort products by Price (low to high)', () => {
        cy.get(sortSelect).select('lohi');
        let prices = [];
        cy.get('.inventory_item_price').each(($el) => {
            const price = parseFloat($el.text().replace('$', ''));
            prices.push(price);
        }).then(() => {
            const sorted = [...prices].sort((a, b) => a - b);
            expect(prices).to.deep.equal(sorted);
        });
    });

    it('should sort products by Name (Z to A)', () => {
        cy.get(sortSelect).select('za');
        let names = [];
        cy.get('.inventory_item_name').each(($el) => {
            names.push($el.text());
        }).then(() => {
            const sorted = [...names].sort().reverse();
            expect(names).to.deep.equal(sorted);
        });
    });

    it('should sort products by Name (A to Z)', () => {
        cy.get(sortSelect).select('az');
        let names = [];
        cy.get('.inventory_item_name').each(($el) => {
            names.push($el.text());
        }).then(() => {
            const sorted = [...names].sort();
            expect(names).to.deep.equal(sorted);
        });
    });
});