// path: ./src/app/utils/nav-linkUtils.js
// Path: .\src\app\utils\nav-linkUtils.js

// Function to create a link element with specified attributes
export function createLink(url, text, target = "_self") {
  const link = document.createElement("a");
  link.href = url;
  link.textContent = text;
  link.target = target;
  return link;
}

// Function to add a list of links to a navigation container
export function addLinksToNav(container, links) {
  links.forEach((link) => {
    container.appendChild(link);
  });
}
