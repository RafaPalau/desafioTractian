import styled from "styled-components";

export const Container = styled.div`
  grid-area: AS;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
  padding: 20px;
  border-right: 1px solid ${(props) => props.theme.colors.gray};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 40px;
`;

export const LogoImg = styled.img`
  width: 100%;
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
