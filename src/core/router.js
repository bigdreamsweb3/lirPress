// path: ./src/core/router.js
import page from "page";
import { Renderer } from "./renderer";
import { page_config } from "./routes";

class Router {
  constructor() {
    this.renderer = new Renderer();
    this.listeners = []; // Initialize the listeners array

    this.breadcrumbs = [];
    this.initializeRoutes();
    this.start();
  }

  onNavigate(callback) {
    this.listeners.push(callback);
  }

  initializeRoutes() {
    // routes
    page("/", () => this.renderer.renderHomePage());

    for (const pageKey in page_config) {
      const x_page = page_config[pageKey];

      // Dynamically generate route handlers
      page(x_page.path, () =>
        this.renderer.x_renderPage(x_page.path, x_page.name, x_page.component)
      );
    }

    page("/:type/:category/:slug", (ctx) => {
      const { params } = ctx;
      const { slug } = params;
      page.redirect(`/${slug}`);
    });

    page("/:slug", (ctx) => {
      const { params } = ctx;
      const { slug } = params;

      if (window.location.pathname === `/${slug}`) {
        if (slug === "") {
          // Handle the case when clicking the link to the home page ("/")
          // For example, you can update the breadcrumb to indicate the home page
          this.renderer.updateBreadcrumbs("/", "Home"); // Use this.renderer to access the method
        } else {
          // Use window.location.assign to update the URL without full page reload
          this.renderer.renderFullContentPage(slug); // Use this.renderer to access the method
        }
      } else {
        window.location.assign(`/${slug}`);
      }
    });
  }

  start() {
    // Listen for the popstate event to handle back/forward navigation
    window.addEventListener("popstate", () => {
      // Use the page library to navigate based on the updated URL
      page(window.location.pathname);
    });

    // Initialize the page library at the top level
    page();

    // Define your routes and start the router
    this.initializeRoutes();
  }
}

export { Router };
