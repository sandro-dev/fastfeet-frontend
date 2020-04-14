import React from 'react';
import PropTypes from 'prop-types';
import { Form } from '@unform/web';

import { Container } from './styles';

export default function Unform({ children, ...rest }) {
  return (
    <Container>
      <Form {...rest}>{children}</Form>
    </Container>
  );
}

Unform.propTypes = {
  children: PropTypes.node.isRequired,
};
