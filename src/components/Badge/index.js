import React from 'react';
import PropTypes from 'prop-types';
import { FaCircle } from 'react-icons/fa';

import { Container } from './styles';

// status bgcolor color
// entregue #DFF0DF #2CA42B
// pendente #F0F0DF #C1BC35
// retirada #BAD2FF #4D85EE
// cancelada #FAB0B0 #DE3B3B

export default function Badge({ status, color, bgcolor }) {
  return (
    <Container color={color} bgcolor={bgcolor}>
      <FaCircle size={10} color={color} />
      {status}
    </Container>
  );
}

Badge.propTypes = {
  status: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  bgcolor: PropTypes.string.isRequired,
};
