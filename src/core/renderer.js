// path: ./src/core/renderer.js
import { html, render } from "lit-html";
import { appAPI, appName, appURL } from "../../module/config/lp-config";
import { MetaManager } from "./meta-manager";

// Pages
import { singleContentPage } from "../pages/_SingleContent";
import Blog from "../pages/Blog";

class Renderer {
  constructor() {
    this.appElement = document.getElementById("app");
    this.metaManager = new MetaManager();
    this.path = "/"; //  default
    this.homePageName = "Blog"; // Default home page name
    this.homePageElement = Blog; // You should have this defined somewhere
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

  x_renderPage(path, name, component) {
    this.renderPage({
      path: path,
      name: name,
      element: component,
    });
  }

  renderHomePage() {
    this.renderPage({
      path: "/",
      name: this.homePageName,
      element: this.homePageElement,
    });
  }

  // renderSongsPage() {
  //   // Define songsListPage and singleContentPage somewhere in your code
  //   this.path = "/songs";

  //   this.renderPage({
  //     path: this.path,
  //     name: "Songs List",
  //     element: songsPage,
  //   });
  // }

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
