// path: ./module/component/BlogComponent.js

import { html, css, LitElement } from "lit";
import fetchDataFromFirestore from "../../module/service/firebaseService";

import "./Blog/seoBlogCard";
import globalSemanticCSS from "../../src/global-semanticCSS";
import { TWStyles } from "../../src/tailwind/twlit";

class BlogComponent extends LitElement {
  static styles = [
    TWStyles,
    globalSemanticCSS,
    css`
      /* Your component's styles here */
    `,
  ];

  static properties = {
    collectionName: { type: String }, // Add collectionName property
    blogPosts: { type: Array },
    loading: { type: Boolean },
  };

  constructor() {
    super();
    this.blogPosts = [];
    this.loading = true;
  }

  async fetchBlogPostsFromFirebase() {
    try {
      if (!this.collectionName) {
        console.error("Collection name is missing");
        return;
      }

      const data = await fetchDataFromFirestore(this.collectionName);
      this.blogPosts = data;
      this.loading = false;
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      this.loading = false;
    }
  }

  async firstUpdated() {
    await this.fetchBlogPostsFromFirebase();
  }

  render() {
    return html`
      ${this.loading
        ? html`<loading-component></loading-component>`
        : html`
            <div>
              ${this.blogPosts.map(
                (blogPost) => html`
                  <seo-blog-card
                    title="${blogPost.title}"
                    content="${blogPost.content}"
                    category="${blogPost.category}"
                    slug="${blogPost.slug}"
                    author="${blogPost.author}"
                    created="${blogPost.created}"
                    path="${blogPost.type
                      ? blogPost.type +
                        "/" +
                        blogPost.category +
                        "/" +
                        blogPost.slug
                      : blogPost.slug}"
                  ></seo-blog-card>
                `
              )}
            </div>
          `}
    `;
  }
}

customElements.define("blog-component", BlogComponent);
