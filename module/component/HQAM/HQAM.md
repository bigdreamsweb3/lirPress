## HQAMessage Component {Help Question and Answer Message}

The `HQAMessage` component provides a user interface for displaying a help question and answer message with a clickable question icon. The answer message includes a link that can be opened in a new tab to provide further help or resources.

### Properties

| Property  | Type   | Description                                              |
| --------- | ------ | -------------------------------------------------------- |
| help_link | String | The URL of the help resource (e.g., a support page).     |
| question  | String | The question to display as a clickable icon.             |
| answer    | String | The HTML-formatted answer message with a clickable link. |
| message   | String | The additional message displayed next to the icon.       |

### Styles

The component uses CSS to define its layout and appearance. The following styles are applied:

```css
:host {
  /* Styles for the component container */
  height: 32px;
  width: 100%;
  margin: 0;
  padding: 0rem;
  text-align: center;
  z-index: 0;
}

.h-box {
  /* Styles for the parent container of the question and answer message */
  position: relative;
  top: 0;
  max-width: 198px;
  max-height: 32px;
  z-index: 0;
}

.a-message {
  /* Styles for the answer message */
  color: #666;
  border-radius: 2px;
  padding: 0.5em;
  display: flex;
  align-items: center;
  white-space: nowrap;
}

.q-icon {
  /* Styles for the question icon */
  color: #666;
  padding: 0.5em;
  cursor: pointer;
  align-items: center;
}

.q-box {
  /* Styles for the question box */
  position: absolute;
  left: 100%;
  top: auto;
  transform: translate(-0.01em, -45px);
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 8px;
  min-width: 100%;
  max-width: 300px;
  text-align: center;
  font-size: 12px;
  line-height: 1.4;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease-in-out;
  z-index: 9999;
}

.q-icon:hover + .q-box,
.q-box:hover {
  /* Show the question box when the parent (.h-box) element is hovered */
  opacity: 1;
  pointer-events: auto;
}
```

### Example Usage

To use the `HQAMessage` component, include the `hqa-message` element in your HTML code with the desired properties:

```html
<hqa-message
  help_link="https://example.com/help"
  question="How to close/hide open side menu?"
  message="Close/Hide side menu"
></hqa-message>
```

This will display a help question and answer message in your application. The answer message includes a link, and when clicked, it will open the provided `help_link` URL in a new tab.

Ensure that you have the necessary CSS styles and required dependencies (such as `LitElement`, `html`, and `css` from Lit) included in your project for the `HQAMessage` component to work correctly.

That's it! You can now use the `HQAMessage` component to provide helpful question and answer messages with clickable links in your application.
