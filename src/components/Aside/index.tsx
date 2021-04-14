import React from "react";
import * as S from "./styles";

import {
  AiOutlineLineChart,
  AiFillApi,
  AiOutlineUsergroupDelete,
} from "react-icons/ai";
import { MdExitToApp } from "react-icons/md";
import { SiUnity } from "react-icons/si";
import { RiCommunityLine } from "react-icons/ri";

import logo from "../../assets/logo.jpg";

const Aside: React.FC = () => {
  return (
    <S.Container>
      <S.Header>
        <S.LogoImg src={logo} alt="Logo Tractian" />
      </S.Header>

      <S.MenuContainer>
        <S.MenuItemLink href="#">
          <AiOutlineLineChart />
          Dashboard
        </S.MenuItemLink>
        <S.MenuItemLink href="#">
          <AiFillApi />
          Ativos
        </S.MenuItemLink>
        <S.MenuItemLink href="#">
          <SiUnity /> Unidades
        </S.MenuItemLink>
        <S.MenuItemLink href="#">
          <RiCommunityLine />
          Empresas
        </S.MenuItemLink>
        <S.MenuItemLink href="#">
          <AiOutlineUsergroupDelete /> Usuários
        </S.MenuItemLink>
        <S.MenuItemLink href="#">
          <MdExitToApp />
          Sair
        </S.MenuItemLink>
      </S.MenuContainer>
    </S.Container>
  );
};
export default Aside;
