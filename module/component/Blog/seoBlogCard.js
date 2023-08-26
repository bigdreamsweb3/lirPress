// path: ./module/component/Blog/seoBlogCard.js

import { html, css, LitElement, unsafeCSS } from "lit";
import { TWStyles } from "../../../src/tailwind/twlit";
import globalSemanticCSS from "../../../src/global-semanticCSS";
import {
  cardHeadTag,
  cardMetaData,
  cardSnippet,
} from "../../config/theme-config";

class SeoBlogCard extends LitElement {
  static styles = [
    TWStyles,
    globalSemanticCSS,
    css`
      /* Your component's styles here */
      .blog-card {
        border: 1px solid #ccc;
        padding: 16px;
        margin-bottom: 16px;
      }

      .card-head-tag {
        color: ${unsafeCSS(cardHeadTag.color)};
        background: ${unsafeCSS(cardHeadTag.bg)};
        text-align: ${unsafeCSS(cardHeadTag.textAlign)};
      }

      .card-snippet,
      p {
        font-size: ${unsafeCSS(cardSnippet.fontSize)};
        margin: 0 0 16px;
        text-align: ${unsafeCSS(cardSnippet.textAlign)};
      }

      .metadata {
        font-size: 14px;
        color: #666;
        text-align: ${unsafeCSS(cardMetaData.textAlign)};
      }
    `,
  ];

  static get properties() {
    return {
      title: { type: String },
      content: { type: String },
      author: { type: String },
      created: { type: String },
      slug: { type: String },
      path: { type: String },
    };
  }

  constructor() {
    super();
  }

  render() {
    // Convert the timestamp to a JavaScript Date object
    const createdDate = new Date(this.created.trim() !== ""); // Firestore timestamps are in seconds, so we convert to milliseconds

    // Format the date as a human-readable string (e.g., "Month Day, Year")
    const formattedDate = createdDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    // Parse the HTML content using DOMParser
    const parser = new DOMParser();
    const doc = parser.parseFromString(this.content, "text/html");

    // Extract the first 15 words from the content
    const contentNode = doc.body;
    let contentSnippet = "";
    let wordCount = 0;

    const processNode = (node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const words = node.textContent.trim().split(/\s+/);
        for (const word of words) {
          if (wordCount >= 15) break;
          contentSnippet += `${word} `;
          wordCount++;
        }
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        if (
          node.nodeName === "P" ||
          node.nodeName === "H1" ||
          node.nodeName === "H2" ||
          node.nodeName === "H3" ||
          node.nodeName === "H4" ||
          node.nodeName === "H5" ||
          node.nodeName === "H6"
        ) {
          processNode(node.firstChild);
        } else {
          for (const childNode of node.childNodes) {
            processNode(childNode);
          }
        }
      }
    };

    processNode(contentNode);

    // Append ellipsis if the content is truncated
    if (wordCount >= 15) {
      contentSnippet += "...";
    }

    return html`
      <div class="blog-card">
        <div class="flex justify-start">
          <div>
            <responsive-image-frame
              mainSrc="/img/ooopl/Anita-Brown.jpg"
              alt="this is our website logo"
              fallbackLabel="this is our website logo"
              type="thumbnail"
            >
            </responsive-image-frame>
          </div>
          <div class="p-2">
            <a href="${this.path}"
              ><h2 class="card-head-tag">${this.title}</h2></a
            >
            <p class="card-snippet">${contentSnippet}</p>
            <!-- Display the processed snippet followed by ellipsis -->
            <div class="metadata">
              <span>Author: ${this.author}</span>
              <span>Published: ${formattedDate}</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("seo-blog-card", SeoBlogCard);
