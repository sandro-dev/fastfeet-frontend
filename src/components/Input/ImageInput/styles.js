import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;

  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
  }

  .image-placeholder {
    width: 160px;
    height: 160px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 3px dashed #ddd;
    border-radius: 50%;
    transition: border-color 0.2s;

    span {
      font-size: 16px;
      color: #ddd;
      font-weight: bold;
      transition: color 0.2s;
    }

    svg {
      width: 39px !important;
      height: 39px !important;
      transition: fill 0.2s;
    }

    &:hover {
      border-color: ${darken(0.1, '#ddd')};

      svg {
        fill: ${darken(0.1, '#ddd')};
      }

      span {
        color: ${darken(0.1, '#ddd')};
      }
    }
  }

  input {
    display: none;
  }
`;
