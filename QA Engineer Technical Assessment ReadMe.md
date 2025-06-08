**QA Engineer Technical Assessment**

This repository contains Cypress-based end-to-end automated test scripts for the SauceDemo web application ([https://www.saucedemo.com/](https://www.saucedemo.com/)). The tests cover core business-critical features, including:

* Login functionality

* Add/Remove products from the cart

* Checkout workflow

* Product filtering (Name & Price sorting)

Repository URL: [https://github.com/Emah-Agamini/QA-ENGINEER-TECHNICAL-ASSESSMENT](https://github.com/Emah-Agamini/QA-ENGINEER-TECHNICAL-ASSESSMENT)

**Test Framework**

**This project uses:**

* Cypress v12+ for E2E automation

* Node.js v16+ (recommended)

* Mocha (default Cypress test runner)

**Test Coverage (P1 Features)**

1. Login Tests

* Valid login with standard\_user

* Invalid login attempts (e.g. locked\_out\_user, problem\_user)

* Log in with empty fields

* Case sensitivity and whitespace edge cases

2. Cart Operations

* Add one or multiple products to the cart

* Remove the item from the cart on both the Inventory and Cart pages

* Cart badge count validation

3. Checkout Flow

* Input valid user details (First Name, Last Name, ZIP)

* Verify item summary, total, and complete checkout

* Order confirmation message assertion

4. Product Filter

* Sort by Name (A-Z and Z-A)

* Sort by Price (low to high)

* Assert product order after sorting

**Project Setup & Installation**

1. **Clone the Repository**

git clone [https://github.com/Emah-Agamini/QA-ENGINEER-TECHNICAL-ASSESSMENT.git](https://github.com/Emah-Agamini/QA-ENGINEER-TECHNICAL-ASSESSMENT.git)  
 cd QA-ENGINEER-TECHNICAL-ASSESSMENT

2. **Install Dependencies**

npm install

3. **Run Tests in Headless Mode (CLI)**

npx cypress run

4. **Run Tests in Interactive Mode (GUI)**

npx cypress open

This opens the Cypress Test Runner. You can select individual spec files to run.

5. **Run Specific Test Spec**

npx cypress run \--spec "cypress/e2e/login.spec.cy.js"

**Project Structure**

.  
 ├── cypress  
 │ ├── e2e  
 │ │ ├── **login.spec.cy.js**  
 │ │ ├── **cart.spec.cy.js**  
 │ │ ├── **checkout.spec.cy.js**  
 │ │ └── **filter.spec.cy.js**  
 │ ├── fixtures  
 │ │ └── examples.json  
 │ ├── support  
 │ │ ├── commands.js  
 │ │ └── e2e.js  
 ├── cypress.config.js  
 └── package.json

**Test Data**

All test users and credentials are stored in cypress/fixtures/testData.json. You can update this file to modify or extend test cases.

**Sample Credentials:**

* standard\_user / secret\_sauce

* problem\_user / secret\_sauce

Environment Requirements

* Node.js v16 or later

* npm v8 or later

* Chrome or Chromium-based browser (for headless runs)

Test Execution Output

On execution, Cypress displays detailed command logs and test results via the terminal (headless) or the Cypress GUI (interactive).

**Best Practices Followed**

* Test coverage of high-priority user flows (P1)

* Modular, reusable test design

* Cypress custom commands for repetitive actions

* Fixtures used for test data separation

* Assertions cover functional and visual expectations

**Contribution**

This repository was developed for Enyata's technical QA automation assessment. For questions or feedback, feel free to raise an issue.

**License**

This project is open for review and learning purposes and does not carry a commercial license.

**Author**  
[Agamini Emmanuel](https://www.linkedin.com/in/emmanuel-agamini/)

