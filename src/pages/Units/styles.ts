import styled, { keyframes} from "styled-components";

const animate = keyframes`
0% {
transform: translateX(100px);
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

`;
export const CardUnit = styled.div`
width: 300px;
height: 100px;
margin: 5px 7px;
text-align: center;
padding: 15px;
border-radius: 10px;
background-color: ${props => props.theme.colors.tertiary};
animation: ${animate} 0.7s ease;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
    transform: translateX(10px);
  }

`;
export const ContainerCardsUnits = styled.div`
display:flex;
flex-wrap: wrap;
`;

