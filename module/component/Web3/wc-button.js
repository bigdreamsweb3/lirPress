// path: ./module/component/Web3/wc-button.js
import { LitElement, html, css } from "lit";
import { web3modal } from "./web3-config";

class ConnectWalletButton extends LitElement {
  static styles = css`
    button {
      padding: 10px 20px;
      background-color: #007bff; /* Blue color for the button */
      color: #ffffff; /* White text color */
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    button:hover {
      background-color: #0056b3; /* Darker blue color on hover */
    }
  `;

  // Function to open the Web3 modal
  openWeb3Modal() {
    if (web3modal) {
      web3modal.openModal(); // Corrected function call
    }
  }

  render() {
    return html`
      <button id="wallet-connect-btn" @click="${this.openWeb3Modal}">
        Connect Wallet
      </button>
    `;
  }
}

customElements.define("connect-wallet-button", ConnectWalletButton);
