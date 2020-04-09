import React from 'react';
import PropTypes from 'prop-types';
import { FaCircle } from 'react-icons/fa';

import { Container } from './styles';

export default function Status({ status }) {
  let color = '';
  let bgcolor = '';

  switch (status) {
    case 'CANCELADA': {
      bgcolor = '#fab0b0';
      color = '#de3b3b';
      break;
    }

    case 'PENDENTE': {
      bgcolor = '#f0f0df';
      color = '#c1bc35';
      break;
    }

    case 'ENTREGUE': {
      bgcolor = '#dff0df';
      color = '#2ca42b';
      break;
    }

    case 'RETIRADA': {
      bgcolor = '#bad2ff';
      color = '#4d85ee';
      break;
    }

    default:
      break;
  }

  return (
    <Container color={color} bgcolor={bgcolor}>
      <FaCircle size={10} color={color} />
      {status}
    </Container>
  );
}

Status.propTypes = {
  status: PropTypes.string.isRequired,
};
