import React from 'react';
import PropTypes from 'prop-types';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { Container } from './styles';

export default function Pagination({ page, totalpages, handlePage }) {
  return (
    <Container page={page}>
      {totalpages > 0 ? (
        <button
          type="button"
          disabled={page === 1}
          onClick={() => handlePage(page - 1)}
        >
          <MdKeyboardArrowLeft size={23} />
        </button>
      ) : null}

      {[...Array(totalpages)].map((e, i) => (
        <button
          key={`btn_${i + 1}`}
          type="button"
          onClick={() => handlePage(i + 1)}
        >
          {i + 1}
        </button>
      ))}

      {totalpages > 0 ? (
        <button
          type="button"
          disabled={page === totalpages}
          onClick={() => handlePage(page + 1)}
        >
          <MdKeyboardArrowRight size={23} />
        </button>
      ) : null}
    </Container>
  );
}

Pagination.propTypes = {
  page: PropTypes.number,
  totalpages: PropTypes.number,
  handlePage: PropTypes.func.isRequired,
};

Pagination.defaultProps = {
  page: 1,
  totalpages: 1,
};
