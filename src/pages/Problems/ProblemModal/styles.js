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

    p {
      font-size: 16px;
      color: #666;
      line-height: 25px;
    }
  }
`;
