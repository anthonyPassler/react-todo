import React from 'react';
import './ItemList.scss';
import Item from '../Item/Item.js'

const ItemList = (props) => {
  return (
    <div>
      {props.todoList.map((item, index) => <Item key={index} todo={item}/>)}
    </div>
  );
}

export default ItemList;
