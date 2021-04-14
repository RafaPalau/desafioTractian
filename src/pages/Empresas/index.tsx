import React, { useState, useEffect } from "react";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

import axios, { AxiosResponse } from "axios";

import * as S from "./styles";

interface ICompaniesProps {
  id: number;
  name: string;
}

const Companys: React.FC = () => {
  const [data, setData] = useState<ICompaniesProps>();

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/tractian/fake-api/companies")
      .then((response: AxiosResponse) => {
        setData(response.data);
      });
  }, []);

  const options = [
    {
      value: "Empresa",
      label: "Empresa Teste",
    },
  ];
  return (
    <S.Container>
      <ContentHeader title="Empresas" lineColor="#48d648">
        <SelectInput options={options} />
      </ContentHeader>

      {console.log(data)}
    </S.Container>
  );
};
export default Companys;
