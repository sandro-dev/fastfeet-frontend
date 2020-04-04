import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #7d40e7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  background: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0px 0px 10px ${darken(0.2, '#7d40e7')};
  width: 360px;

  form {
    display: flex;
    flex-direction: column;

    img {
      margin: 20px auto 30px;
      width: 85%;
    }

    label {
      color: #444;
      font-weight: bold;
    }

    span {
      color: #e17055;
      margin-bottom: 10px;
      font-size: 20px;
      font-style: italic;
    }

    input {
      height: 44px;
      align-self: stretch;
      padding: 0 15px;
      margin: 10px 0 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #333;
      ::placeholder {
        color: #999;
      }
    }

    button {
      height: 44px;
      background: #7d40e7;
      color: #fff;
      font-weight: bold;
      border-radius: 4px;
      padding: 0 15px;
      margin: 5px 0 30px;
    }
  }
`;
