import React from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "../components/Layout";
import Actives from "../pages/Actives";
import Units from "../pages/Units";
import Empresas from "../pages/Empresas";
import Users from "../pages/Users";

const AppRoutes: React.FC = () => (
  <Layout>
    <Switch>
      <Route path="/actives" exact component={Actives} />
      <Route path="/units" exact component={Units} />
      <Route path="/empresas" exact component={Empresas} />
      <Route path="/users" exact component={Users} />
    </Switch>
  </Layout>
);
export default AppRoutes;
