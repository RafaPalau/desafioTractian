import React from "react";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

import * as S from "./styles";

const Units: React.FC = () => {
  const options = [
    {
      value: "Unidade",
      label: "Unidade Jaguar",
    },
    {
      value: "Unidade",
      label: "Unidade Tobias",
    },
   
  ];
  return (
    <S.Container>

<ContentHeader title="Unidades" lineColor="#f3c52e">
        <SelectInput options={options} />
      </ContentHeader>
    </S.Container>
   
  )
}
export default Units