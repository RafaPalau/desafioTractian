import React, { useState, useEffect } from "react";
import { Spin, Table } from "antd";
import { EditTwoTone, CloseOutlined } from "@ant-design/icons";
import ContentHeader from "../../components/ContentHeader";
import { IUnitsProps } from "../../models/interface";
import api from "../../services/api";
import * as S from "./styles";

const Units: React.FC = (props) => {
  const [data, setData] = useState<IUnitsProps[]>([]);

  useEffect(() => {
    api.get("/units/").then((response) => {
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
      <ContentHeader title="Unidades" lineColor="#f3c52e">
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
export default Units;
