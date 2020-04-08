import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Button = styled.button`
  background: none;
  padding: 10px;
  border: 0;
  position: relative;
`;

export const List = styled.ul`
  position: absolute;
  width: 150px;
  left: calc(50% - 85px);
  top: calc(100% + 20px);
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 2px #00000026;
  padding: 15px 5px;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  z-index: 9;

  &::before {
    content: '▲';
    font-size: 25px;
    color: #fff;
    position: absolute;
    left: calc(50% - 18px);
    top: -24px;
    text-shadow: 0px 0px 0px #000000;
  }
`;

export const ItemList = styled.li`
  & + li {
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid #eee;
  }

  button {
    font-size: 16px;
    background: none;
    border: 0;
    color: #999;
    display: flex;

    svg {
      margin-right: 10px;
    }
  }
`;
