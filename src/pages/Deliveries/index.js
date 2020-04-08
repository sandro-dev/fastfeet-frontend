import React, { useState, useEffect, useRef } from 'react';
import { debounce } from 'lodash';

import SearchInput from '~/components/Input/SearchInput';
import Grid from '~/components/Grid';
import Badge from '~/components/Badge';
import IconName from '~/components/IconName';
import Pagination from '~/components/Pagination';
import MoreMenu from '~/components/MoreMenu';

import api from '~/services/api';

export default function Deliveries() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalpages, setTotalpages] = useState();
  const perPage = 10;

  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState('');
  const delayedQuery = useRef(debounce((e) => setProduct(e), 500)).current;

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get(`deliveries`, {
        params: { page, perPage, q: product },
      });

      const data = response.data.results.map((delivery) => [
        `#${delivery.id}`,
        delivery.recipient.name,
        <IconName fullname={delivery.deliveryman.name} />,
        delivery.recipient.city,
        delivery.recipient.state,
        <Badge status="Retirada" color="#4D85EE" bgcolor="#BAD2FF" />,
        <MoreMenu
          id={delivery.id}
          dataItem={delivery}
          menuItems={[
            {
              icon: 'MdRemoveRedEye',
              iconColor: '#8E5BE8',
              text: 'Visualizar',
              // url: 'deliveries/view',
            },
            {
              icon: 'MdEdit',
              iconColor: '#4D85EE',
              text: 'Editar',
              url: `/deliveries/edit/${delivery.id}`,
            },
            {
              icon: 'MdDeleteForever',
              iconColor: '#DE3B3B',
              text: 'Excluir',
              // url: `delete/${delivery.id}`,
            },
          ]}
        />,
      ]);

      setItems(data);
      setTotalpages(response.data.total_page);
      setLoading(false);
    }

    loadDeliveries();
  }, [page, totalpages, product]);

  return (
    <>
      <h1>Gerenciando encomendas</h1>
      <SearchInput
        name="search"
        placeholder="Buscar por encomendas"
        onChange={(e) => delayedQuery(e.target.value)}
      />
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
        template="0.5fr 1.5fr 1.5fr 1fr 1fr 1fr 1fr"
      />

      <Pagination
        page={page}
        totalpages={totalpages}
        handlePage={(pg) => setPage(pg)}
      />
    </>
  );
}
