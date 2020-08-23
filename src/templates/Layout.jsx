import React from "react";
import { ThemeProvider, createMuiTheme, CssBaseline } from "@material-ui/core";
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  palette: {
    // type: 'dark', // ダークテーマ
    primary: {
      light: blue["400"],
      main: blue["500"],
      dark: blue["600"]
    },
    // primary: red,
  },
  typography: {
    fontFamily: [
      'Noto Sans',
      'Roboto',
      'sans-serif',
      'Noto Sans JP',
    ].join(','),
    button: {
      textTransform: "none"
    },
    fontSize: 12,
    h1: {
      fontSize: "1.75rem"
    },
    h2: {
      fontSize: "1.5rem"
    },
    h3: {
      fontSize: "1.25rem"
    },
    h4: {
      fontSize: "1.125rem"
    },
    h5: {
      fontSize: "1rem"
    },
    h6: {
      fontSize: "1rem"
    },
  },
  mixins: {
    toolbar: {
      minHeight: 42
    }
  },
  props: {
    MuiTable: {
      size: "small"
    }
  },
});

export default function Layout (props) {
  return(
  <ThemeProvider theme={theme}>
    <CssBaseline/>
    {props.children}
  </ThemeProvider>
  )
}