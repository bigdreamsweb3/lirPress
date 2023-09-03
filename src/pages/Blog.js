// path: ./src/pages/Blog.js
import { html } from "lit";
import "../../module/component/BlogComponent";

const Blog = html`
  <blog-component collectionName="blog-posts"></blog-component>
`;

export default Blog;
