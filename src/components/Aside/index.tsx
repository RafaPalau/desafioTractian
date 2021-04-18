import React, { useState } from "react";
import * as S from "./styles";

import { AiOutlineLineChart, AiOutlineUsergroupDelete } from "react-icons/ai";
import { MdExitToApp, MdClose, MdMenu } from "react-icons/md";
import { SiUnity } from "react-icons/si";
import { RiCommunityLine } from "react-icons/ri";

import logo from "../../assets/logo.jpg";
import Toggle from "../Toggle";

import { useAuth } from "../../hooks/auth";
import { useTheme } from "../../hooks/themes";

const Aside: React.FC = () => {
  const { signOut } = useAuth();
  const { toggleTheme, theme } = useTheme();

  const [toggleMenuIsOpened, setToggleMenuIsOpened] = useState(false);
  const [darkTheme, setDarkTheme] = useState(() =>
    theme.title === "dark" ? true : false
  );

  const handleToggleMenu = () => {
    setToggleMenuIsOpened(!toggleMenuIsOpened);
  };
  const handlechangeTheme = () => {
    setDarkTheme(!darkTheme);
    toggleTheme();
  };
  return (
    <S.Container menuIsOpen={toggleMenuIsOpened}>
      <S.Header>
        <S.ToggleMenu onClick={handleToggleMenu}>
          {toggleMenuIsOpened ? <MdClose /> : <MdMenu />}
        </S.ToggleMenu>

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
      <S.ThemeToggleFooter menuIsOpen={toggleMenuIsOpened}>
        <Toggle
          checked={darkTheme}
          labelLeft="Light"
          labelRight="Right"
          onChange={handlechangeTheme}
        />
      </S.ThemeToggleFooter>
    </S.Container>
  );
};
export default Aside;
