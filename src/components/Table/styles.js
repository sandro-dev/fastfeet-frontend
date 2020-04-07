import styled from 'styled-components';
import { darken } from 'polished';

export const WrapperTable = styled.table`
  width: 1100px;
  padding: 0;
  margin: 30px 0;
  background: #fff;
  border-collapse: collapse;
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 10px 15px;

  thead tr {
    border: 1px solid #f5f5f5;
  }

  th {
    text-align: left;
    background: #f5f5f5;
  }

  th,
  td {
    padding-left: 15px;
  }

  tr {
    vertical-align: middle;
    height: 57px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;

    & + tr {
      border-top: 1px solid #eee;
    }

    &:hover {
      background: ${darken(0.05, '#fff')};
    }

    td {
      color: #666;

      div {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
      }

      button {
        display: flex;
        flex-direction: initial;
        align-items: center;
        justify-content: center;
        background: #fff;
        border-radius: 4px;
        border: 1px dashed #eee;
        margin-right: 15px;
      }
    }
  }

  tfoot tr td {
    vertical-align: middle;
    padding: 20px 15px;
    background: #f4f4f4;
  }
`;
