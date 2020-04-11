import React from 'react';
import { MdRemoveRedEye } from 'react-icons/md';
import Popup from 'reactjs-popup';

import PropTypes from 'prop-types';

export default function Modal({ children }) {
  return (
    <Popup
      trigger={
        <button type="button">
          <MdRemoveRedEye size={20} color="#8e5be8" />
          Visualizar
        </button>
      }
      modal
      position="center center"
      contentStyle={{
        width: '450px',
        borderRadius: '4px',
        padding: '25px',
      }}
      overlayStyle={{
        background: 'rgb(0, 0, 0, 0.6)',
        border: 'rgb(0, 0, 0, 0.85)',
      }}
    >
      {children}
    </Popup>
  );
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
};
