// path: ./module/component/Blog/contentSnippet.js

import { LitElement, html } from "lit";

class ContentSnippet extends LitElement {
  static processNode(node, wordLimit) {
    let contentSnippet = "";
    let wordCount = 0;

    const processNodeRecursive = (node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const words = node.textContent.trim().split(/\s+/);
        for (const word of words) {
          if (wordCount >= wordLimit) break;
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
          processNodeRecursive(node.firstChild);
        } else {
          for (const childNode of node.childNodes) {
            processNodeRecursive(childNode);
          }
        }
      }
    };

    processNodeRecursive(node);

    // Append ellipsis if the content is truncated
    if (wordCount >= wordLimit) {
      contentSnippet += "...";
    }

    return contentSnippet;
  }

  render() {
    return html``; // This component doesn't need a template, so leave it empty
  }
}

customElements.define("content-snippet", ContentSnippet);
