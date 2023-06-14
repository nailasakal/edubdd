import SearchPage from "./search.page.js";

const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");

Given("I open homepage", () => {
  cy.clearCookies();
  cy.clearLocalStorage();
  SearchPage.visit();
});

When("I type in the search field", () => {
  SearchPage.search();
});

Then("I should see search result", () => {
  SearchPage.assertSearchResult();
});
