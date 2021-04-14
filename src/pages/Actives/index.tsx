import React from "react";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

import * as S from "./styles";

const Actives: React.FC = () => {
  const options = [
    {
      value: "GSJ1535",
      label: "GSJ1535",
    },
    {
      value: "IBS1636",
      label: "IBS1636",
    },
    {
      value: "JVC1134",
      label: "JVC1134",
    },
    {
      value: "LZY5230",
      label: "LZY5230",
    },
    {
      value: "NBX2120",
      label: "NBX2120",
    },
    {
      value: "MOE1378",
      label: "MOE1378",
    },
    {
      value: "MYS2173",
      label: "MYS2173",
    },
    {
      value: "HPO6412",
      label: "HPO6412",
    },
    {
      value: "BMS9149",
      label: "BMS9149",
    },
    {
      value: "KBJ1010",
      label: "KBJ1010",
    },
  ];
  return (
    <S.Container>
      <ContentHeader title="Ativos" lineColor="#72B3F2">
        <SelectInput options={options} />
      </ContentHeader>
    </S.Container>
  );
};
export default Actives;
