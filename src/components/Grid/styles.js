import styled from 'styled-components';

export const Container = styled.div`
  width: 1100px;
  margin-top: 30px;
  padding-bottom: 10px !important;

  header,
  section {
    display: grid;
    grid-template-columns: ${(props) =>
      props.template ? props.template : `0.5fr repeat(${props.size - 1}, 1fr)`};
    background: #f5f5f5;
    height: 57px;
    text-align: left;
    font-family: Roboto;
    font-style: normal;
    font-size: 16px;
    padding-left: 20px;

    strong,
    span {
      display: flex;
      align-items: center;
    }

    strong:last-child,
    span:last-child {
      justify-content: flex-end;
      margin-right: 20px;
    }

    strong {
      font-weight: bold;
      color: #444;
    }

    span {
      color: #666;
      margin-right: 20px;
    }
  }

  section {
    background-color: #fff;
    border-radius: 4px;
  }

  section + section {
    margin-top: 20px;
  }

  .line-clamp {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
