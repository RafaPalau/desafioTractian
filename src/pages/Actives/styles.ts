import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
  ul {
    list-style: none;
  }
  h2{
    color: ${props => props.theme.colors.white}
  }
`;

export const ContainerInformations = styled.section`
  width: 100%;
`;

export const ContainerMetricas = styled.section`
display: flex;
justify-content: space-around;

@media(max-width: 1200px){
  flex-direction: column;
}
`;


export const ContainerCondition = styled.div`
display: flex;
flex-wrap: wrap;
`;


export const Title = styled.div`

`;
export const TextStatus = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
max-width: 300px;
border: 1px solid ${props => props.theme.colors.gray};
border-radius: 5px;
padding: 15px;
margin: 5px;
font-size: 18px;
`;

export const ContainerImageEquip = styled.div`
width: 300px;
height: 400px;

@media(max-width: 500px){
  width: 200px;
  height: 280px;
}
`;



