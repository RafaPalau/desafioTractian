import React, { useState, useEffect } from "react";
import ContentHeader from "../../components/ContentHeader";
import axios, { AxiosResponse } from "axios";
import * as S from "./styles";
import Loading from "../../components/loading";

interface IUsersProps {
  id: number;
  email: string;
  name: string;
  unitId: number;
  companyId: number;
}

const Users: React.FC = () => {
  const [data, setData] = useState<IUsersProps[]>([]);

  useEffect(() => {
    axios.get("https://my-json-server.typicode.com/tractian/fake-api/users/").then((response: AxiosResponse) => {
      setData(response.data);
    });
  }, []);
  return (
    <S.Container>
      <ContentHeader title="Usuários" lineColor="#f74747">
      </ContentHeader>
      {!data ? (
        <Loading />
      ) : (
        <S.ContainerCardsUsers>
          {data.map((item) => (
            <S.CardUser>
              <p>Nome: {item?.name}</p>
              <p>Email: {item?.email}</p>
              {item?.companyId === 1 ? <p>Empresa Teste</p> : <h1>Empresa</h1>}
            </S.CardUser>
          ))}{" "}
        </S.ContainerCardsUsers>
      )}
    </S.Container>
  );
};
export default Users;
