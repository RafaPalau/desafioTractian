import React, { useState, useEffect } from "react";
import ContentHeader from "../../components/ContentHeader";
import axios, { AxiosResponse } from "axios";
import * as S from "./styles";

import "antd/dist/antd.css";
import { AiFillCloseCircle, AiFillEdit } from "react-icons/ai";

import { Table, Spin } from "antd";
import {EditTwoTone, CloseOutlined } from '@ant-design/icons';


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
    axios
      .get("https://my-json-server.typicode.com/tractian/fake-api/users/")
      .then((response: AxiosResponse) => {
        setData(response.data);
      });
  }, []);

  // const columns = [
  //   {
  //     title: 'Nome',
  //     dataIndex: 'name',
  //     key: 'name',
  //   },
  //   {
  //     title: 'Email',
  //     dataIndex: 'email',
  //     key: 'email',
  //   },
  //   {
  //     title: 'companyId',
  //     dataIndex: 'companyId',
  //     key: 'companyId',
  //   },
  // ];

  const columns = [
    { title: "Nome", dataIndex: "name", key: "name" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Empresa", dataIndex: "companyId", key: "companyId" },
    {
      title: "Editar",
      dataIndex: "",
      key: "x",
      render: () => (
        <EditTwoTone  />
      ),
    },
    {
      title: "Deletar",
      dataIndex: "",
      key: "x",
      render: () => (
        <CloseOutlined />
      ),
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
       
        <Table
          columns={columns}
          expandable={{
            rowExpandable: (record) => record.name !== "Not Expandable",
          }}
          dataSource={data}
        />


      )}
    </S.Container>
  );
};
export default Users;
