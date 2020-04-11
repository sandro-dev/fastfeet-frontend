import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    flex-direction: column;
    padding-bottom: 12px;

    strong {
      color: #444;
      font-size: 14px;
      margin-bottom: 4px;
    }

    small {
      font-size: 16px;
      color: #666;
      line-height: 25px;
    }

    > div {
      > strong {
        display: inline;
        margin-right: 2px;
      }
    }
  }

  > div + div {
    padding-top: 9px;
    border-top: 1px solid #eee;
  }
`;
