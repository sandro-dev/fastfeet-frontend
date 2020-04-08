import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as MaterialDesign from 'react-icons/md';
import { debounce } from 'lodash';
import history from '~/services/history';

import { Container, Button, List, ItemList } from './styles';

export default function MoreMenu({ id, menuItems, dataItem }) {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  function handleClick(url, data) {
    console.log(url);
    history.push(url, data);
  }

  return (
    <>
      <Button onClick={handleToggleVisible}>
        <MaterialDesign.MdMoreHoriz size={16} color="#999" />
      </Button>

      <Container onMouseLeave={debounce(() => handleToggleVisible(), 1000)}>
        <List visible={visible}>
          {menuItems.map((item) => {
            const MDIcon = MaterialDesign[item.icon];
            return (
              <ItemList key={`#${id}-${item.text}`}>
                <button
                  type="button"
                  onClick={() => {
                    handleClick(item.url, dataItem);
                  }}
                >
                  <MDIcon size={20} color={item.iconColor} />
                  {item.text}
                </button>
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
  menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};
