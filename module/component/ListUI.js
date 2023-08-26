// path: ./module/component/ListUI.js
// src/components/ListUIComponent.js

import { LitElement, html, css } from "lit";
import globalSemanticCSS from "../../src/global-semanticCSS";
import { TWStyles } from "../../src/tailwind/twlit";

import fetchDataFromFirestore from "../service/firebaseService";

class ListUI extends LitElement {
  static styles = [
    globalSemanticCSS,
    TWStyles,
    css`
      /* Add your component styles here */
    `,
  ];

  static get properties() {
    return {
      pageTitle: { type: String },
      loading: { type: Boolean },
      collections: { type: Array }, // To store fetched collections
    };
  }

  constructor() {
    super();
    this.pageTitle = "List";
    this.loading = true;
    this.collections = [];
  }

  async fetchCollectionsFromFirebase(collectionName) {
    try {
      if (!collectionName) {
        console.error("Collection name is missing");
        return;
      }

      const data = await fetchDataFromFirestore(collectionName);
      this.collections = data;
      this.loading = false; // Update the loading status after fetching data
    } catch (error) {
      console.error("Error fetching collections:", error);
    }
  }

  async firstUpdated() {
    const collectionName = this.getAttribute("collectionName");
    if (collectionName) {
      await this.fetchCollectionsFromFirebase(collectionName);
    }
  }

  render() {
    return html`
      <h1>${this.pageTitle}</h1>
      ${this.loading
        ? html`<loading-component></loading-component>`
        : html`<div class="list">
            <!-- Render each collection -->
            ${this.collections.map(
              (collection) =>
                html`<div class="collection-item">${collection.title}</div>`
            )}
          </div> `}
    `;
  }
}

customElements.define("list-ui", ListUI);
