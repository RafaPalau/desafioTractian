import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/Globalstyles";

import { useTheme } from "./hooks/themes";

import Routes from "./routes";

const App: React.FC = () => {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
};
export default App;
