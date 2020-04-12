import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Form({ children, ...rest }) {
  return (
    <Container>
      <form {...rest}>{children}</form>
    </Container>
  );
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
};
