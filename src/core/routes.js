// path: ./src/core/routes.js
import Blog from "../pages/Blog.js";
import Songs from "../pages/Songs.js";
import Swap from "../pages/Swap.js";

// route page config
export const page_config = {
  blog: {
    path: "/blog",
    name: "blog",
    component: Blog,
    meta: { title: "", description: "" },
  },

  songs: {
    path: "/songs",
    name: "songs",
    component: Songs,
    meta: { title: "", description: "" },
  },

  swap: {
    path: "/swap",
    name: "swap",
    component: Swap,
    meta: { title: "", description: "" },
  },
};

// route page config
export const pages = [
  page_config.blog.path,
  () =>
    this.renderer.x_renderPage(
      page_config.blog.path,
      page_config.blog.name,
      page_config.blog.component
    ),

  page_config.songs.path,
  () =>
    this.renderer.x_renderPage(
      page_config.songs.path,
      page_config.songs.name,
      page_config.songs.component
    ),

  page_config.swap.path,
  () =>
    this.renderer.x_renderPage(
      page_config.swap.path,
      page_config.swap.name,
      page_config.swap.component
    ),
];
