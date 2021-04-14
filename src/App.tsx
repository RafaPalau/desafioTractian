import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/Globalstyles";
import Layout from "./components/Layout";

import dark from "./styles/themes/dark";
import Dashboard from "./pages/Dashboard";
import Ativos from "./pages/Ativos";


const App: React.FC = () => {
  return (



    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout >
        {/* <Dashboard /> */}
        <Ativos />
      </Layout>
  
    </ThemeProvider>
  
  );
};
export default App;
