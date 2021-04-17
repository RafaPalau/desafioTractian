import React, { InputHTMLAttributes } from "react";
import * as S from "./styles";

// Input extends all atributs input html
type IInputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<IInputProps> = ({ ...rest }) => {
  return <S.Container {...rest} />;
};
export default Input;
