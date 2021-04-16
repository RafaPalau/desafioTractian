import React, { useState, useEffect } from "react";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import axios, { AxiosResponse } from "axios";

import * as S from "./styles";
import Loading from "../../components/loading";

interface IUnitsProps {
  id: number;
  name: string;
  companyId: number;
}

const Units: React.FC = (props) => {
  const [data, setData] = useState<IUnitsProps>();
  console.log(data);
  const [unitSelected, setUnitSelected] = useState<string>("1");

  useEffect(() => {
    axios
      .get(
        `https://my-json-server.typicode.com/tractian/fake-api/units/${unitSelected}`
      )
      .then((response: AxiosResponse) => {
        setData(response.data);
      });
  }, [unitSelected]);

  const options = [
    {
      value: "1",
      label: "Unidade Jaguar",
    },
    {
      value: "2",
      label: "Unidade Tobias",
    },
  ];

  return (
    <S.Container>
      <ContentHeader title="Unidades" lineColor="#f3c52e">
        <SelectInput
          options={options}
          onChange={(event) => setUnitSelected(event.target.value)}
        />
      </ContentHeader>
      {!data ? (
        <>
          <Loading key={props} />
        </>
      ) : (
        <div>
          {" "}
          {[data].map((item) => (
            <h1 key={item.id}>{item?.name}</h1>
          ))}{" "}
        </div>
      )}
    </S.Container>
  );
};
export default Units;
