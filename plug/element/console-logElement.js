// path: ./plug/element/console-logElement.js

import { html } from "lit";

const consoleLogElement = html`
  <style>
    #box-outer-element {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 1;
      background: #c5c5c583;
    }

    #log-box {
      position: fixed;
      bottom: 50px;
      right: 30px;
      z-index: 9999;
      font-family: "Courier New", monospace;
    }

    .console {
      background-color: #ffffff;
      color: inherit;
      align-items: center;
      border: 1px solid #ccc;
      border-radius: 8px;
      width: 270px;
      height: 150px;
      overflow: hidden; /* Hide both horizontal and vertical scroll bars */
    }

    #console-state {
      padding: 7px;
      max-height: 150px;
      overflow: auto; /* Enable scrolling when needed */
    }

    #console-state p {
      padding: 7px;
      text-align: start;
      margin: auto;
      max-width: 268px;
      overflow-wrap: break-word; /* Wrap long words */
    }
  </style>

  <div id="log-box" class="p-0 mx-0 hidden transition-opacity invisible">
    <div class="console shadow-md">
      <div id="console-state" class="w-full"></div>
    </div>
  </div>

  <div
    id="box-outer-element"
    class="h-screen w-full bg-transparent justify-center md:justify-start hidden"
  ></div>
`;

export default consoleLogElement;
