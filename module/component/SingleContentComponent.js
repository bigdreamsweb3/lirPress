// path: ./module/component/SingleContentComponent.js

import { html, css, LitElement, unsafeCSS } from "lit";
import { initializeApp } from "@firebase/app";
import { getFirestore, doc, getDoc } from "@firebase/firestore";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";
import { classMap } from "lit-html/directives/class-map.js";
import { TWStyles } from "../../src/tailwind/twlit";
import globalSemanticCSS from "../../src/global-semanticCSS";

import "./RIF/ResponsiveImageFrame";
import { singleContentBG } from "../../module/config/lp-config";
import { contentHeadTag } from "../config/theme-config";

const firebaseConfig = {
  apiKey: "AIzaSyALvAUk5EmuSfj1taj1iuBPFGGRVHXKeUM",
  authDomain: "litpress202.firebaseapp.com",
  projectId: "litpress202",
  storageBucket: "litpress202.appspot.com",
  messagingSenderId: "667266045725",
  appId: "1:667266045725:web:b42d3fc29f330fb296f3f4",
};

const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);

class SingleContentComponent extends LitElement {
  static styles = [
    TWStyles,
    globalSemanticCSS,
    css`
      .container {
        background: ${unsafeCSS(singleContentBG)};
        max-width: 800px;
        margin: auto;
        padding: 20px;
      }

      .breadcrumbs {
        margin: 12px 0;
        display: flex;
        align-items: center;
        color: #007bff;
      }

      .breadcrumbs a {
        text-decoration: none;
        font-size: 1rem;
        font-weight: bold;
        color: #007bff;
      }

      .content {
        width: 100%;
        flex-grow: 1;
        margin-top: 20px;
        line-height: 1.6;
      }

      .title {
        text-align: ${unsafeCSS(contentHeadTag.textAlign)};
      }

      p {
        font-size: 1rem;
        margin-bottom: 1.5rem;
      }
    `,
  ];

  static properties = {
    documentId: { type: String },
    title: { type: String },
    content: { type: String },
    type: { type: String },
    category: { type: String },
    loading: { type: Boolean },
    breadcrumbs: { type: Array },
    alignContentItems: { type: String },
    alignText: { type: String },
  };

  constructor() {
    super();
    this.documentId = "";
    this.title = "";
    this.content = "";
    this.type = "";
    this.category = "";
    this.loading = true;
    this.breadcrumbs = [];
    this.alignContentItems = "start"; // Set a default value
    this.alignText = "start";
  }

  async connectedCallback() {
    super.connectedCallback();
    const slug = this.getSlugFromPath();

    if (slug) {
      try {
        await this.fetchContentData(slug);
        this.breadcrumbs = this.generateBreadcrumbs();
      } catch (error) {
        console.error("Error fetching content:", error);
        this.content = "An error occurred while fetching content.";
        this.loading = false;
        this.requestUpdate();
      }
    } else {
      console.error("Slug not found in URL.");
      this.content = "Blog post not found.";
      this.loading = false;
      this.requestUpdate();
    }
  }

  async fetchContentData(slug) {
    const docRef = doc(firestore, "blog-posts", slug);

    try {
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists()) {
        const data = docSnapshot.data();
        this.type = data.type;
        this.category = data.category;
        this.title = data.title;
        this.content = data.content;
      } else {
        this.content = "Blog post not found.";
      }

      this.loading = false;
      this.requestUpdate();
    } catch (error) {
      throw new Error("Error fetching content data: " + error.message);
    }
  }

  generateBreadcrumbs() {
    const pathSegments = window.location.pathname
      .split("/")
      .filter((segment) => segment);

    return pathSegments.map((segment, index) => ({
      title: segment,
      path: `/${pathSegments.slice(0, index + 1).join("/")}`,
    }));
  }

  getSlugFromPath() {
    return window.location.pathname.split("/").pop();
  }

  render() {
    const contentClasses = {
      content: true,
      "items-start": this.alignContentItems === "start",
      "items-center": this.alignContentItems === "center",
      "items-end": this.alignContentItems === "end",
      "text-start": this.alignText === "start",
      "text-center": this.alignText === "center",
      "text-end": this.alignText === "end",
    };

    const renderBreadcrumb = () => html`
      <div class="breadcrumbs">
        ${this.breadcrumbs.map(
          (breadcrumb, index) => html`
            ${index >= 0 ? html`<span class="content-here">>></span>` : ""}
            <a href="${breadcrumb.path}"
              >${this.type}/${this.category}/${breadcrumb.title}</a
            >
          `
        )}
      </div>
    `;

    return html`
      <div class="container">
        <!-- ${renderBreadcrumb()} -->
        <div class="${classMap(contentClasses)}">
          <div class="content">
            <responsive-image-frame
              mainSrc="/img/ooopl/Anita-Brown.jpg"
              alt="this is our website logo"
              fallbackLabel="this is our website logo"
              type="optimized"
            ></responsive-image-frame>
            <h1 class="title">${this.title}</h1>
            ${this.loading
              ? html`<loading-component></loading-component>`
              : html` ${unsafeHTML(this.content)} `}
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("single-content-component", SingleContentComponent);
