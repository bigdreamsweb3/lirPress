// path: ./module/component/Store/ProductCard.js
import { LitElement, html, css } from "lit";

class ProductCard extends LitElement {
  static styles = css`
    /* Add your CSS styles here */
  `;

  static properties = {
    product: { type: Object },
  };

  render() {
    return html`
      <!-- Display product information here -->
      <div>
        <img src="${this.product.imageUrl}" alt="${this.product.name}" />
        <h3>${this.product.name}</h3>
        <p>Price: $${this.product.price}</p>
        <!-- Add other product information as needed -->
      </div>
    `;
  }
}

customElements.define("product-card", ProductCard);
