import React from 'react';
import { MdAdd, MdCheck, MdKeyboardArrowLeft } from 'react-icons/md';
import history from '~/services/history';
import { Btn } from './styles';

export default function Button({ type, url, ...rest }) {
  switch (type) {
    case 'add':
      return (
        <Btn bgcolor="#7d40e7" onClick={() => history.push(url)} {...rest}>
          <MdAdd color="#fff" size={26} />
          <span>CADASTRAR</span>
        </Btn>
      );

    case 'save':
      return (
        <Btn bgcolor="#7d40e7" {...rest}>
          <MdCheck color="#fff" size={26} />
          <span>SALVAR</span>
        </Btn>
      );

    case 'back':
      return (
        <Btn bgcolor="#ccc" onClick={() => history.push(url)}>
          <MdKeyboardArrowLeft color="#fff" size={26} />
          <span>VOLTAR</span>
        </Btn>
      );

    default:
      break;
  }
}
