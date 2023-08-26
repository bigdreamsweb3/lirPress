// path: ./module/component/Store/Add-to-CartButton.js
import { LitElement, html, css } from "lit";

class AddToCartButton extends LitElement {
  static styles = css`
    /* Add your CSS styles here */
  `;

  static properties = {
    product: { type: Object },
  };

  addToCart() {
    // Here, you would implement the logic to add the product to the shopping cart
    // You might use some global state management or event dispatching system to handle this action
    console.log("Added to cart:", this.product.name);
  }

  render() {
    return html` <button @click="${this.addToCart}">Add to Cart</button> `;
  }
}

customElements.define("add-to-cart-button", AddToCartButton);
