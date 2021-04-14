import React from "react";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

import * as S from "./styles";

const Companys: React.FC = () => {
  const options = [
    {
      value: "Empresa",
      label: "Empresa Teste"
    },
   
  ];
  return (
    <S.Container>

<ContentHeader title="Empresas" lineColor="#48d648">
        <SelectInput options={options} />
      </ContentHeader>
    </S.Container>
   
  )
}
export default Companys