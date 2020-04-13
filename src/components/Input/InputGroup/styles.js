import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1100px;
  font-family: 'Roboto';
  display: grid;
  grid-gap: 30px;
  grid-template-columns: ${(props) =>
    props.template ? props.template : `repeat(${props.columns}, 1fr)`};

  + div {
    margin-top: 15px;
  }
`;
