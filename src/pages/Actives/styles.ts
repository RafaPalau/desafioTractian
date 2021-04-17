import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;

justify-content: center;

@media (max-width: 1200px)
{
  flex-direction: column;
}
 ul {
  list-style: none;
}
`;

export const ContainerInformations = styled.section`
width: 100%;


`;
