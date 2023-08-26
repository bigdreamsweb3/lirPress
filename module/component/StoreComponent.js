// path: ./module/component/StoreComponent.js
import { LitElement, html, css } from "lit";
import "./Store/ProductCard.js";
import "./Store/ProductList.js";
import "./Store/ShoppingCart.js";
import "./Store/Add-to-CartButton.js";

class StoreComponent extends LitElement {
  static styles = css`
    /* Add your CSS styles here */
  `;

  static properties = {
    products: { type: Array },
    cartItems: { type: Array },
  };

  constructor() {
    super();
    // Sample data for products and cart items
    this.products = [
      { id: 1, name: "Product 1", imageUrl: "product1.jpg", price: 10.99 },
      { id: 2, name: "Product 2", imageUrl: "product2.jpg", price: 15.99 },
      // Add more products as needed
    ];

    this.cartItems = [];
  }

  render() {
    return html`
      <h1>Welcome to our Online Store!</h1>

      <!-- Product List -->
      <h2>Products</h2>
      <product-list .products="${this.products}"></product-list>

      <!-- Shopping Cart -->
      <shopping-cart .cartItems="${this.cartItems}"></shopping-cart>
    `;
  }
}

customElements.define("store-component", StoreComponent);
