import React, { useState, useEffect, useRef } from 'react';
import { debounce } from 'lodash';
import api from '~/services/api';

import SearchInput from '~/components/Input/SearchInput';
import Button from '~/components/Button';
import HeaderContent from '~/components/HeaderContent';
import Grid from '~/components/Grid';
import Avatar from '~/components/Avatar';
import MoreMenu from '~/components/MoreMenu';
import Pagination from '~/components/Pagination';
import Loading from '~/components/Loading';

export default function Deliverymen() {
  const [deliverymen, setDeliverymen] = useState([]);
  const [page, setPage] = useState(1);
  const [totalpages, setTotalpages] = useState();
  const [name, setName] = useState('');
  const delayedQuery = useRef(debounce((e) => setName(e), 500)).current;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDeliverimen() {
      const response = await api.get(`deliveryman`, {
        params: { page, q: name },
      });

      const data = response.data.results.map((deliveryman) => [
        `#${deliveryman.id}`,
        deliveryman.avatar_id ? (
          <Avatar
            fullname={deliveryman.name}
            url={deliveryman.avatar.url}
            isPhoto
          />
        ) : (
          <Avatar fullname={deliveryman.name} />
        ),
        deliveryman.name,
        deliveryman.email,
        <MoreMenu
          id={deliveryman.id}
          items={[
            { type: 'edit', url: `/deliverymen/edit` },
            { type: 'delete', url: `/deliverymen` },
          ]}
        />,
      ]);
      setDeliverymen(data);
      setTotalpages(response.data.total_page);
      setLoading(false);
    }
    loadDeliverimen();
  }, [page, totalpages, name]);

  return (
    <>
      <HeaderContent>
        <div>
          <h1>Gerenciando entregadores</h1>
          <SearchInput
            placeholder="Buscar por entregadores"
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
          titles={['ID', 'Foto', 'Nome', 'Email', 'Ações']}
          itemsArray={deliverymen}
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
