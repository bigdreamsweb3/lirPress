// path: ./core/renderer.js
// ./core/renderer.js
import { html, render } from "lit-html";
import { appName, appURL } from "../module/config/lp-config";
import { MetaManager } from "./meta-manager";

// Pages
import { singleContentPage } from "../src/pages/SingleContent";
import { listCollectionPage } from "../src/pages/ListCollection";
import { blogPage } from "../src/pages/Blog";

class Renderer {
  constructor() {
    this.appElement = document.getElementById("app");
    this.metaManager = new MetaManager();
    this.path = "/"; //  default
    this.homePageName = "Blog"; // Default home page name
    this.homePageElement = blogPage; // You should have this defined somewhere
  }

  updateBreadcrumbs(path, name) {
    this.breadcrumbs = path === "/" ? [] : [{ title: name, path }];
  }

  navigateToUrl() {
    if (window.location.href !== this.urlToPage) {
      window.location.replace(this.urlToPage);

      this.breadcrumbs = [];
    }
  }

  getCurrentPage(path, element) {
    const currentPath = window.location.pathname;
    if (currentPath === path) {
      return element;
    } else if (currentPath.startsWith(path)) {
      return element;
    } else {
      return this.pageNotFound();
    }
  }

  pageNotFound() {
    return html`<div>Page not found</div>`;
  }

  renderPage(pageConfig) {
    const { path, name, element } = pageConfig;

    this.urlToPage = `${appURL}${path}`;

    this.updateBreadcrumbs(path, name);

    this.navigateToUrl();

    this.getCurrentPage(path, element);
    render(html`${element}`, this.appElement);
    document.title = `${appName} - ${name}`;
    this.metaManager.updateMetaDescription(name);
  }

  renderHomePage() {
    this.renderPage({
      path: "/",
      name: this.homePageName,
      element: this.homePageElement,
    });
  }

  renderSongsListPage() {
    // Define songsListPage and singleContentPage somewhere in your code
    this.path = "/songs";

    this.renderPage({
      path: this.path,
      name: "Songs List",
      element: listCollectionPage,
    });
  }

  renderFullContentPage(slug) {
    this.path = `/${slug}`; // Define the path here based on the slug

    // this.renderPage(path, "FullContent", singleContentPage);
    this.renderPage({
      path: this.path,
      name: "FullContent",
      element: singleContentPage,
    });
  }
}

export { Renderer };
