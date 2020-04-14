import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function ContentForm({ children }) {
  return <Container>{children}</Container>;
}

ContentForm.propTypes = {
  children: PropTypes.node.isRequired,
};
