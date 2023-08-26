# litPress Routing System Documentation

## Overview

The routing system in litPress is responsible for handling URL navigation and rendering different pages based on the URL path. It utilizes the page library for routing and a custom Renderer class to manage page rendering.

## Router Setup

The router is implemented in the `router.js` module. It initializes the Renderer class, sets up routes, and handles URL changes.

### Class: Router

#### Constructor

- Initializes the Renderer class to manage page rendering.
- Initializes an empty array `listeners` to store navigation callbacks.
- Sets up default values for the home page name and element.

#### Method: `onNavigate(callback)`

Adds a navigation callback to the `listeners` array.

#### Method: `initializeRoutes()`

- Sets up route handlers using the page library.
- Handles routes for the home page, songs list page, and full content pages.
- Redirects to clean slugs for full content pages.

#### Method: `renderHomePage()`

Renders the home page using the Renderer class.

#### Method: `start()`

- Listens for the `popstate` event to handle back/forward navigation.
- Initializes the page library and starts the router.

## Renderer Class

The Renderer class, defined in the `renderer.js` module, handles rendering pages and updating the URL based on the current route.

### Class: Renderer

#### Constructor

- Initializes the `appElement` to the main container element.
- Initializes the `MetaManager` class for managing metadata.
- Sets default values for `path`, `homePageName`, and `homePageElement`.

#### Method: `renderPage(pageConfig)`

- Renders a page based on the provided `pageConfig` object.
- Updates breadcrumbs, URL, and metadata.
- Uses Lit-HTML to render the page content.

#### Method: `renderHomePage()`

Renders the home page using default values.

#### Method: `renderSongsListPage()`

Renders the songs list page using the `listCollectionPage` element.

#### Method: `renderFullContentPage(slug)`

Renders the full content page based on the provided `slug`.

## Usage

- The router is instantiated in the `router.js` module.
- Route handlers are defined for different paths using the `initializeRoutes` method.
- When a route is accessed, the appropriate rendering method in the Renderer class is called.
- The Renderer class renders the page content, updates metadata, and handles URL changes.
