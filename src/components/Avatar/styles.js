import styled from 'styled-components';

export const Image = styled.img`
  max-width: 40px;
  max-height: 40px;
  background-color: #eee;
  border: 1px dashed #eee;
  border-radius: 50%;
  margin-right: 10px;
`;

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
  margin-right: 10px;
`;
