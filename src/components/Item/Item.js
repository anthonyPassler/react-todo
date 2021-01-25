import React from 'react';
import './Item.scss';

const Item = ({ todo }) => {
  return (
    <div className="item">
      <h3>{todo}</h3>
    </div>
  );
}

export default Item;
