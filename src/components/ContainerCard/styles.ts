import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
max-width: 300px;
line-height: 2;
background-color: ${props => props.theme.colors.tertiary};
box-shadow: 2px 0px 10px 0px rgba(0,0,0, .5);
padding: 25px;
border-radius: 10px;
margin: 10px;
`;

export const Title = styled.h3`
text-align: center;
`;

