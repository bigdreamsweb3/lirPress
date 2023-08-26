// path: ./module/component/RVF/ResponsiveVideoFrame.js
import { LitElement, html, css } from "lit";

import playbutton from "./play-button.webp";

class ResponsiveVideoFrame extends LitElement {
  static styles = css`
    :host {
      display: flex;
      position: auto;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      max-width: 640px; /* Set a maximum width for the video frame */
      min-height: 320px;
      margin: 0 auto; /* Center the video frame horizontally */
      padding: auto; /* Add spacing around the video frame */
    }

    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }

    .video {
      width: 90%;
      height: 280px;
    }

    .facade-container {
      width: 100%;
      background: rgba(0, 0, 0, 0.07);
      margin: auto 12px;
      z-index: 1;
    }

    .play-button img {
      width: fit-content;
      height: 280px;
      cursor: pointer;
      z-index: 1;
    }
  `;

  static properties = {
    videoSource: { type: String },
    altText: { type: String },
    facadePlayButton: { type: String }, // URL of the play button image for the facade
    isVideoLoaded: { type: Boolean }, // Flag to track if the video is loaded
  };

  constructor() {
    super();
    this.videoSource = ""; // Set your video URL here
    this.altText = "";
    this.facadePlayButton = playbutton; // Set the URL of the play button image here
    this.isVideoLoaded = false;
  }

  handleFacadeClick() {
    this.isVideoLoaded = true;
  }

  convertToEmbedLink(shareLink) {
    if (shareLink.includes("youtu.be/")) {
      const videoId = shareLink.split("/").pop();
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return shareLink;
  }

  render() {
    const embedLink = this.convertToEmbedLink(this.videoSource);

    return html`
      <link rel="preload" href=${playbutton} as="image" />

      ${this.isVideoLoaded
        ? html`
            <iframe
              class="video"
              src=${embedLink}
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
            ></iframe>
          `
        : html`
            <div
              @click=${this.handleFacadeClick}
              class="facade-container"
              style="cursor: pointer;"
              alt="${this.altText}"
            >
              <div class="play-button">
                <img src="${this.facadePlayButton}" alt="${this.altText}" />
                ${!this.isVideoLoaded ? html`<div class="alt-text"></div>` : ""}
              </div>
            </div>
          `}
    `;
  }
}

customElements.define("responsive-video-frame", ResponsiveVideoFrame);
