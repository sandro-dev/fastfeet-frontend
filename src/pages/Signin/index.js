import React from 'react';

import logo from '~/assets/logo.png';

export default function Signin() {
  return (
    <>
      <form>
        <img src={logo} alt="logo" />
        <label htmlFor="email">SEU E-MAIL:</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="exemplo@email.com"
        />

        <label htmlFor="password">SUA SENHA:</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="******"
        />

        <input type="submit" value="Entrar no sistema" />
      </form>
    </>
  );
}
