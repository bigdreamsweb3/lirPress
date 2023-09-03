import appLogo from "/logo@lcx.webp";
import { html, css, LitElement } from "lit";
import globalSemanticCSS from "../../../src/global-semanticCSS";
import { TWStyles } from "../../../src/css/twlit";
import { sideMenuElement } from "../inc/@sideMenu";

const appName = import.meta.env.VITE_APP_NAME;

const pageLinks = [
  { name: "Home", url: "/" },
  { name: "Swap", url: "/swap" },
  { name: "Songs", url: "/songs" },
  // Add more page links as needed
];

class HeaderTemplate extends LitElement {
  static styles = [
    TWStyles,
    globalSemanticCSS,
    css`
      header {
        padding: 1rem;
        margin: 0;
      }
    `,
  ];

  static properties = {
    isOpen: { type: Boolean },
    isWeb3ButtonVisible: { type: Boolean },
  };

  constructor() {
    super();
    this.isOpen = false;
    this.isWeb3ButtonVisible = true; // Set based on your visibility logic
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
    const boxOuterElement = this.shadowRoot.querySelector("#box-outer-element");
    if (boxOuterElement) {
      boxOuterElement.classList.toggle("hidden", !this.isOpen);
    }
  }

  render() {
    return html`
      <header class="header block w-full h-auto">
        <nav class="navbar grid items-center">
          <a href="/">
            <div class="flex items-center justify-center h-16">
              <img
                class="border-0 w-8 h-8 outline-offset-2 mr-2"
                alt="App Logo"
                src="${appLogo}"
                height="32px"
                width="32px"
              />
              <span
                class="text-lg font-semibold p-1 text-slate-500 hover:text-slate-900 dark:hover:text-slate-400"
                >${appName}</span
              >
            </div>
          </a>

          <div class="hidden md:flex flex-auto gap-2">
            <ul
              id="headerNav"
              class="flex flex-auto justify-end items-center gap-3 h-8"
            >
              ${pageLinks.map(
                (link) => html`
                  <li class="m-2">
                    <a
                      href="${link.url}"
                      aria-label="Go to ${link.name} page"
                      class="p-1 text-slate-500 hover:text-slate-900 dark:hover:text-slate-400"
                      >${link.name}</a
                    >
                  </li>
                `
              )}
            </ul>

            <div>
              ${this.isWeb3ButtonVisible
                ? html`<connect-wallet-button></connect-wallet-button>`
                : ""}
            </div>
          </div>

          <div id="toggle-menu" class="flex md:hidden">
            <button
              id="toggle-btn"
              aria-label="Toggle side menu"
              class="relative w-8 h-8 flex flex-col auto-cols-auto justify-center items-center bg-transparent border border-gray-200 rounded-md outline-none focus:outline-none"
              @click=${this.toggleMenu}
            ></button>
          </div>
        </nav>
      </header>

      <div
        id="box-outer-element"
        class="h-screen w-full bg-transparent justify-center md:justify-start hidden md:hidden"
      ></div>

      <div
        class="side-menu md:hidden bg-white ${this.isOpen ? "open" : ""}"
        @click=${this.toggleMenu}
      >
        <div>${sideMenuElement}</div>
      </div>
    `;
  }
}

customElements.define("header-template", HeaderTemplate);
