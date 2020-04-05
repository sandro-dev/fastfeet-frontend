import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 64px;
  width: 100%;
  background: #fff;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 1440px;
  margin: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;

    img {
      margin: 0 10px;
      padding-right: 30px;
      border-right: 1px solid #eee;
    }

    a:first-of-type {
      margin-left: 20px;
    }

    a {
      color: #999999;
      font-stretch: normal;
      font-weight: bold;
      text-transform: uppercase;
      font-size: 15px;
      padding: 0 10px;

      &:hover {
        color: #7d40e7;
      }
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;

  > strong {
    display: block;
    color: #666666;
    text-transform: capitalize;
  }

  > button {
    color: #de3b3b;
    background: none;
    font-size: 12px;
    margin-top: 2px;

    transition: background 0.2s;
    &:hover {
      color: ${darken(0.1, '#de3b3b')};
      text-decoration: underline;
    }
  }
`;
