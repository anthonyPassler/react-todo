import './App.scss';
import Header from './components/Header/Header.js'
import Item from './components/Item/Item.js'
import ItemList from './components/ItemList/ItemList.js'
import React, { useState } from 'react';

const App = () => {
  const [todo, setTodo] = useState(["Wash-up", "Cook Dinner", "work-out"]);

  return (
    <div className="banner">
      <Header headline="TODO"/>
      <Item todo={"Cook dinner"}/>
      <ItemList todoList={todo}/>
    </div>
  );
}

export default App;
