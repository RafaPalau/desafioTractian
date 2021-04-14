import React from "react";
import * as S from "./styles";

import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Toggle from "../Toggle";

const MainHeader: React.FC = () => {
  return (
    <S.Container>
      <Toggle />
      <S.Profile>
        <Avatar style={{ margin: "auto" }} size={40} icon={<UserOutlined />} />
        <S.UserName>Testador um</S.UserName>
      </S.Profile>
    </S.Container>
  );
};
export default MainHeader;
