// path: ./index.js
import "lit";
import "./app-router";
import "./src/app-layout";
import MainApp from "./src/app/main";

import "./module/component/LoadingComponent";

const mainApp = new MainApp();
const app = [mainApp];

// Render the app
function renderApp() {
  app;
}

// Initial render
renderApp();
