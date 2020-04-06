import React from 'react';
import PropTypes from 'prop-types';
import { sample } from 'lodash';

import { Container, Icon } from './styles';

const pallete = [
  { bgcolor: '#F4EFFC', color: '#A28FD0' },
  { bgcolor: '#FCF4EE', color: '#CB946C' },
  { bgcolor: '#EBFBFA', color: '#83CEC9' },
  { bgcolor: '#FFEEF1', color: '#CC7584' },
  { bgcolor: '#F4F9EF', color: '#A8D080' },
  { bgcolor: '#FCFCEF', color: '#CCCC8B' },
];

const select = sample(pallete);

export default function IconName({ fullname }) {
  const name = fullname.split(' ');
  const fname = name.shift().split('').shift();
  const lname = name.pop().split('').shift();
  const initials = fname + lname;

  return (
    <>
      <Icon bgcolor={select.bgcolor} color={select.color}>
        {initials}
      </Icon>
      {fullname}
    </>
  );
}

IconName.propTypes = {
  fullname: PropTypes.string.isRequired,
};
