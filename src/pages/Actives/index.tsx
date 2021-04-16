import React, { useState, useEffect } from "react";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import axios, { AxiosResponse } from "axios";
import * as S from "./styles";
import Loading from "../../components/loading";

interface IActivesProps {
  id: number;
  sensors: Array<string>;
  model: string;
  status: string;
  healthscore: number;
  name: string;
  image: string;
  metrics: {
    totalCollectsUptime: number;
    totalUptime: number;
    lastUptimeAt: string;
  };
  specifications: {
    maxTemp: number;
    rpm: number | null;
    power: number;
  };
  unitId: number;
  companyId: number;
}

const Actives: React.FC = (props) => {
  const [data, setData] = useState<IActivesProps>();
  const [sensorSelected, setSensorSelected] = useState<string>("1");

  const sensors = [
    { value: "1", label: "GSJ1535" },
    { value: "2", label: "IBS1636" },
    { value: "3", label: "JVC1134" },
    { value: "4", label: "LZY5230" },
    { value: "5", label: "NBX2120" },
    { value: "6", label: "MOE1378" },
    { value: "7", label: "MYS2173" },
    { value: "8", label: "HPO6412" },
    { value: "9", label: "BMS9149" },
    { value: "10", label: "KBJ1010" },
  ];

  useEffect(() => {
    axios
      .get(
        `https://my-json-server.typicode.com/tractian/fake-api/assets/${sensorSelected}`
      )
      .then((response: AxiosResponse) => {
        setData(response.data);
      });
  }, [sensorSelected]);

  return (
    <S.Container>
      <ContentHeader title="Ativos" lineColor="#72B3F2">
        <SelectInput
          options={sensors}
          onChange={(event) => setSensorSelected(event.target.value)}
          // defaultValue={sensorSelected}
        />
      </ContentHeader>
      {!data ? (
        <Loading key={props} />
      ) : (
        <ul>
          {[data].map((item) => (
            <li key={item.id}>
              <h1>{item?.name}</h1>
              <p>Id companhia: {item?.companyId}</p>
              <p> Saúde em %: {item?.healthscore}</p>
              <p>Data da Ultima Coleta Uptime {item.metrics.lastUptimeAt}</p>
              <p>Total de Coletas: {item.metrics.totalCollectsUptime}</p>
              <p>Total de Horas de Coletas: {item.metrics.totalUptime.toFixed(2)}</p>
              <p>modelo: {item?.model}</p>
              <p>Nome Sensor: {item?.sensors}</p>
              <p>maxTemp: {item?.specifications.maxTemp}</p>
              <p>Power: {item?.specifications.power}</p>
              <p>RPM: {item?.specifications.rpm}</p>
              <p> Estado atual: {item?.status}</p>
              <p>Unidade: {item?.unitId}</p>
              <img
                style={{ width: "300px" }}
                src={item?.image}
                alt={`Imagem da ${item.image}`}
              />
            </li>
          ))}{" "}
        </ul>
      )}

    </S.Container>
  );
};
export default Actives;
