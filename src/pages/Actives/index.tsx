import React, { useState, useEffect } from "react";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import axios, { AxiosResponse } from "axios";
import * as S from "./styles";
import Loading from "../../components/loading";
import ImageActive from "../../components/ImageActive";
import MetricsInformations from "../../components/MetricsInformations";
import SpecificationsActives from "../../components/SpecificationsActives";
import ContainerCard from "../../components/ContainerCard";

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
    <>
      <ContentHeader title="Ativos" lineColor="#72B3F2">
        <SelectInput
          options={sensors}
          onChange={(event) => setSensorSelected(event.target.value)}
        />
      </ContentHeader>

      <S.Container>
        <S.ContainerInformations>
          {!data ? (
            <Loading key={props} />
          ) : (
            <ul>
              {[data].map((item) => (
                <li key={item.id}>
                  <h1>{item?.name}</h1>
                  <p>Id companhia: {item?.companyId}</p>
                  <p> Saúde em %: {item?.healthscore}</p>

                  <p>modelo: {item?.model}</p>
                  <p>Nome Sensor: {item?.sensors}</p>

                  <p> Estado atual: {item?.status}</p>
                  <p>Unidade: {item?.unitId}</p>

                  <ContainerCard title="Especificações técnicas">
                    <SpecificationsActives
                      title="maxTemp:"
                      subtitle={item?.specifications.maxTemp}
                    />
                    <SpecificationsActives
                      title="Power:"
                      subtitle={item?.specifications.power}
                    />
                    <SpecificationsActives
                      title="RPM:"
                      subtitle={item?.specifications.rpm}
                    />
                  </ContainerCard>
                  <ContainerCard title="Métricas">
                    <MetricsInformations
                      title="Data da Ultima Coleta:"
                      subtitle={item.metrics.lastUptimeAt}
                    />
                    <MetricsInformations
                      title="Total de Coletas:"
                      subtitle={item.metrics.totalCollectsUptime}
                    />
                    <MetricsInformations
                      title="Total de Horas de Coletas:"
                      subtitle={item.metrics.totalUptime.toFixed(2)}
                    />
                  </ContainerCard>
                </li>
              ))}{" "}
            </ul>
          )}
        </S.ContainerInformations>

        <div>
          {!data ? (
            <Loading key={props} />
          ) : (
            <ul>
              {[data].map((item) => (
                <li key={item.id}>
                  <ImageActive
                    src={item?.image}
                    alt={`Imagem da ${item.name} `}
                  />
                </li>
              ))}{" "}
            </ul>
          )}
        </div>
      </S.Container>
    </>
  );
};
export default Actives;
