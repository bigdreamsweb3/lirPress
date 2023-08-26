// path: ./module/component/Store/ProductList.js
import { LitElement, html, css } from "lit";

class ProductList extends LitElement {
  static styles = css`
    /* Add your CSS styles here */
  `;

  static properties = {
    products: { type: Array },
  };

  render() {
    return html`
      <div>
        <!-- Loop through the products and render ProductCard for each one -->
        ${this.products.map(
          (product) => html`<product-card .product="${product}"></product-card>`
        )}
      </div>
    `;
  }
}

customElements.define("product-list", ProductList);
