// path: ./module/component/Store/ShoppingCart.js
import { LitElement, html, css } from "lit";

class ShoppingCart extends LitElement {
  static styles = css`
    /* Add your CSS styles here */
  `;

  static properties = {
    cartItems: { type: Array },
  };

  getTotalPrice() {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }

  render() {
    return html`
      <div>
        <h2>Shopping Cart</h2>
        <!-- Display cart items here -->
        ${this.cartItems.map(
          (item) => html`<p>${item.name} - $${item.price}</p>`
        )}
        <p>Total: $${this.getTotalPrice()}</p>
      </div>
    `;
  }
}

customElements.define("shopping-cart", ShoppingCart);
