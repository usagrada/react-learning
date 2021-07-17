import "@emotion/react";
import "@material-ui/core/styles/createTheme";
import { Colors } from "@material-ui/core/styles/createTheme";
import { MyTheme, MyThemeOptions } from "./theme";

declare module "@emotion/react" {
  interface Theme extends MyTheme {}
}

declare module "@material-ui/core/styles/createTheme" {
  interface Theme extends MyTheme {}

  // allow configuration using `createTheme`
  interface ThemeOptions extends MyThemeOptions {}
}
