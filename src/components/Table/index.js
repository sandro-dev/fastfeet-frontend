import React from 'react';
import PropTypes from 'prop-types';

import { WrapperTable } from './styles';

export default function Table({ children }) {
  return <WrapperTable>{children}</WrapperTable>;
}

Table.propTypes = {
  children: PropTypes.node.isRequired,
};
