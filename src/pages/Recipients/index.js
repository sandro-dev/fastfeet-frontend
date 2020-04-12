import React, { useState, useEffect, useRef } from 'react';
import { debounce } from 'lodash';
import api from '~/services/api';

import SearchInput from '~/components/Input/SearchInput';
import Button from '~/components/Button';
import HeaderContent from '~/components/HeaderContent';
import Grid from '~/components/Grid';
import MoreMenu from '~/components/MoreMenu';
import Pagination from '~/components/Pagination';
import Loading from '~/components/Loading';

export default function Recipients() {
  const [recipients, setRecipients] = useState([]);
  const [page, setPage] = useState(1);
  const [totalpages, setTotalpages] = useState();
  const [name, setName] = useState('');
  const delayedQuery = useRef(debounce((e) => setName(e), 500)).current;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDeliverimen() {
      const response = await api.get(`recipients`, {
        params: { page, q: name },
      });

      const data = response.data.results.map((recipient) => [
        `#${recipient.id}`,
        recipient.name,
        `${recipient.street}, ${recipient.number}, ${recipient.city} - ${recipient.state}`,
        <MoreMenu
          id={recipient.id}
          items={[
            { type: 'edit', url: `/recipients/edit` },
            { type: 'delete', url: `/recipients` },
          ]}
        />,
      ]);
      setRecipients(data);
      setTotalpages(response.data.total_page);
      setLoading(false);
    }
    loadDeliverimen();
  }, [page, totalpages, name]);

  return (
    <>
      <HeaderContent marginTop={55}>
        <div>
          <h1>Gerenciando destinatários</h1>
          <SearchInput
            placeholder="Buscar por destinatários"
            onChange={(e) => delayedQuery(e.target.value)}
          />
        </div>
        <aside>
          <Button type="add" url="recipients/insert" />
        </aside>
      </HeaderContent>

      {loading ? (
        <Loading color="#7d40e7" height="20%" width="20%" />
      ) : (
        <Grid
          titles={['ID', 'Nome', 'Endereço', 'Ações']}
          itemsArray={recipients}
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
