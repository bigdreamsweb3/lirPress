// path: ./src/app/plugjs/flash-notice.js

const flashNoticeElement = document.getElementById("flash-notice-element");

let flashNoticeTimeout;

// Function to show notice and status message
export function flashNotice(text, colorClass) {
  clearTimeout(flashNoticeTimeout);
  flashNoticeElement.classList.remove("hidden");
  if (flashNoticeElement.classList.contains("visible")) {
    // If the URL status element is already visible, update the text and color with a transition
    flashNoticeElement.innerHTML = `<span class="icon"></span>${text}`;
    flashNoticeElement.classList.remove("text-red-600", "text-green-600");
    flashNoticeElement.classList.add(colorClass);
    // Add the transition class and remove the visible class to trigger the transition
    flashNoticeElement.classList.add("transition-opacity");
    flashNoticeElement.classList.remove("visible");
    setTimeout(() => {
      // Update the text and color after the transition
      flashNoticeElement.innerHTML = `<span class="icon"></span>${text}`;
      flashNoticeElement.classList.remove("text-red-600", "text-green-600");
      flashNoticeElement.classList.add(colorClass);
      // Add the visible class back after updating the text and color
      flashNoticeElement.classList.add("visible");
      // Remove the transition class
      flashNoticeElement.classList.remove("transition-opacity");
    }, 300); // Adjust the duration to match the transition duration in CSS
  } else {
    // If the URL status element is not visible, update the text and color immediately
    flashNoticeElement.innerHTML = `<span class="icon"></span>${text}`;
    flashNoticeElement.classList.remove("text-red-600", "text-green-600");
    flashNoticeElement.classList.add(colorClass);
    flashNoticeElement.classList.add("visible");
  }
  // Hide the URL status element after a certain duration
  flashNoticeTimeout = setTimeout(() => {
    flashNoticeElement.classList.remove("visible");
    setTimeout(() => {
      flashNoticeElement.classList.add("hidden");
    }, 1000);
  }, 3000);
}
