// path: ./module/component/AuthProtectedPage.js
// Path: ./module/components/AuthProtectedPage.js
import { LitElement, html } from "lit";
import { auth, signInWithGoogle, signOut } from "../service/firebaseService"; // Import Firebase auth module

class AuthProtectedPage extends LitElement {
  constructor() {
    super();
    this.user = null;
  }

  connectedCallback() {
    super.connectedCallback();
    auth.onAuthStateChanged((user) => {
      this.user = user;
      this.requestUpdate(); // Update the component when authentication state changes
    });
  }

  render() {
    if (!this.user) {
      return html`
        <p>Please log in to access this page.</p>
        <button @click=${this.handleSignIn.bind(this)}>
          Sign in with Google
        </button>
      `;
    }

    return html`
      <p>Welcome, ${this.user?.displayName}!</p>
      <button @click=${this.handleSignOut.bind(this)}>Sign out</button>
      <!-- Display fetched data and apply styling properties here -->
    `;
  }

  async handleSignIn() {
    try {
      const user = await signInWithGoogle();
      this.user = user;
    } catch (error) {
      console.error("Error signing in:", error);
    }
  }

  async handleSignOut() {
    try {
      await signOut();
      this.user = null;
    } catch (error) {
      console.error("Error signing out:", error);
    }
  }
}

customElements.define("auth-protected-page", AuthProtectedPage);
