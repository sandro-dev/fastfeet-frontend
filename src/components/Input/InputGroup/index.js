import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function InputGroup({ children, columns, template }) {
  return (
    <Container columns={columns} template={template}>
      {children}
    </Container>
  );
}

InputGroup.propTypes = {
  children: PropTypes.node.isRequired,
  columns: PropTypes.number.isRequired,
  template: PropTypes.string,
};

InputGroup.defaultProps = {
  template: '',
};
