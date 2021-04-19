import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import "antd/dist/antd.css";
import { Table, Spin } from "antd";
import { EditTwoTone, CloseOutlined } from "@ant-design/icons";
import ContentHeader from "../../components/ContentHeader";
import { IUsersProps } from "../../models/interface";
import * as S from "./styles";

const Users: React.FC = () => {
  const [data, setData] = useState<IUsersProps[]>([]);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/tractian/fake-api/users/")
      .then((response: AxiosResponse) => {
        setData(response.data);
      });
  }, []);

  const columns = [
    { title: "Nome", dataIndex: "name", key: "name" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Empresa", dataIndex: "companyId", key: "companyId" },
    {
      title: "Editar",
      dataIndex: "",
      key: "x",
      render: () => <EditTwoTone />,
    },
    {
      title: "Deletar",
      dataIndex: "",
      key: "x",
      render: () => <CloseOutlined />,
    },
  ];
  return (
    <S.Container>
      <ContentHeader title="Usuários" lineColor="#f74747">
        <span></span>
      </ContentHeader>

      {!data ? (
        <Spin tip="Loading..." />
      ) : (
        <Table columns={columns} dataSource={data} />
      )}
    </S.Container>
  );
};
export default Users;
