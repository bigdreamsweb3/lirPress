// path: ./src/app.layout.js
import { LitElement, css, html, unsafeCSS } from "lit";

// Templates
import "./layout/template/header.temp.js";
import "./layout/template/footer.temp.js";
import "./layout/template/maincontent.temp.js";

// Components
import "../module/component/ERROR/ErrorElement.js";

// Plugs
import "../plug/plug.js";

// CSS Engines
import { TWStyles } from "./css/twlit.js";
import globalSemanticCSS from "./global-semanticCSS.js";
import "../module/component/AuthProtectedPage.js";

export class AppLayout extends LitElement {
  static properties = {
    appName: { type: String },
    themeMode: { type: String },
    errorType: { type: String },
  };

  constructor() {
    super();
    this.appName = "";
    this.errorType = "";
    this.themeMode = "dark"; // Default theme mode
  }

  static styles = [
    TWStyles,
    globalSemanticCSS,

    css`
      :host {
        display: block;
        max-width: 1280px;
        margin: 0 auto;
        padding: 0.75rem auto;
        text-align: center;
        height: calc(100vh - 190px);
        width: 100%;
        transition: background-color 0.3s, color 0.3s; // Smooth transition for theme change
        background-color: var(--background-color);
        color: var(--text-color);
      }

      .page-wrapper {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }

      .page-margin {
        margin-top: var(--page-margin, 5%);
      }

      @media screen and (max-width: 768px) {
        :host {
          --page-margin: 9%;
        }
      }

      @media screen and (max-width: 640px) {
        :host {
          --page-margin: 12%;
        }
      }
    `,
  ];

  render() {
    return html`
      <div class="page-wrapper">
        <header-template></header-template>

        <main-content-template sidebarPosition="right">
          <slot></slot>
        </main-content-template>

        ${this.errorType
          ? html`<error-element .errorType="${this.errorType}"></error-element>`
          : ""}

        <footer-template></footer-template>
      </div>
    `;
  }
}

customElements.define("app-layout", AppLayout);
