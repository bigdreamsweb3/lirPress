// path: ./src/layout/theme/theme.js
const themes = {
  light: {
    background: "#ffffff",
    textColor: "#000000",
  },
  dark: {
    background: "#000000",
    textColor: "#ffffff",
  },
  // Add more theme variations if needed
};

export const getThemeStyles = (theme) => {
  const selectedTheme = themes[theme] || themes.light; // Default to light theme
  return {
    background: selectedTheme.background,
    textColor: selectedTheme.textColor,
  };
};
