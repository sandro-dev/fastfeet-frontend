import React from 'react';
import { MdSearch } from 'react-icons/md';

import { Container, Input } from './styles';

export default function SearchInput() {
  return (
    <Container>
      <MdSearch color="#999" size={18} />
      <Input name="search" placeholder="Buscar por encomendas" />
    </Container>
  );
}
