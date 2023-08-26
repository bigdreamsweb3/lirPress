// path: ./src/pages/Blog.js
// ./src/pages/FullContentPage.js

import { html } from "lit";
import "../../module/component/BlogComponent";

export const blogPage = html`
  <blog-component collectionName="blog-posts"></blog-component>
`;
