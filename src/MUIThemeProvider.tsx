import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import { PaletteOptions, BreakpointsOptions } from "@mui/material";

const typography: TypographyOptions = {
  fontFamily: ["Spoqa Han Sans Neo", "sans-serif", "-apple-system", "Roboto"].join(","),
  fontSize: 12,

  h1: {
    fontSize: 30,
    fontWeight: "bold",
    letterSpacing: "2px",
  },
  h2: {
    fontSize: 25,
  },
  h3: {},
  body1: {
    letterSpacing: "2px",
  },
  button: {},
};

const palette: PaletteOptions = {
  primary: {
    main: "#D9D9D9",
  },
};

const breakpoints: BreakpointsOptions = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
};

let theme = createTheme({ typography, palette, breakpoints });
theme = responsiveFontSizes(theme);

const MUIThemeProvider = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default MUIThemeProvider;
