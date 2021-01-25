import './App.scss';
import Header from './components/Header/Header.js'
import Item from './components/Item/Item.js'
import ItemList from './components/ItemList/ItemList.js'

const App = () => {
  const todoMessgaes = ["Wash-up", "Cook Dinner", "work-out"]

  return (
    <div className="banner">
      <Header headline="TODO"/>
      <Item todo={"Cook dinner"}/>
      <ItemList todoList={todoMessgaes}/>
    </div>
  );
}

export default App;
