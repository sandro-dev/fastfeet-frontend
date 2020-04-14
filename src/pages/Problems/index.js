import React, { useState, useEffect } from 'react';
import api from '~/services/api';

import HeaderContent from '~/components/HeaderContent';
import Grid from '~/components/Grid';
import MoreMenu from '~/components/MoreMenu';
import Pagination from '~/components/Pagination';
import Loading from '~/components/Loading';
import ProblemModal from './ProblemModal';

export default function Problems() {
  const [problems, setProblems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalpages, setTotalpages] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProblems() {
      const response = await api.get(`delivery/problems`, {
        params: { page },
      });

      const data = response.data.results.map((problem) => [
        `#${problem.id}`,
        <p className="line-clamp">{problem.description}</p>,
        <MoreMenu
          width={230}
          id={problem.id}
          items={[
            {
              type: 'view',
              content: <ProblemModal data={problem.description} />,
            },
            {
              type: 'delete',
              text: 'Cancelar encomenda',
              url: `/problem/${problem.id}/cancel-delivery`,
            },
          ]}
        />,
      ]);
      setProblems(data);
      setTotalpages(response.data.total_page);
      setLoading(false);
    }
    loadProblems();
  }, [page, totalpages]);

  return (
    <>
      <HeaderContent>
        <div>
          <h1>Problemas na entrega</h1>
        </div>
      </HeaderContent>

      {loading ? (
        <Loading color="#7d40e7" height="20%" width="20%" />
      ) : (
        <Grid titles={['ID', 'Problema', 'Ações']} itemsArray={problems} />
      )}

      <Pagination
        page={page}
        totalpages={totalpages}
        handlePage={(pg) => setPage(pg)}
      />
    </>
  );
}
