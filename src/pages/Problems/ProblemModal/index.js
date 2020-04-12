import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function ProblemModal({ data }) {
  return (
    <Container>
      <div>
        <strong>VISUALIZAR PROBLEMA</strong>
        <p>{data}</p>
      </div>
    </Container>
  );
}

ProblemModal.propTypes = {
  data: PropTypes.node.isRequired,
};
