// path: ./src/global-semanticCSS.js
import { css } from "lit";

const globalSemanticCSS = css`
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.lit:hover {
    filter: drop-shadow(0 0 2em #325cffaa);
  }

  .card {
    padding: 2em;
  }

  .read-the-docs {
    color: #888;
  }

  a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
  }
  a:hover {
    color: #535bf2;
  }

  ::slotted(h1) {
    font-size: 3.2em;
    line-height: 1.1;
  }

  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
  }
  button:hover {
    border-color: #646cff;
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  @media (prefers-color-scheme: light) {
    a:hover {
      color: #747bff;
    }
    button {
      background-color: #f9f9f9;
    }
  }
  /* Global styles */

  * {
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

  .navbar {
    display: flex;
    justify-content: space-between;
  }

  .logo-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #666;
  }

  .logo-img {
    height: 50px;
    width: auto;
    margin-right: 0.5rem;
  }

  .logo-text {
    font-size: 1.5rem;
  }

  /* Header Styles for Desktop View */
  h1 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.2;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.3;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.4;
    margin-top: 1.25rem;
    margin-bottom: 1rem;
  }

  h4 {
    font-size: 1.05rem;
    font-weight: 600;
    line-height: 1.5;
    margin-top: 1rem;
    margin-bottom: 0.75rem;
  }

  h5 {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.6;
    margin-top: 1rem;
    margin-bottom: 0.75rem;
  }

  h6 {
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 1.7;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  /* Media Queries for Tablet View */
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 1.75rem;
      margin-top: 1.5rem;
      margin-bottom: 0.75rem;
    }

    h2 {
      font-size: 1.25rem;
      margin-top: 1.25rem;
      margin-bottom: 0.75rem;
    }

    h3 {
      font-size: 1.15rem;
      margin-top: 1rem;
      margin-bottom: 0.5rem;
    }

    h4,
    h5,
    h6 {
      font-size: 1.1rem;
      margin-top: 0.75rem;
      margin-bottom: 0.25rem;
    }
  }

  /* Media Queries for Mobile View */
  @media screen and (max-width: 480px) {
    h1 {
      font-size: 1.5rem;
      margin-top: 1rem;
      margin-bottom: 0.5rem;
    }

    h2 {
      font-size: 1.2rem;
      margin-top: 1rem;
      margin-bottom: 0.5rem;
    }

    h3,
    h4,
    h5,
    h6 {
      font-size: 1.1rem;
      margin-top: 0.75rem;
      margin-bottom: 0.25rem;
    }
  }

  .title {
    margin-bottom: 2rem;
    font-size: 2rem;
  }

  .form {
    display: flex;
    justify-content: center;
    width: 768px;
  }

  .form-input {
    width: 100%;
    max-height: 200px;
    height: 24px;
    font-size: 1rem;
    overflow-y: hidden;
  }

  .form-button {
    display: block;
    width: 100%;
    max-width: 260px;
    padding: 0.75rem;
    color: #ffffff;
    border: none;
    border-radius: 0.25rem;
    font-size: 1rem;
    cursor: pointer;
  }

  .flash-icon {
    margin-right: 0.5rem;
  }

  .text-red-600 .flash-icon::before {
    content: "❌ ";
  }

  .text-green-600 .flash-icon::before {
    content: "✅ ";
  }

  .url-status {
    background-color: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 2%;
    transition-property: opacity, transform;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
    opacity: 0;
    transform: translateY(-10px);
  }

  .url-status.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .shortened-url {
    margin-top: 1rem;
    text-align: center;
  }

  .shortened-url-title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .shortened-url-link {
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: #f1f1f1;
    border-radius: 4px;
    word-break: break-all;
    transition: background-color 0.3s ease;
  }

  .shortened-url-link:hover {
    background-color: #e1e1e1;
  }

  .table-container {
    overflow-x: auto;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 768px) {
    .form {
      max-width: 620px;
    }
  }

  @media screen and (max-width: 640px) {
    .form {
      width: 100%;
    }

    .table-container {
      overflow-x: auto;
    }

    .table-auto {
      width: 100%;
    }

    .table-auto thead {
      display: none;
    }

    .table-auto tbody tr {
      display: block;
      margin-bottom: 1rem;
      border-bottom: 1px solid #e2e8f0;
    }

    .table-auto td {
      display: block;
      text-align: left;
      font-weight: 400;
      font-size: 0.875rem;
      padding: 0.5rem;
      position: relative;
    }

    .table-auto td::before {
      content: attr(data-label);
      font-weight: bold;
      padding: 0.5rem;
      margin-bottom: 0.5rem;
      display: block;
      position: absolute;
      top: 0;
      right: 0;
    }
  }
`;

export default globalSemanticCSS;
