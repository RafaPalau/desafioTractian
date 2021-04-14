import React, { useState, useEffect } from "react";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import axios, { AxiosResponse } from "axios";

import * as S from "./styles";

interface IUnitsProps {
  id: number;
  name: string;
companyId: number;
}

const Units: React.FC = () => {
  const [data, setData] = useState<IUnitsProps>();

  useEffect(() => {
    // Use [] as second argument in useEffect for not rendering each time
    axios
      .get("https://my-json-server.typicode.com/tractian/fake-api/units")
      .then((response: AxiosResponse) => {
        setData(response.data);
             });
  }, []);
  const options = [
    {
      value: "Unidade Jaguar",
      label: "Unidade Jaguar",
    },
    {
      value:"Unidade Tobias",
      label: "Unidade Tobias",
    },
   
  ];

 
  return (
    
    <S.Container>

<ContentHeader title="Unidades" lineColor="#f3c52e">
        <SelectInput options={options} />
      </ContentHeader>

      {console.log(data)}
    </S.Container>
   
  )
}
export default Units