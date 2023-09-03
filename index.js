// path: ./index.js
import "lit";
import "./src/app.core";
import "./src/app.layout";
import MainApp from "./src/app/main";

import "./module/component/LoadingComponent";
import "./module/component/Web3";

const mainApp = new MainApp();
const app = [mainApp];

// Render the app
function renderApp() {
  app;
}

// Initial render
renderApp();
