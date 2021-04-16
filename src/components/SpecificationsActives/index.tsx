import React from "react";
import * as S from "./styles";

interface ISpecificationsActivesProps {
  title: string;
  subtitle: string | number | null
}

const SpecificationsActives: React.FC<ISpecificationsActivesProps> = ({ title, subtitle }) => {
  return (
    <S.Container>
     <p>{title}</p>
     <span>{subtitle}</span>
    </S.Container>
  );
};
export default SpecificationsActives;
