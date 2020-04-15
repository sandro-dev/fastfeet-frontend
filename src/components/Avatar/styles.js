import styled from 'styled-components';

export const Image = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  background-color: #eee;
  border: 1px dashed #eee;
  border-radius: 50%;
  margin: ${(props) => (props.margin ? props.margin : '0 10px 0 0')};
`;

export const Icon = styled.div`
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.color};
  font-family: 'Roboto';
  text-transform: uppercase;
  font-size: ${(props) =>
    props.styleIcon ? props.styleIcon.fontSize : '16'}px;
  width: ${(props) => (props.styleIcon ? props.styleIcon.size : '35')}px;
  height: ${(props) => (props.styleIcon ? props.styleIcon.size : '35')}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${(props) =>
    props.styleIcon ? props.styleIcon.margin : '0 10px 0 0'};
`;
