import React, { useState } from "react";
import * as S from "./styles";

import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Toggle from "../Toggle";

import { useTheme } from "../../hooks/themes";

const MainHeader: React.FC = () => {
  const { toggleTheme, theme } = useTheme();
  const [darkTheme, setDarkTheme] = useState(() =>
    theme.title === "dark" ? true : false
  );
  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme);
    toggleTheme();
  };

  return (
    <S.Container>
      <Toggle
        checked={darkTheme}
        labelLeft="Light"
        labelRight="Right"
        onChange={handleChangeTheme}
      />
      <S.Profile>
        <Avatar style={{ margin: "auto" }} size={40} icon={<UserOutlined />} />
        <S.UserName>Testador um</S.UserName>
      </S.Profile>
    </S.Container>
  );
};
export default MainHeader;
