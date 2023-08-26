// path: ./src/layout/inc/@sideMenu.js
import { html } from "lit";
import appLogo from "/logo@lcx.webp";

const appName = import.meta.env.VITE_APP_NAME;

export const sideMenuElement = html`
  <style>
    /* Styles for the side menu */
    .side-menu {
      position: fixed;
      top: 0;
      left: -350px; /* Initially hidden */
      width: 250px;
      height: 100vh;
      background-color: #f1f1f1;
      transition: left 0.3s ease;
      z-index: 800;
    }

    .side-menu.open {
      left: 0; /* Shown when open class is applied */
    }

    #box-outer-element {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 300;
      background: #c5c5c583;
    }
  </style>

  <!-- Menu content goes here -->
  <div class="flex h-screen w-5/5 bg-gray-100">
    <!-- Side Menu -->
    <div class="flex flex-col w-4/6 bg-white border-r">
      <!-- Logo -->
      <div class="flex items-center justify-center h-16 border-b">
        <img
          class="border-0 w-8 h-8 outline-offset-2 mr-2"
          alt="App Logo"
          src="${appLogo}"
          height="32px"
          width="32px"
        />
        <span
          class="text-lg font-semibold p-1 text-slate-500 hover:text-slate-900 dark:hover:text-slate-400"
          >${appName}</span
        >
      </div>

      <!-- Menu Items -->
      <nav class="flex-grow w-fit">
        <ul class="py-4">
          <li class="py-2 hover:bg-gray-200">
            <a
              href="/"
              class="block text-sm text-left font-semibold px-6 p-1 text-slate-500 hover:text-slate-900 dark:hover:text-slate-400"
              >Home</a
            >
          </li>
          <li class="py-2 hover:bg-gray-200">
            <a
              href="/blog"
              class="block text-sm text-left font-semibold px-6 p-1 text-slate-500 hover:text-slate-900 dark:hover:text-slate-400"
              >Blog</a
            >
          </li>
          <li class="py-2 hover:bg-gray-200">
            <a
              href="/songs"
              class="block text-sm text-left font-semibold px-6 p-1 text-slate-500 hover:text-slate-900 dark:hover:text-slate-400"
              >Songs</a
            >
          </li>
          <li class="py-2 hover:bg-gray-200">
            <a
              href="/about"
              class="block text-sm text-left font-semibold px-6 p-1 text-slate-500 hover:text-slate-900 dark:hover:text-slate-400"
              >About</a
            >
          </li>
          <li class="py-2 hover:bg-gray-200">
            <a
              href="/contact"
              class="block text-sm text-left font-semibold px-6 p-1 text-slate-500 hover:text-slate-900 dark:hover:text-slate-400"
              >Contact</a
            >
          </li>
        </ul>
      </nav>

      <!-- Help Question Answer Message -->
      <hqa-message
        help_link="https://pool.com/help"
        question="How to close open side menu?"
        message="Hide/close menu"
      ></hqa-message>
    </div>

    <!-- Main Content -->
    <div class="flex flex-col flex-grow w-2/6 bg-gray-100">
      <!-- Content goes here -->
      <div class="">
        <ul>
          <li class="m-2">
            <a
              href="/"
              aria-label="Go to home page"
              class="p-1 text-slate-500 hover:text-slate-900 dark:hover:text-slate-400"
              >Home
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
`;
