// path: ./module/component/FullContent/fetchPostTypeBySlug.js
// Path: /resources/component/FullContent/fetchPostTypeBySlug.js

export async function fetchPostTypeBySlug(slug) {
  try {
    // Implement your logic to fetch the postType based on the slug
    // For example, you could make an API request to get the post type
    const response = await fetch(`/api/getPostType?slug=${slug}`);
    const data = await response.json();
    return data.postType; // Assuming the API response has a "postType" property
  } catch (error) {
    console.error("Error fetching post type:", error);
    return null;
  }
}
