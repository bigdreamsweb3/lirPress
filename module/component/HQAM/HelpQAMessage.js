// path: ./module/component/HQAM/HelpQAMessage.js
// HQAMessage.js {Help Question and Answer Message}

import { LitElement, html, css } from "lit";
import globalSemanticCSS from "../../../src/global-semanticCSS";
import { TWStyles } from "../../../src/tailwind/twlit";

class HQAMessage extends LitElement {
  static styles = [
    globalSemanticCSS,
    TWStyles,
    css`
      :host {
        height: 32px;
        width: 100%;
        margin: 0;
        padding: 0rem;
        text-align: center;
        z-index: 0;
      }

      .h-box {
        position: relative;
        top: 0;
        max-width: 198px;
        max-height: 32px;
        z-index: 0;
      }

      .a-message {
        color: #666;
        border-radius: 2px;
        padding: 0.5em;
        display: flex;
        align-items: center;
        white-space: nowrap;
      }

      .q-icon {
        color: #666;
        padding: 0.5em;
        cursor: pointer;
        align-items: center;
      }

      /* Additional styles for the question */
      .q-box {
        position: absolute;
        left: 100%;
        top: auto;
        transform: translate(-0.01em, -45px);
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        padding: 8px;
        min-width: 100%;
        max-width: 300px;
        text-align: center;
        font-size: 12px;
        line-height: 1.4;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.2s ease-in-out;
        z-index: 9999;
      }

      .q-icon:hover + .q-box,
      .q-box:hover {
        /* Show the question when the parent (.h-box) element is hovered */
        opacity: 1;
        pointer-events: auto;
      }
    `,
  ];

  static get properties() {
    return {
      help_link: { type: String },
      question: { type: String },
      answer: { type: String },
      message: { type: String },
    };
  }

  async connectedCallback() {
    super.connectedCallback();
    this.renderComponent();
  }

  renderComponent() {
    this.answer = html`<a
      href=${this.help_link}
      target="_blank"
      aria-label=${this.question}
      class="p-1 text-slate-500 hover:text-blue-900
      dark:hover:text-slate-400"
      >Click here to find help!
    </a>`;

    // Trigger a re-render after setting the properties
    this.requestUpdate();
  }

  render() {
    return html`
      <div class="h-box flex justify-end bg-yellow-400">
        <div class="a-message text-xs">${this.message}</div>
        <div class="q-icon w-fit bg-slate-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width="16"
            height="16"
            fill="currentColor"
          >
            <path
              d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
            />
          </svg>
        </div>
        <div class="q-box">${this.question}<span>${this.answer}</span></div>
      </div>
    `;
  }
}

customElements.define("hqa-message", HQAMessage);
