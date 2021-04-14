import React from "react";
import Aside from "../Aside";
import Content from "../Content";
import MainHeader from "../MainHeader";
import * as S from "./styles";

const Layout: React.FC = ({children}) => {
  return (
    <S.Grid>
      <MainHeader />
      <Aside />
      <Content >{children}</Content>
    </S.Grid>
  );
};
export default Layout;
