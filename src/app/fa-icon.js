// path: ./src/app/fa-icon.js
import { LitElement, html } from "@polymer/lit-element";
import { FaStyles } from "./css/fontawesome-all.css.js";

export class FaIcon extends LitElement {
  static get properties() {
    return {
      iclass: String,
    };
  }
  constructor() {
    super();
    this.iclass = "";
    const fontEl = document.createElement("link");
    fontEl.rel = "stylesheet";
    fontEl.href = "https://use.fontawesome.com/releases/v5.0.13/css/all.css";
    document.head.appendChild(fontEl);
  }
  _render({ iclass }) {
    return html`${FaStyles}<i class$="${iclass}"></i>`;
  }
}
customElements.define("fa-icon", FaIcon);
