import React from 'react';
import './Header.scss';

const Header = ({ headline }) => {
  return (
    <div>
      <h1>{headline}</h1>
    </div>
  );
}


export default Header;
