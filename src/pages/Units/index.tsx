import React from "react";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

import * as S from "./styles";

const Units: React.FC = () => {
  const options = [
    {
      value: "Motor 1",
      label: "Motor 1",
    },
    {
      value: "Motor 2",
      label: "Motor 2",
    },
    {
      value: "ventoinha 1",
      label: "ventoinha 1",
    },
  ];
  return (
    <S.Container>

<ContentHeader title="Units" lineColor="#72B3F2">
        <SelectInput options={options} />
      </ContentHeader>
    </S.Container>
   
  )
}
export default Units