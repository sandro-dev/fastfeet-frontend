import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import logo from '~/assets/logo.svg';
import { signOut } from '~/store/modules/auth/actions';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} height="26px" alt="Fastfeet" />
          <NavLink to="/deliveries" activeClassName="activeLink">
            Encomendas
          </NavLink>
          <NavLink to="/deliveryman" activeClassName="activeLink">
            Entregadores
          </NavLink>
          <NavLink to="/recipient" activeClassName="activeLink">
            Destinatários
          </NavLink>
          <NavLink to="/problems" activeClassName="activeLink">
            Problemas
          </NavLink>
        </nav>

        <aside>
          <Profile>
            <strong>Admin Fastfeet</strong>
            <button type="button" onClick={handleSignOut}>
              sair do sistema
            </button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
