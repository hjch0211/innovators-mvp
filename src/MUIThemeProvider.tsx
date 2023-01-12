import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";

// [Todo] 너무 많아지면 객체를 나눠서 관리
let theme = createTheme({
  typography: {
    fontFamily: ["Spoqa Han Sans Neo", "sans-serif", "-apple-system", "Roboto"].join(","),
    fontSize: 12,

    h1: {
      fontSize: 30,
    },
    h2: {
      fontSize: 25,
    },
    h3: {},
    body1: {
      letterSpacing: "2px",
    },
    button: {},
  },
  palette: {
    primary: {
      main: "#D9D9D9",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

theme = responsiveFontSizes(theme);
