import './App.scss';
import Header from './components/Header/Header.js'
import ItemList from './components/ItemList/ItemList.js'
import AddItem from './components/AddItem/AddItem.js'
import React, { useState } from 'react';

const App = () => {
  const [todo, setTodo] = useState([]);

  const handleTodoState = (item) => {
    setTodo([...todo, item])
  }

  return (
    <div className="banner">
      <Header headline="TODO"/>
      <AddItem handleTodoState={handleTodoState}/>
      <ItemList todoList={todo}/>
    </div>
  );
}

export default App;
