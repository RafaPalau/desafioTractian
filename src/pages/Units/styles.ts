import styled from "styled-components";

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

`;
export const ContainerCardsUnits = styled.div`
display:flex;
flex-wrap: wrap;
`;

