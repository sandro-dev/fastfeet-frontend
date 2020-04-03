import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '~/assets/logo.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido')
    .required('O email é obrigatório'),
  password: Yup.string().required('A senha é obrigratória'),
});

export default function Signin() {
  function handleSubmit(data) {
    console.log('data: ', data);
  }

  return (
    <>
      <Form schema={schema} onSubmit={handleSubmit}>
        <img src={logo} alt="logo" />
        <label htmlFor="email">SEU E-MAIL:</label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="exemplo@email.com"
        />

        <label htmlFor="password">SUA SENHA:</label>
        <Input
          id="password"
          type="password"
          name="password"
          placeholder="******"
        />

        <button type="submit">Entrar no sistema</button>
      </Form>
    </>
  );
}
