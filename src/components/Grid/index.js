import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Grid({ titles, itemsArray, template }) {
  return (
    <Container size={titles.length} template={template}>
      <header>
        {titles.map((title, idx) => (
          <strong key={idx}>{title}</strong>
        ))}
      </header>
      <main>
        {itemsArray.map((items, index) => (
          <section key={index}>
            {items.map((item, idx) => (
              <span key={idx}>{item}</span>
            ))}
          </section>
        ))}
      </main>
    </Container>
  );
}

Grid.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.string).isRequired,
  itemsArray: PropTypes.arrayOf(PropTypes.array),
  template: PropTypes.string,
};

Grid.defaultProps = {
  itemsArray: [],
  template: '',
};
