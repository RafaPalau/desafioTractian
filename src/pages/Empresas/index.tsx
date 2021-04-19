import React, { useState, useEffect } from "react";
import { Spin, Table } from "antd";
import { EditTwoTone, CloseOutlined } from "@ant-design/icons";
import api from "../../services/api";
import ContentHeader from "../../components/ContentHeader";
import { ICompaniesProps } from "../../models/interface";

import * as S from "./styles";

const Companys: React.FC = (props) => {
  const [data, setData] = useState<ICompaniesProps[]>([]);

  useEffect(() => {
    api.get("/companies/").then((response) => {
      setData(response.data);
    });
  }, []);

  const columns = [
    { title: "Nome", dataIndex: "name", key: "name" },
    { title: "Id", dataIndex: "id", key: "id" },

    {
      title: "Editar",
      render: () => <EditTwoTone />,
    },
    {
      title: "Deletar",
      render: () => <CloseOutlined />,
    },
  ];

  return (
    <S.Container>
      <ContentHeader title="Empresas" lineColor="#48d648">
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
export default Companys;
