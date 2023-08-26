// path: ./src/layout/template/header.temp.js
// header.js
import appLogo from "/logo@lcx.webp";
import { html, css, LitElement } from "lit";

import globalSemanticCSS from "../../../src/global-semanticCSS";
import { TWStyles } from "../../../src/tailwind/twlit";
import { sideMenuElement } from "../inc/@sideMenu";

const appName = import.meta.env.VITE_APP_NAME;

class HeaderTemplate extends LitElement {
  static styles = [
    TWStyles,
    globalSemanticCSS,
    css`
      header {
        /* background-color: #333;
        color: #fff; */
        padding: 1rem;
        margin: 0;
      }
    `,
  ];

  static properties = {
    isOpen: { type: Boolean },
  };

  constructor() {
    super();
    this.isOpen = false;
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
        <nav class="navbar grid items-center mx-7">
          <!-- Logo and App Name -->
          <a href="/" class="">
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

          <!-- Navigation Links -->
          <div class="hidden md:flex flex-auto gap-2">
            <!-- Add Links from NavLinkUtils -->
            <ul
              id="headerNav"
              class="flex flex-auto justify-end items-center gap-3 h-8"
            >
              <li class="m-2">
                <a
                  href="."
                  aria-label="Go to home page"
                  class="p-1 text-slate-500 hover:text-slate-900 dark:hover:text-slate-400"
                  >Home</a
                >
              </li>
              <li class="m-2">
                <a
                  href="/songs"
                  aria-label="Go to home page"
                  class="p-1 text-slate-500 hover:text-slate-900 dark:hover:text-slate-400"
                  >Songs</a
                >
              </li>
            </ul>
          </div>

          <div id="toggle-menu" class="flex md:hidden">
            <!-- Toggle Menu Button -->
            <button
              id="toggle-btn"
              aria-label="Toogle side menu"
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
      <!-- i want to hide  side-menu when box-outer-element is touched-->
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
