import React from "react";
import * as S from "./styles";

interface IImageActiveProps {
  src: string;
  alt: string;
}

const ImageActive: React.FC<IImageActiveProps> = ({ src, alt }) => {
  return (
    <S.Container>
      <S.Image src={src} alt={alt} />
    </S.Container>
  );
};
export default ImageActive;
