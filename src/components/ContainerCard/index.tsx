import React from "react";
import * as S from "./styles";

interface IContainerCardProps{
  title: string;
  children: React.ReactNode;
}


const ContainerCard: React.FC<IContainerCardProps> = ({title, children}  ) => {
  return (
    <S.Container>
     <S.Title>{title}</S.Title> 
    {children}
    </S.Container>
  );
};
export default ContainerCard;
