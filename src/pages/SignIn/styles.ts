import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const Logo = styled.img`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  border-radius: 5px;
`;

export const Form = styled.form`
width: 300px;
height: 300px;
padding: 30px;
border-radius: 10px;
background-color: ${(props) => props.theme.colors.tertiary};
`;

export const FormTitle = styled.h1`
  color: ${(props) => props.theme.colors.white};
  content: "";
  display: block;
  width: 55px;
  margin-bottom: 20px;
  border-bottom: 10px solid ${(props) => props.theme.colors.sucess};
`;
