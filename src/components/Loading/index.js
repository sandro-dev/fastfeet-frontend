import React from 'react';
import { FaSpinner } from 'react-icons/fa';

import { Icon } from './styles';

export default function Loading({ color }) {
  return (
    <Icon color={color}>
      <FaSpinner color={color} size={32} /> Carregando...
    </Icon>
  );
}
