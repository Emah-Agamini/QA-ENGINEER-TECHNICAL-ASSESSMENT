// This test suite covers the login functionality of the SauceDemo application.
// It includes tests for successful login, invalid credentials, and empty fields.
// Each test checks the visibility and content of error messages when login fails.
// The tests use Cypress commands to interact with the login form and verify the expected outcomes.
// The tests are structured to run before each test case, ensuring a fresh state for each login attempt.
// The selectors used in the tests are based on the data-test attributes provided in the HTML of the login page.
// The tests are designed to be clear and concise, focusing on the essential functionality of the login page.
// The test suite can be extended with additional scenarios as needed, such as testing different user roles or edge cases.
// The tests are written in a way that allows for easy maintenance and readability.
// The test suite can be run using Cypress, and it will automatically open the browser and execute the tests.
// The tests will provide feedback on the success or failure of each login attempt, helping to ensure the reliability of the login functionality.

describe('SauceDemo Login Page', () => {
    const url = 'https://www.saucedemo.com/';
    const inputUsername = '[data-test="username"]';
    const inputPassword = '[data-test="password"]';
    const loginButton = '[data-test="login-button"]';
    const errorMessage = '[data-test="error"]';

    beforeEach(() => {
        cy.visit(url);
    });

    it('should login successfully with valid credentials', () => {
        cy.get(inputUsername).type('standard_user');
        cy.get(inputPassword).type('secret_sauce');
        cy.get(loginButton).click();
        cy.url().should('include', '/inventory.html');
    });

    it('should show error with invalid password', () => {
        cy.get(inputUsername).type('problem_user');
        cy.get(inputPassword).type('wrong_password');
        cy.get(loginButton).click();
        cy.get(errorMessage).should('be.visible')
            .and('contain', 'Username and password do not match');
    });

    it('should show error with invalid username', () => {
        cy.get(inputUsername).type('emmanuel');
        cy.get(inputPassword).type('secret_sauce');
        cy.get(loginButton).click();
        cy.get(errorMessage).should('be.visible')
            .and('contain', 'Username and password do not match');
    });

    it('should show error when username is empty', () => {
        cy.get(inputPassword).type('secret_sauce');
        cy.get(loginButton).click();
        cy.get(errorMessage).should('be.visible')
            .and('contain', 'Username is required');
    });

    it('should show error when password is empty', () => {
        cy.get(inputUsername).type('problem_user');
        cy.get(loginButton).click();
        cy.get(errorMessage).should('be.visible')
            .and('contain', 'Password is required');
    });
});