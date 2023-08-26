// path: ./src/app/validator/url-validator.js
// url-validator.js

let newLongUrl;

export function isValidURL(url) {
  try {
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      url = `http://${url}`;
    }
    const urlObj = new URL(url);
    newLongUrl = urlObj;
    validURL(newLongUrl);
    const hostname = urlObj.hostname;
    const isValid =
      (urlObj.protocol === "http:" || urlObj.protocol === "https:") &&
      /^[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/i.test(hostname);

    return isValid; // Return the isValid flag
  } catch (error) {
    return false; // Return false in case of error
  }
}

export function validURL() {
  return newLongUrl; // Return the newLongUrl value
}
