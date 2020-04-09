import React from 'react';
import PropTypes from 'prop-types';
import { sample } from 'lodash';

import { Image, Icon } from './styles';

export default function Avatar({ fullname, isPhoto, url, onlyIcon }) {
  const name = fullname.split(' ');
  const fname = name.shift();
  const lname = name.pop();

  if (isPhoto) {
    return (
      <>
        <Image
          src={url}
          alt={`${fname} ${lname}`}
          title={`${fname} ${lname}`}
        />
        {`${fname} ${lname}`}
      </>
    );
  }

  const pallete = [
    { bgcolor: '#F4EFFC', color: '#A28FD0' },
    { bgcolor: '#FCF4EE', color: '#CB946C' },
    { bgcolor: '#EBFBFA', color: '#83CEC9' },
    { bgcolor: '#FFEEF1', color: '#CC7584' },
    { bgcolor: '#F4F9EF', color: '#A8D080' },
    { bgcolor: '#FCFCEF', color: '#CCCC8B' },
  ];

  const select = sample(pallete);
  const initials = fname.split('').shift() + lname.split('').shift();

  return (
    <>
      <Icon bgcolor={select.bgcolor} color={select.color}>
        {initials}
      </Icon>
      {onlyIcon ? null : `${fname} ${lname}`}
    </>
  );
}

Avatar.propTypes = {
  fullname: PropTypes.string.isRequired,
  onlyIcon: PropTypes.bool,
  isPhoto: PropTypes.bool,
  url: PropTypes.string,
};

Avatar.defaultProps = {
  onlyIcon: false,
  isPhoto: false,
  url: '',
};
