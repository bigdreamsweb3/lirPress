// path: ./module/component/LoadingComponent.js
import { html, css, LitElement } from "lit";

class LoadingComponent extends LitElement {
  static styles = css`
    /* loading.css */

    .loading-container {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: start;
      width: 100%;
      height: 100vh;
    }

    .loading-box {
      width: 90%;
      min-width: 200px;
      height: 100px;
      margin: 20px;
      background-color: #f0f0f0;
      animation: pulse 1.5s infinite;
    }

    .header-box {
      width: auto;
      height: 50px;
    }

    .img-box {
      width: auto;
      height: 320px;
    }

    .ad-box {
      width: 80%;
      height: 320px;
    }

    @keyframes pulse {
      0% {
        opacity: 0.6;
        transform: scale(1);
      }
      50% {
        opacity: 1;
        transform: scale(1.05);
      }
      100% {
        opacity: 0.6;
        transform: scale(1);
      }
    }
  `;

  render() {
    return html`
      <div class="loading-container">
        <div class="loading-box header-box"></div>
        <div class="loading-box"></div>
        <div class="loading-box"></div>
        <div class="loading-box img-box"></div>
        <div class="loading-box"></div>
        <div class="loading-box"></div>
        <div class="loading-box ad-box"></div>
        <div class="loading-box"></div>
        <div class="loading-box img-box"></div>
      </div>
    `;
  }
}

customElements.define("loading-component", LoadingComponent);
