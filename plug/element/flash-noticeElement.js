// path: ./plug/element/flash-noticeElement.js

import { html } from "lit";

const flashNoticeElement = html`
  <div
    id="flash-notice-element"
    class="flash-notice fixed top-0 right-0 w-fit mb-2 text-sm font-semibold transition-all"
  ></div>

  <style>
    .flash-notice {
      margin-top: 15px;
      margin-right: 10px;
      background-color: #fff; /* Chat gpt change the background to the notice color */
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      padding: 8px;
      transition-property: opacity, transform;
      transition-duration: 0.3s;
      transition-timing-function: ease-in-out;
      opacity: 0;
      transform: translateY(-10px);
      z-index: 1;
    }

    .flash-notice.visible {
      opacity: 1;
      transform: translateY(0);
    }
  </style>
`;

export default flashNoticeElement;
