import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1100px;

  aside {
    display: flex;
    margin-top: ${(props) => props.marginTop}px;
  }
`;
