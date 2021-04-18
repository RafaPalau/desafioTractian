import React, {useState} from "react";
import * as S from "./styles";
import Input from "../../components/Input";

import logoImg from "../../assets/logo.png";
import Button from "../../components/Button";

import {useAuth} from '../../hooks/auth'

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

const {signIn} = useAuth()

  return (
    <S.Container>
      <S.Logo src={logoImg} />
      <S.Form onSubmit={() => signIn(email, password)}>
        <S.FormTitle>Entrar</S.FormTitle>
        <Input type="email" required placeholder="Email" onChange={(e) => setEmail(e.target.value)}></Input>
        <Input placeholder="Senha" type="password" required onChange={(e) => setPassword(e.target.value)}></Input>
        <Button type="submit">Acessar</Button>
      </S.Form>
    </S.Container>
  );
};
export default SignIn;
