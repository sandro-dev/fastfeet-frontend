import styled from 'styled-components';

export const Btn = styled.button`
  background-color: ${(props) => props.bgcolor};
  color: #fff;
  padding: 0 15px;
  margin-right: 10px;
  height: 36px;
  display: flex;
  text-align: center;
  align-items: center;
  font-family: 'Roboto' !important;
  font-size: 14px;
  font-weight: bold;
  border-radius: 4px;
  svg {
    margin-right: 5px;
  }
`;
