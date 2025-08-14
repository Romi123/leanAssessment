**Lean-sauce-demo Cypress Automation**

**Overview**

This project contains an automated test suite for the Sauce Labs demo website.

It covers the customer flow of selecting 3 random items and completing the checkout process successfully.



**Project Structure**

```Lean-sauce-demo-cypress/
├── cypress/
│   ├── e2e/
│   │   └── test.cy.js           # Test scenario for complete checkout
│   ├── pages/                   # Page Object Model files
│   │   ├── BasePage.js
│   │   ├── LoginPage.js
│   │   ├── ProductListPage.js
│   │   ├── CartPage.js
│   │   ├── CheckoutPage.js
│   │   └── CheckoutCompletePage.js
│   └── reports/                 # Mochawesome reports generated here
├── package.json
├── package-lock.json
├── cypress.config.js
└── README.md
```

**Prerequisites**

Node.js >= 18.x
npm >= 9.x



**Setup**

1. Clone the repository:

```git clone <YOUR\_GITHUB\_REPO\_URL>```

```cd Lean-sauce-demo-cypress```

2. Install dependencies:

```npm install```

**Running Tests**

**Open Cypress GUI:**
```npx cypress open```

**Run tests headlessly:**
```npx cypress run --spec "cypress/e2e/test.cy.js"```

**Run tests based on env(prod)**
```npx cypress run --env ENV=prod --reporter cypress-mochawesome-reporter```


**Test Reporting**

Mochawesome generates detailed reports at:

```cypress/reports/index.html```

**Test Coverage**

Login with valid credentials.

Adding 3 random items to the cart.

Proceeding to checkout.

Filling in checkout information.

Verifying order success and confirmation messages.

**Notes**

Follows Page Object Model (POM) for maintainable code
No hard-coded locators in test scripts
Reusable abstractions and separation of concerns implemented



**Author**

**Romi Varghese**

QA Engineer | Automation Testing | QA Lead

