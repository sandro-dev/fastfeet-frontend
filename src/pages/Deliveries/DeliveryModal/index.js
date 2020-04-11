import React from 'react';
import { parseISO, format } from 'date-fns';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function DeliveryModal({ data }) {
  const startDate_formatted = data.start_date
    ? format(parseISO(data.start_date), 'dd/MM/yyyy')
    : null;

  const endDate_formatted = data.end_date
    ? format(parseISO(data.end_date), 'dd/MM/yyyy')
    : null;

  return (
    <Container>
      <div>
        <strong>Informações da encomenda</strong>
        <small>
          {data.recipient.street}, {data.recipient.number}
        </small>
        <small>
          {data.recipient.city} - {data.recipient.state}
        </small>
        <small>{data.recipient.postcode}</small>
      </div>
      {startDate_formatted ? (
        <div>
          <strong>Datas</strong>
          <div>
            <strong>Retirada: </strong>
            <small>{startDate_formatted}</small>
          </div>
          {endDate_formatted ? (
            <div>
              <strong>Entrega: </strong>
              <small>{endDate_formatted}</small>
            </div>
          ) : null}
        </div>
      ) : null}
      {data.signature ? (
        <div>
          <strong>Assinatura do destinatário</strong>
          <img src={data.signature.url} alt="signature" />
        </div>
      ) : null}
    </Container>
  );
}

DeliveryModal.propTypes = {
  data: PropTypes.shape({
    start_date: PropTypes.string,
    end_date: PropTypes.string,
    recipient: PropTypes.shape({
      name: PropTypes.string,
      street: PropTypes.string,
      number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      city: PropTypes.string,
      state: PropTypes.string,
      postcode: PropTypes.string,
    }),
    signature: PropTypes.shape({
      url: PropTypes.string,
    }),
  }).isRequired,
};
