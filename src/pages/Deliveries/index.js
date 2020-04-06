import React from 'react';

import SearchInput from '~/components/Input/SearchInput';
import Grid from '~/components/Grid';
import Badge from '~/components/Badge';

export default function Deliveries() {
  const items = [
    [
      '#03',
      'Frederic Chopin',
      'Tom Hamson',
      'Salvador',
      'Bahia',
      <Badge status="Entregue" color="#2CA42B" bgcolor="#DFF0DF"  />,
      '...',
    ],
    [
      '#04',
      'Friederic Nietsche',
      'Uber eats',
      'Salvador',
      'Bahia',
      <Badge status="Pendente" color="#C1BC35" bgcolor="#F0F0DF"  />,
      '...',
    ],
    [
      '#05',
      'Arthur Schoppenhauer dos Santos',
      'iFood',
      'Salvador',
      'Bahia',
      <Badge status="Retirada" color="#4D85EE" bgcolor="#BAD2FF"  />,
      '...',
    ],
    [
      '#06',
      'Mário Sérgio Cortella',
      'Amazon Prime',
      'Santa Catarina',
      'Florianópolis',
      <Badge status="Cancelada" color="#DE3B3B" bgcolor="#FAB0B0"  />,
      '...',
    ],
  ];

  return (
    <>
      <h1>Gerenciando encomendas</h1>
      <SearchInput name="search" placeholder="Buscar por encomendas" />
      <Grid
        titles={[
          'ID',
          'Destinatário',
          'Entregador',
          'Cidade',
          'Estado',
          'Status',
          'Ações',
        ]}
        itemsArray={items}
      />
    </>
  );
}
