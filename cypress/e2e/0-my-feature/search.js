const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");

Given("I open homepage", () => {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.visit("http://zero.webappsecurity.com/index.html");
});

When("I type in the search field", () => {
  cy.get("#searchTerm").type("online {enter}");
});

Then("I should see search result", () => {
  cy.get("a").should("contain.text", "Zero - Free Access to Online Banking");
  cy.get("a").should("contain.text", "Zero - Online Statements");
});
