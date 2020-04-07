import styled from 'styled-components';

export const Container = styled.div``;

export const Icon = styled.div`
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.color};
  font-family: 'Roboto';
  text-transform: uppercase;
  font-size: 16px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;