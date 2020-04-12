import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { debounce } from 'lodash';
import { MdMoreHoriz, MdEdit, MdDeleteForever } from 'react-icons/md';

import Modal from '~/components/Modal';
import api from '~/services/api';
import history from '~/services/history';

import { Container, Button, List, ItemList, ButtonItem } from './styles';

export default function MoreMenu({ id, items, width }) {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  async function handleDelete(url, itemId) {
    console.log('#=> handleDelete', url, itemId);
    const confirm = window.confirm(`Tem certeza que quer deletar este item?`);

    if (confirm) {
      const response = await api.delete(`${url}/${itemId}`);
      if (response.data.ok === true) {
        toast.success(`item deletado com sucesso`);
        setTimeout(() => window.location.reload(false), 1000);
      } else {
        toast.error('Erro ao tentar deletar item');
      }
    }
  }

  return (
    <>
      <Button onClick={handleToggleVisible}>
        <MdMoreHoriz size={16} color="#999" />
      </Button>

      <Container onMouseLeave={debounce(() => handleToggleVisible(), 1000)}>
        <List visible={visible} width={width}>
          {items.map((item) => {
            return (
              <ItemList
                key={`${id}${Math.random().toString(36).substring(1, 5)}`}
              >
                {item.type === 'view' ? <Modal content={item.content} /> : null}

                {item.type === 'edit' ? (
                  <ButtonItem
                    onClick={() => {
                      history.push(`${item.url}/${id}`);
                    }}
                  >
                    <MdEdit size={20} color="#4d85ee" />
                    <span>Editar</span>
                  </ButtonItem>
                ) : null}

                {item.type === 'delete' ? (
                  <ButtonItem
                    onClick={() => {
                      handleDelete(item.url, id);
                    }}
                  >
                    <MdDeleteForever size={20} color="#de3b3b" />
                    <span>{item.text ? item.text : 'Excluir'}</span>
                  </ButtonItem>
                ) : null}
              </ItemList>
            );
          })}
        </List>
      </Container>
    </>
  );
}

MoreMenu.propTypes = {
  id: PropTypes.number.isRequired,
  width: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

MoreMenu.defaultProps = {
  width: 150,
};
