import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido')
    .required('O email é obrigatório'),
  password: Yup.string().required('A senha é obrigratória'),
});

export default function Signin() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
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

        <button type="submit">
          {loading ? 'Acessando...' : 'Entrar no sistema'}
        </button>
      </Form>
    </>
  );
}
