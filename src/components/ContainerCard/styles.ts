import styled, { keyframes } from "styled-components";

const animate = keyframes`
0% {
transform: translateX(-100px);
opacity: 0;
}
50%{
  opacity: .3;
}
100%{
  transform: translateX(-0px);
opacity: 1;
}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.tertiary};
   box-shadow: 2px 0px 10px 0px rgba(0, 0, 0, 0.5);
  padding: 25px;
  border-radius: 10px;
  margin: 10px;

  animation: ${animate} 0.7s ease;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
    transform: translateX(10px);
  }
`;

export const Title = styled.h3`
  /* text-align: center; */
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.white};
`;
