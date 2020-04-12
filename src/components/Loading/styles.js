import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
	from {
    transform: rotate(0deg);
    }

  to {
    transform: rotate(360deg);
  }
`;

export const Icon = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: ${(props) => (props.color ? props.color : '#333')};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
  width: 220px;
  max-width: 1100px;
  margin: 100px auto;

  svg {
    margin-right: 10px;
    animation: ${rotate} 1s linear infinite;
  }
`;
