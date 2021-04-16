import React from "react";
import * as S from "./styles";

interface IMetricsInformationsProps {
  title: string;
  subtitle: string | number
}

const MetricsInformations: React.FC<IMetricsInformationsProps> = ({ title, subtitle }) => {
  return (
    <S.Container>
     <p>{title}</p>
     <span>{subtitle}</span>
    </S.Container>
  );
};
export default MetricsInformations;
