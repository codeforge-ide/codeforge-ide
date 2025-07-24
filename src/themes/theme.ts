import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00ff88", // Bright green
      light: "#4dff99",
      dark: "#00cc6a",
    },
    secondary: {
      main: "#1a1a1a",
      light: "#2d2d2d",
      dark: "#0d0d0d",
    },
    background: {
      default: "#0a0a0a", // Deep black
      paper: "#111111", // Slightly lighter black
    },
    text: {
      primary: "#ffffff",
      secondary: "#b3b3b3",
    },
    success: {
      main: "#00ff88",
    },
    info: {
      main: "#00ffcc",
    },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Arial', sans-serif",
    fontWeightBold: 700,
    h1: {
      fontWeight: 800,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: "none",
          fontWeight: 600,
        },
        contained: {
          background: "linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)",
          "&:hover": {
            background: "linear-gradient(135deg, #4dff99 0%, #00ff88 100%)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          border: "1px solid rgba(0, 255, 136, 0.1)",
          background: "rgba(17, 17, 17, 0.8)",
          backdropFilter: "blur(10px)",
        },
      },
    },
  },
});

export default theme;
