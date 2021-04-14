import React from "react";

import * as S from "./styles";

interface IToggleProps {
  labelLeft: string;
  labelRight: string;
  checked: boolean;
  onChange(): void;
}

const Toggle: React.FC<IToggleProps> = ({labelLeft, labelRight, checked, onChange}) => (
  <S.Container>
    <S.ToggleLabel>{labelLeft}</S.ToggleLabel>
    <S.ToggleSelector
      checked={checked}
      uncheckedIcon={false}
      checkedIcon={false}
      onChange={onChange}
    />
    <S.ToggleLabel>{labelRight}</S.ToggleLabel>
  </S.Container>
);
export default Toggle;
