import styled, { css } from "styled-components";
interface IContainerProps {
  menuIsOpen: boolean;
}
interface IThemeToggleFooterProps {
  menuIsOpen: boolean;
}
export const Container = styled.div<IContainerProps>`
  grid-area: AS;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
  padding: 20px;
  border-right: 1px solid ${(props) => props.theme.colors.gray};
  position: relative;

  @media (max-width: 600px) {
    padding-left: 7px;
    position: fixed;
    z-index: 2;
    width: 200px;

    height: ${(props) => (props.menuIsOpen ? "100vh" : "70px")};
    overflow: hidden;

    ${(props) =>
      !props.menuIsOpen &&
      css`
        border: none;
        border-bottom: 1px solid ${(props) => props.theme.colors.gray};
      `};
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 40px;
`;

export const LogoImg = styled.img`
  width: 100%;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const MenuContainer = styled.nav`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`;
export const MenuItemLink = styled.a`
  color: ${(props) => props.theme.colors.info};
  text-decoration: none;
  transition: opacity 0.3s;
  margin: 7px 0;
  display: flex;
  align-items: center;
  &:hover {
    opacity: 0.5;
  }

  > svg {
    font-size: 20px;
    margin-right: 7px;
  }
`;

export const MenuItemButton = styled.button`
  font-size: 16px;
  color: ${(props) => props.theme.colors.info};
  border: none;
  background: none;
  transition: opacity 0.3s;
  margin: 7px 0;
  display: flex;
  align-items: center;
  &:hover {
    opacity: 0.5;
  }

  > svg {
    font-size: 20px;
    margin-right: 7px;
  }
`;

export const ToggleMenu = styled.button`
  display: none;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  font-size: 22px;
  background-color: ${(props) => props.theme.colors.warning};
  color: ${(props) => props.theme.colors.white};

  transition: opacity 0.3s;
  justify-content: center;
  align-items: center;
  &:hover {
    opacity: 0.7;
  }
  @media (max-width: 600px) {
    display: flex;
  }
`;
export const ThemeToggleFooter = styled.footer<IThemeToggleFooterProps>`
  display: none;
  position: absolute;
  bottom: 30px;
  @media (max-width: 470px) {
    display: ${(props) => (props.menuIsOpen ? "flex" : "none")};
  }
`;
