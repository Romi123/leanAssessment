Lean-sauce-demo Cypress Automation

Overview

This project contains an automated test suite for the Sauce Labs demo website.

It covers the customer flow of selecting 3 random items and completing the checkout process successfully.



Project Structure

bash

Copy

Edit

cypress/

  e2e/

    test.cy.js           # Test scenario for complete checkout

  pages/                 # Page Object Model files

    BasePage.js

    LoginPage.js

    ProductListPage.js

    CartPage.js

    CheckoutPage.js

    CheckoutCompletePage.js

  mindmap/

    Sauce Demo.png        # Mind map image

  reports/               # Mochawesome test reports

package.json

cypress.config.js

README.md

Prerequisites

Node.js >= 18.x



npm >= 9.x



Setup

Clone the repository:



bash

Copy

Edit

git clone <YOUR\_GITHUB\_REPO\_URL>

cd Lean-sauce-demo-cypress

Install dependencies:



bash

Copy

Edit

npm install

Running Tests

Open Cypress GUI:



bash

Copy

Edit

npx cypress open

Run tests headlessly:



bash

Copy

Edit

npx cypress run --spec "cypress/e2e/test.cy.js"

Test Reporting

Mochawesome generates detailed reports at:



bash

Copy

Edit

cypress/reports/index.html

Test Coverage

Login with valid credentials



Add 3 random products to cart



Complete checkout



Verify order success and confirmation messages



Test Flow Mind Map



Notes

Follows Page Object Model (POM) for maintainable code



No hard-coded locators in test scripts



Reusable abstractions and separation of concerns implemented



Author

Romi Varghese

QA Engineer | Automation Testing | QA Lead

