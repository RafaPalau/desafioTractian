import React, { useState, useEffect } from "react";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import axios, { AxiosResponse } from "axios";
import * as S from "./styles";

interface IUsersProps {
  id: number;
  email: string;
  name: string;
  unitId: number;
  companyId: number;
}

const Users: React.FC = () => {
  const [data, setData] = useState<IUsersProps>();

  useEffect(() => {
    // Use [] as second argument in useEffect for not rendering each time
    axios
      .get("https://my-json-server.typicode.com/tractian/fake-api/users")
      .then((response: AxiosResponse) => {
        setData(response.data);
      });
  }, []);
  const options = [
    {
      value:  "Testador Um",
      label: "Testador Um",
    },
    {
      value: "Testador Dois",
      label: "Testador Dois",
    },
    {
      value: "Testador Três",
      label: "Testador Três",
    },
    {
      value:  "Testador Quarto",
      label: "Testador Quarto",
    },
    {
      value: "Testador Cinco",
      label: "Testador Cinco",
    },
    {
      value:"Testador Seis",
      label: "Testador Seis",
    },
  ];
  return (
    <S.Container>
      <ContentHeader title="Usuários" lineColor="#f74747">
        <SelectInput options={options} />
      </ContentHeader>



      {console.log(data)}
    </S.Container>
  );
};
export default Users;
