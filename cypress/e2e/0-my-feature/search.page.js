const URL = "http://zero.webappsecurity.com/index.html";
const SEARCH_ID = "#searchTerm";
const ONLINE_QUERY = "online {enter}";
const ONLINE_QUERY_RESULT_1 = "Zero - Free Access to Online Banking";
const ONLINE_QUERY_RESULT_2 = "Zero - Online Statements";
const TAG_A = "a";

class SearchPage {

  static visit() {
    cy.visit(URL);
  }

  static search() {
    cy.get(SEARCH_ID).type(ONLINE_QUERY);
  }

  static assertSearchResult() {
    cy.get(TAG_A).should("contain.text", ONLINE_QUERY_RESULT_1);
    cy.get(TAG_A).should("contain.text", ONLINE_QUERY_RESULT_2);
  }
}

export default SearchPage;
