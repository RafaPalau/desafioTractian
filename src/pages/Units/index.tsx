import React, { useState, useEffect } from "react";
import ContentHeader from "../../components/ContentHeader";
import axios, { AxiosResponse } from "axios";

import * as S from "./styles";
import { Spin } from "antd";
interface IUnitsProps {
  id: number;
  name: string;
  companyId: number;
}

const Units: React.FC = (props) => {
  const [data, setData] = useState<IUnitsProps[]>([]);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/tractian/fake-api/units/")
      .then((response: AxiosResponse) => {
        setData(response.data);
      });
  }, []);

  return (
    <S.Container>
      <ContentHeader title="Unidades" lineColor="#f3c52e">
       <span></span>
      </ContentHeader>
      {!data ? (
         <Spin tip="Carregando..." />
      ) : (
        <S.ContainerCardsUnits>
          {data.map((item) => (
            <S.CardUnit key={item.id}>{item?.name}</S.CardUnit>
          ))}
        </S.ContainerCardsUnits>
      )}
    </S.Container>
  );
};
export default Units;
