// path: ./src/layout/template/footer.temp.js
import { html, css, LitElement } from "lit";
import appLogo from "/logo@lcx.webp";
import globalSemanticCSS from "../../../src/global-semanticCSS";
import { TWStyles } from "../../../src/css/twlit";

const appName = import.meta.env.VITE_APP_NAME;

class FooterTemplate extends LitElement {
  static styles = [
    TWStyles,
    globalSemanticCSS,
    css`
      footer {
        background-color: #333;
        color: #fff;
        padding: 1rem;
      }

      footer nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;
      }

      footer nav a {
        text-decoration: none;
        color: #374151; /* Adjust the text color */
        font-size: 0.875rem; /* Set a base font size */
        transition: color 0.3s ease;
      }

      footer nav a:hover {
        color: #4a90e2; /* Adjust the hover color */
      }

      footer .social-links {
        display: flex;
        gap: 0.5rem;
      }

      footer .social-links a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #374151; /* Adjust the text color */
        font-size: 1rem;
        transition: color 0.3s ease;
      }

      footer .social-links a:hover {
        color: #4a90e2; /* Adjust the hover color */
      }

      @media screen and (max-width: 768px) {
        footer nav {
          justify-content: center;
          gap: 0.75rem;
          margin-top: 1rem;
        }

        footer .social-links {
          justify-content: center;
        }
      }
    `,
  ];

  static properties = {
    isOpen: { type: Boolean },
  };

  constructor() {
    super();
  }

  render() {
    return html`
      <footer class="flex justify-center items-center">
        <nav
          class="w-full flex justify-between flex-wrap items-center gap-4 px-3 ml-3 md:mb-0 text-sm"
        >
          <div class="flex justify-start flex-auto">
            <a href="/" class="mr-2 md:mb-0">
              <!-- Logo -->
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
            <div class="flex items-center gap-3 py-auto">
              <a
                href="https://www.facebook.com"
                class="h-7 px-1 flex items-center text-slate-500 hover:text-slate-900 dark:hover:text-slate-400"
              >
                <span class="sr-only">Facebook</span>
                <fa-icon class="fab fa-facebook" size="1.5em"></fa-icon>
              </a>
              <a
                href="https://www.twitter.com"
                class="h-7 px-1 flex items-center text-slate-500 hover:text-slate-900 dark:hover:text-slate-400"
              >
                <span class="sr-only">Twitter</span>
                <fa-icon class="fab fa-twitter" size="1.5em"></fa-icon>
              </a>
            </div>
          </div>

          <div
            class="grid md:flex flex-auto w-fit h-7 justify-between items-center gap-3 text-center mb-0"
          >
            <div class="flex items-center whitespace-nowrap">
              <a
                href="#"
                class="h-7 my-1 px-1 text-slate-500 hover:text-slate-900 dark:hover:text-slate-400"
                >Contact Us</a
              >
              <a
                href="#"
                class="h-7 my-1 px-1 text-slate-500 hover:text-slate-900 dark:hover:text-slate-400"
                >Privacy Policy</a
              >
              <a
                href="#"
                class="h-7 my-1 px-1 text-slate-500 hover:text-slate-900 dark:hover:text-slate-400"
                >Terms of Service</a
              >
              <a
                href="#"
                class="h-7 my-1 px-1 text-slate-500 hover:text-slate-900 dark:hover:text-slate-400"
                >FAQ</a
              >
            </div>
          </div>
        </nav>
      </footer>
    `;
  }
}

customElements.define("footer-template", FooterTemplate);
