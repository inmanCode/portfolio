import React from 'react';
import '../icons.css';
const Icon = ({ svg, name }) => {
  return (
    <div className='icons'>
      <abbr title={name}>{svg}</abbr>
    </div>
  );
};

export default Icon;
