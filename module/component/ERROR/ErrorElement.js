// path: ./module/component/ERROR/ErrorElement.js
import { html, css, LitElement } from "lit";

class ErrorElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      color: white;
      background-color: #f44336;
      padding: 16px;
      border-radius: 4px;
      position: relative;
      top: -50vh;
      z-index: 100;
    }
  `;

  static properties = {
    errorType: { type: String },
  };

  render() {
    if (this.errorType) {
      let errorMessage;

      switch (this.errorType) {
        case "404":
          errorMessage = html`<h2>Page not found</h2>
            <p>Sorry, the page you requested does not exist.</p>`;
          break;
        case "401":
          errorMessage = html`<h2>Unauthorized</h2>
            <p>You are not authorized to access this page.</p>`;
          break;
        case "500":
          errorMessage = html`<h2>Internal Server Error</h2>
            <p>Oops! Something went wrong on our side.</p>`;
          break;
        default:
          errorMessage = html`<h2>Error</h2>
            <p>An unknown error occurred.</p>`;
          break;
      }

      return html`${errorMessage}`;
    } else {
      // If no errorType provided, don't render anything
      return html``;
    }
  }
}

customElements.define("error-element", ErrorElement);
