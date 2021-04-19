import React, { useState, useEffect, useMemo } from "react";
import { Spin } from "antd";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import moment from "moment";
import api from "../../services/api";
import { MdDateRange, MdCollectionsBookmark } from "react-icons/md";
import { IoMdClock } from "react-icons/io";
import { GoAlert } from "react-icons/go";

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import ImageActive from "../../components/ImageActive";
import ContainerCard from "../../components/ContainerCard";
import sensors from "../../utils/listSensors";
import { IActivesProps } from "../../models/interface";
import * as S from "./styles";

const Actives: React.FC = (props) => {
  const [data, setData] = useState<IActivesProps>();
  const [sensorSelected, setSensorSelected] = useState<string>("1");
  const [status, setStatus] = useState("");

  useEffect(() => {
    api.get(`assets/${sensorSelected}`).then((response) => {
      setData(response.data);
      setStatus(response.data?.status);
    });
  }, [sensorSelected]);

  const healthscore: Highcharts.Options = {
    title: {
      text: `Saúde ${[data?.healthscore]}%`,
      style: { color: "#ffe23d", fontSize: "24px" },
    },
    yAxis: {
      title: {
        text: "Saúde",
      },
    },
    colors: ["#ffe23d", "transparent"],
    chart: {
      height: "300px",
      width: 250,
    },

    series: [
      {
        type: "pie",
        data: [[data?.healthscore], [100 - Number([data?.healthscore])]],
      },
    ],
  };
  const temp: Highcharts.Options = {
    title: {
      text: `Temperatura ${[data?.specifications.maxTemp]} °C`,
      style: { color: "red", fontSize: "24px" },
    },
    yAxis: {
      title: {
        text: "Temperatura máxima",
      },
    },
    colors: ["#ff3d3d"],
    chart: {
      height: "300px",
      width: 250,
    },
    series: [
      {
        type: "column",
        data: [[data?.specifications.maxTemp]],
      },
    ],
  };
  const power: Highcharts.Options = {
    title: {
      text: `Power ${[data?.specifications.power]}`,
      style: { color: "black", fontSize: "24px" },
    },
    yAxis: {
      title: {
        text: "Power",
      },
    },
    colors: ["#000000"],
    chart: {
      height: "300px",
      width: 250,
    },
    series: [
      {
        type: "column",
        data: [[data?.specifications.power]],
      },
    ],
  };
  const rpm: Highcharts.Options = {
    title: {
      text: `RPM ${[data?.specifications.rpm]}`,
      style: { color: "green", fontSize: "24px" },
    },
    yAxis: {
      title: {
        text: "RPM",
        style: { color: "green" },
      },
    },
    colors: ["#00b100"],
    chart: {
      height: "300px",
      width: 250,
    },
    series: [
      {
        type: "column",
        data: [[data?.specifications.rpm]],
      },
    ],
  };

  const statusImage = useMemo(() => {
    if (status === "inAlert") {
      return (
        <S.TextStatus>
          {" "}
          <GoAlert style={{ color: "red", fontSize: "24px" }} />{" "}
          <span>Em Alerta</span>{" "}
        </S.TextStatus>
      );
    } else if (status === "inDowntime") {
      return (
        <S.TextStatus>
          {" "}
          <GoAlert style={{ color: "green", fontSize: "24px" }} />{" "}
          <span>Em Operação</span>{" "}
        </S.TextStatus>
      );
    } else if (status === "inOperation") {
      return (
        <S.TextStatus>
          {" "}
          <GoAlert style={{ color: "yellow", fontSize: "24px" }} />{" "}
          <span>Em Parada</span>{" "}
        </S.TextStatus>
      );
    } else {
      return <S.TextStatus>Estado não identificado</S.TextStatus>;
    }
  }, [status]);

  return (
    <>
      <ContentHeader title="Ativos" lineColor="#72B3F2">
        <SelectInput 
          options={sensors}
          onChange={(event) => setSensorSelected(event.target.value)}
        />
      </ContentHeader>

      {!data ? (
        <Spin tip="Carregando..." />
      ) : (
        <S.Container>
          <div>
            {[data].map((item) => (
              <h2>{item?.name} </h2>
            ))}
          </div>

          <ContainerCard title="Métricas">
            {[data].map((item) => (
              <S.ContainerMetricas>
                <S.ContainerImageEquip>
                  <ImageActive
                    src={item?.image}
                    alt={`Imagem da ${item.name} `}
                  />
                </S.ContainerImageEquip>

                <div>
                  <S.TextStatus>Nome Sensor: {item?.sensors}</S.TextStatus>
                  <S.TextStatus>modelo: {item?.model}</S.TextStatus>

                  <S.TextStatus>
                    <MdDateRange />
                    Ultima Coleta:{" "}
                    {moment(item.metrics.lastUptimeAt).format("DD/MM/YYYY")}
                  </S.TextStatus>

                  <S.TextStatus>
                    <MdCollectionsBookmark />
                    Total Coletas: {item.metrics.totalCollectsUptime}
                  </S.TextStatus>

                  <S.TextStatus>
                    <IoMdClock />
                    Horas de Coletas: {item.metrics.totalUptime.toFixed(2)}
                  </S.TextStatus>

                  <span>{statusImage} </span>
                </div>
              </S.ContainerMetricas>
            ))}
          </ContainerCard>

          <S.ContainerInformations>
            {[data].map((item) => (
              <ContainerCard title="Condição">
                <S.ContainerCondition>
                  <HighchartsReact
                    highcharts={Highcharts}
                    options={healthscore}
                    {...props}
                  />
                  <HighchartsReact
                    highcharts={Highcharts}
                    options={temp}
                    {...props}
                  />
                  <HighchartsReact
                    highcharts={Highcharts}
                    options={power}
                    {...props}
                  />
                  <HighchartsReact
                    highcharts={Highcharts}
                    options={rpm}
                    {...props}
                  />
                </S.ContainerCondition>
              </ContainerCard>
            ))}
          </S.ContainerInformations>
        </S.Container>
      )}
    </>
  );
};
export default Actives;
