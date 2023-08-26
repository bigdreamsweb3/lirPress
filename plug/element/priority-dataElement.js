// path: ./plug/element/priority-dataElement.js
// ./plug/element/piority-dataElement.js

import { html } from "lit";

const priorityDataElement = html`
  <style>
    .shortened-url-span {
      word-wrap: none;
    }
  </style>

  <div
    id="priority-data-element"
    class="h-auto p-2 mx-auto overflow-x-hidden flex-nowrap hidden transition-opacity w-4/5 whitespace-nowrap items-center justify-start text-sm text-gray-800 gap-3 relative  rounded-xl border bg-gray-50"
  ></div>
`;

export default priorityDataElement;
