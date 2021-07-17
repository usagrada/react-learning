import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import { VFC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const theme = { colors: { primary: { main: purple[50] } } };

const CustomThemeProvider: VFC<Props> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
