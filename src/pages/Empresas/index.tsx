import React, { useState, useEffect } from "react";
import ContentHeader from "../../components/ContentHeader";
import axios, { AxiosResponse } from "axios";

import * as S from "./styles";
import Loading from "../../components/loading";

interface ICompaniesProps {
  id: number;
  name: string;
}

const Companys: React.FC = (props) => {
  const [data, setData] = useState<ICompaniesProps[]>([]);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/tractian/fake-api/companies/")
      .then((response: AxiosResponse) => {
        setData(response.data);
      });
  }, []);
  return (
    <S.Container>
      <ContentHeader title="Empresas" lineColor="#48d648">
        <span></span>
      </ContentHeader>

      {!data ? (
        <Loading />
      ) : (
        <div>
          {console.log(data)}
          {data.map((item) => (
            <S.CardCompanies>
              <p>Nome: {item?.name}</p>
              <p>Identificação: {item?.id}</p>
            </S.CardCompanies>
          ))}{" "}
        </div>
      )}
    </S.Container>
  );
};
export default Companys;
