import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function HeaderContent({ children, marginTop }) {
  return <Container marginTop={marginTop}>{children}</Container>;
}

HeaderContent.propTypes = {
  children: PropTypes.node.isRequired,
  marginTop: PropTypes.number,
};

HeaderContent.defaultProps = {
  marginTop: 0,
};
