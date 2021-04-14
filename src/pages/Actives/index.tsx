import React, { useState, useEffect } from "react";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import axios, { AxiosResponse } from "axios";
import * as S from "./styles";

interface IActivesProps {
  id: number;
  sensors: string;
  model: string;
  status: string;
  healthscore: number;
  name: string;
  image: string;
  specifications: object;
  matrics: object;
  unitId: number;
  companyId: number;
}


const Actives: React.FC = () => {
  const [data, setData] = useState<IActivesProps>();
  
   const options = [
    {value: 1, label: "GSJ1535" },
    {value: 2,label: "IBS1636"},
    {value: 3,label: "JVC1134"},
    {value: 4,label: "LZY5230"},
    {value: 5,label: "NBX2120"},
    {value: 6,label: "MOE1378"},
    {value: 7,label: "MYS2173"},
    {value: 8, label: "HPO6412"},
    {value: 9,label: "BMS9149"},
    {value: 10, label: "KBJ1010"},
  ];

  const option = ''

  useEffect(() => {
       axios
      .get(`https://my-json-server.typicode.com/tractian/fake-api/assets/${option}`)
      .then((response: AxiosResponse) => {
        setData(response.data);
             });
  }, []);

 
  return (
    <S.Container>
      <ContentHeader title="Ativos" lineColor="#72B3F2">
        <SelectInput options={options}  />
      </ContentHeader>

{console.log(data)}

      </S.Container>
  );
};
export default Actives;
