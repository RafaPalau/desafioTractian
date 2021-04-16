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
  const [userSelected, setUserSelected] = useState<string>("1");

  useEffect(() => {
    const url = "https://my-json-server.typicode.com/tractian/fake-api/users/";
    axios.get(`${url}${userSelected}`).then((response: AxiosResponse) => {
      setData(response.data);
    });
  }, [userSelected]);
  const options = [
    { value: "1", label: "Testador Um" },
    { value: "2", label: "Testador Dois" },
    { value: "3", label: "Testador Três" },
    { value: "4", label: "Testador Quarto" },
    { value: "5", label: "Testador Cinco" },
    { value: "6", label: "Testador Seis" },
  ];
  return (
    <S.Container>
      <ContentHeader title="Usuários" lineColor="#f74747">
        <SelectInput
          options={options}
          onChange={(event) => setUserSelected(event.target.value)}
        />
      </ContentHeader>
      {!data ? (
        <div>Carregando...</div>
      ) : (
        <div>
          {console.log(data)}
          {[data].map((item) => (
            <>
              <p>Nome: {item?.name}</p>
              <p>Email: {item?.email}</p>
              {item?.companyId === 1 ? <p>Empresa Teste</p> : <h1>teste</h1>}
            </>
          ))}{" "}
        </div>
      )}
    </S.Container>
  );
};
export default Users;
