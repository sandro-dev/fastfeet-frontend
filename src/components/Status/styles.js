import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.color};
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  padding: 4px 10px;
  border-radius: 16px;

  svg {
    margin-right: 5px;
  }
`;
