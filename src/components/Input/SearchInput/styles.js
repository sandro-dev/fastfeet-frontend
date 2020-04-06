import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 237px;
  height: 36px;
  display: flex;
  align-items: center;

  svg {
    margin: 5px 0px 5px 10px;
    color: #999;
  }
`;

export const Input = styled.input`
  padding: 5px;
  background-color: transparent !important;

  ::placeholder {
    color: #999;
  }
`;
