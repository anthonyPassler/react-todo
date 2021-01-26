import React from 'react';
import './ItemList.scss';
import Item from '../Item/Item.js'

const ItemList = ({ todoList }) => {
  return (
    <div>
      {todoList.map((item, index) => <Item key={index} todo={item}/>)}
    </div>
  );
}

export default ItemList;
