// path: ./src/app/main.js

import { updateLog } from "./plugjs/log-message";
import { flashNotice } from "./plugjs/flash-notice";
import { addActivityRow, displayUserActivities } from "./activity";

// Load environment variables

// Initialize

class MainApp {
  constructor() {
    // Wait for the DOMContentLoaded event
    document.addEventListener("DOMContentLoaded", function () {
      // Call the displayUserActivities() function once the page has loaded
      displayUserActivities();
    });
  }
}

export default MainApp;
