// path: ./src/layout/template/maincontent.temp.js
// main-content-template.js

import { LitElement, html, css } from "lit-element";

class MainContentTemp extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    main {
      display: flex;
      flex-direction: row;
    }

    .sidebar {
      height: fit-content;
      width: var(--sidebar-width, 20%);
      background-color: #f0f0f0;
      padding: 20px;
      box-sizing: border-box; /* Include padding in width calculation */
    }

    .content {
      flex-grow: 1;

      width: var(--content-width, calc(70% - var(--sidebar-width)));
      padding: 20px;
      box-sizing: border-box;

      /* Adjust position based on sidebar position */
      left: var(--sidebar-position, var(--sidebar-width, 20%));
      right: var(--sidebar-position, var(--sidebar-width, 20%));
    }

    .sidebar-right {
      right: 0;
      left: initial;
      order: 1; /* Sidebar will appear above main content */
    }

    .sidebar-left {
      left: 0;
      right: initial;
      order: -1; /* Sidebar will appear above main content */
    }

    /* Media Queries for Tablet View */
    @media screen and (max-width: 768px) {
      main {
        display: flex;
        flex-wrap: wrap;
      }

      .sidebar {
        width: 100%; /* Occupy full width on tablets */
      }

      .content {
        width: 100%; /* Occupy full width on tablets */
        margin: 15px;
      }

      .sidebar-right {
        right: 0;
        left: 0;
        order: 1; /* Sidebar will appear above main content */
      }

      .sidebar-left {
        left: 0;
        right: 0;
        order: 1; /* Sidebar will appear above main content */
      }
    }

    /* Media Queries for Mobile View */
    @media screen and (max-width: 480px) {
      main {
        display: flex;
        flex-wrap: wrap;
      }

      .sidebar {
        width: 100%; /* Occupy full width on mobile */
        margin: 15px;
      }

      .content {
        width: 100%; /* Occupy full width on mobile */
        padding: 0; /* Adjust padding for mobile view */
      }

      .sidebar-right {
        right: 0;
        left: 0;
        order: 1; /* Sidebar will appear above main content */
      }

      .sidebar-left {
        left: 0;
        right: 0;
        order: 1; /* Sidebar will appear above main content */
      }
    }
  `;

  static properties = {
    sidebarWidth: { type: String },
    sidebarPosition: { type: String }, // "left" or "right"
    showSidebar: { type: Boolean },
    contentWidth: { type: String },
  };

  constructor() {
    super();
    this.sidebarWidth = "25%";
    this.sidebarPosition = "left"; // Default to "left"
    this.showSidebar = true;
    this.contentWidth = "100%";
  }

  render() {
    const sidebarClasses =
      this.sidebarPosition === "right" ? "sidebar-right" : "sidebar-left";

    // Calculate content width based on sidebar visibility
    const contentWidthCalc = this.showSidebar
      ? `calc(100% - var(--sidebar-width, ${this.sidebarWidth}))`
      : "100%";

    // Calculate left and right positions based on sidebar position
    const leftPosition =
      this.sidebarPosition === "right"
        ? "initial"
        : `var(--sidebar-width, ${this.sidebarWidth})`;
    const rightPosition =
      this.sidebarPosition === "right"
        ? `var(--sidebar-width, ${this.sidebarWidth})`
        : "initial";

    return html`
      <main class="page-margin">
        <div
          slot="content"
          class="content"
          style="
            --content-width: ${contentWidthCalc};
            left: ${leftPosition};
            right: ${rightPosition};
          "
        >
          <!-- Main content goes here -->
          <slot></slot>
        </div>
        <div
          slot="sidebar"
          class="sidebar mt-4 mr-4 ${sidebarClasses}"
          style="--sidebar-width: ${this.sidebarWidth}"
        ></div>
      </main>
    `;
  }
}

customElements.define("main-content-template", MainContentTemp);
