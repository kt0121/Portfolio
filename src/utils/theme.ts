import { createTheme } from "@suid/material/styles";

export const lightTheme = createTheme({
  palette: {
    primary: {
      light: "#ffffff",
      main: "#fafafa",
      dark: "#c7c7c7",
      contrastText: "#000",
    },
    background: {
      default: "#fafafa",
    },
    text: { primary: "#000", secondary: "rgba(0,0,0,0.7)" },
    divider: "rgba(0,0,0,0.12)",
  },
});

export const darkTheme = createTheme({
  palette: {
    primary: {
      light: "#484848",
      main: "#212121",
      dark: "#000000",
      contrastText: "#fff",
    },
    background: {
      default: "#212121",
    },
    text: { primary: "#fff", secondary: "rgba(255,255,255,0.7)" },
    divider: "rgba(255,255,255,0.12)",
  },
});

export const iconSize = "32px";
