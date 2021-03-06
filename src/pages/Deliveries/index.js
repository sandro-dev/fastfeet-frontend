import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash';
// import ReactLoading from 'react-loading';
import api from '~/services/api';

import SearchInput from '~/components/Input/SearchInput';
import Button from '~/components/Button';
import HeaderContent from '~/components/HeaderContent';
import Grid from '~/components/Grid';
import Avatar from '~/components/Avatar';
import Status from '~/components/Status';
import MoreMenu from '~/components/MoreMenu';
import Pagination from '~/components/Pagination';
import Loading from '~/components/Loading';

import DeliveryModal from './DeliveryModal';

export default function Deliveries() {
  const [deliveryItems, setDeliveryItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalpages, setTotalpages] = useState();
  const [product, setProduct] = useState('');
  const [loading, setLoading] = useState(true);

  const delayedQuery = debounce((data) => {
    setPage(1);
    setProduct(data);
  }, 500);

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get(`deliveries`, {
        params: { page, q: product },
      });

      const data = response.data.results.map((delivery) => [
        `#${delivery.id}`,
        delivery.recipient.name,
        delivery.deliveryman.avatar_id ? (
          <Avatar
            fullname={delivery.deliveryman.name}
            url={delivery.deliveryman.avatar.url}
            isPhoto
          />
        ) : (
          <Avatar fullname={delivery.deliveryman.name} />
        ),
        delivery.recipient.city,
        delivery.recipient.state,
        <Status status={delivery.status} />,
        <MoreMenu
          id={delivery.id}
          items={[
            { type: 'view', content: <DeliveryModal data={delivery} /> },
            { type: 'edit', url: `/deliveries/edit` },
            { type: 'delete', url: `/deliveries/${delivery.id}` },
          ]}
        />,
      ]);

      setDeliveryItems(data);
      setTotalpages(response.data.total_page);
      setLoading(false);
    }
    loadDeliveries();
  }, [page, totalpages, product]);

  return (
    <>
      <HeaderContent marginTop={55}>
        <div>
          <h1>Gerenciando encomendas</h1>
          <SearchInput
            name="search"
            placeholder="Buscar por encomendas"
            onChange={(e) => delayedQuery(e.target.value)}
          />
        </div>
        <aside>
          <Button type="add" url="deliveries/insert" />
        </aside>
      </HeaderContent>

      {loading ? (
        <Loading color="#7d40e7" height="20%" width="20%" />
      ) : (
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
          itemsArray={deliveryItems}
          template="0.5fr 1.5fr 1.5fr 1fr 1fr 1fr 1fr"
        />
      )}

      <Pagination
        page={page}
        totalpages={totalpages}
        handlePage={(pg) => setPage(pg)}
      />
    </>
  );
}
