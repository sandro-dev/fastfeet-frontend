import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1100px;
  background-color: #fff;
  border-radius: 4px;
  margin: 10px auto;
  padding: 30px;
  font-family: 'Roboto';

  form .input-block label {
    display: block;
    color: #444;
    font-weight: bold;
    margin: 10px 0 5px 0;
  }

  form .input-block input {
    width: 100%;
    height: 45px;
    margin: 5px 0px;
    padding: 12px 15px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
    color: #999;
  }
`;
