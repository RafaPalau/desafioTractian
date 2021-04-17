import React from "react";
import * as S from "./styles";

import {
  AiOutlineLineChart,
  AiOutlineUsergroupDelete,
} from "react-icons/ai";
import { MdExitToApp } from "react-icons/md";
import { SiUnity } from "react-icons/si";
import { RiCommunityLine } from "react-icons/ri";

import logo from "../../assets/logo.jpg";

import {useAuth} from '../../hooks/auth'

const Aside: React.FC = () => {
  const { signOut} = useAuth();
  return (
    <S.Container>
      <S.Header>
        <S.LogoImg src={logo} alt="Logo Tractian" />
      </S.Header>

      <S.MenuContainer>
        <S.MenuItemLink href="/">
          <AiOutlineLineChart />
          Ativos
        </S.MenuItemLink>
           <S.MenuItemLink href="units">
          <SiUnity /> Unidades
        </S.MenuItemLink>
        <S.MenuItemLink href="empresas">
          <RiCommunityLine />
          Empresas
        </S.MenuItemLink>
        <S.MenuItemLink href="users">
          <AiOutlineUsergroupDelete /> Usuários
        </S.MenuItemLink>
        <S.MenuItemButton onClick={signOut}>
          <MdExitToApp />
          Sair
        </S.MenuItemButton>
      </S.MenuContainer>
    </S.Container>
  );
};
export default Aside;
