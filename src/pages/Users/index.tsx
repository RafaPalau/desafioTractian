import React from "react";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

import * as S from "./styles";

const Users: React.FC = () => {
  const options = [
    {
      value: "user",
      label: "Testador Um",
    },
    {
      value: "user",
      label: "Testador Dois",
    },
    {
      value: "user",
      label: "Testador Três",
    },
    {
      value: "user",
      label: "Testador Quarto",
    },
    {
      value: "user",
      label: "Testador Cinco",
    },
    {
      value: "user",
      label: "Testador Seis",
    },
  ];
  return (
    <S.Container>

<ContentHeader title="Usuários" lineColor="#f74747">
        <SelectInput options={options} />
      </ContentHeader>
    </S.Container>
   
  )
}
export default Users