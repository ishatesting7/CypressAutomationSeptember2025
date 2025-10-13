// cypress/support/pageObjects/HomePage.js

import BasePage from "./BasePage";

class HomePage extends BasePage {
  constructor() {
    super();
    // define selectors
    this.searchInput = 'input[name="search"]';
    this.searchButton = 'button[type="button"][class*="btn-default"]';  // refine as needed
    this.myAccountLink = 'a[title="My Account"]';
    this.loginOption = 'a[href*="account/login"]';
    this.cartLink = '#cart';  // or appropriate selector
    this.homeLogo = '.navbar-brand';  // or appropriate
    this.featuredProducts = '.product-layout'; // container for featured products
  }

}

export default HomePage;
