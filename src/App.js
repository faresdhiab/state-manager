import React from 'react';
import './App.css';
import { useState } from 'react';
import TaskList from "./Components/TaskList"
import AddItem from "./Components/AddItem"

function App() {
  const[list, setList] = useState(["react", "redux"]);
  const addItem =(item) => {
    setList([item, ...list]);
  }
  const deleteItem =(indice)=>{
    setList(list.filter((el,i) => i !== indice))
  }
  return (
    <div className="App">
      <h1>TODO_LIST APP</h1>
      <AddItem addItem={addItem}/>
      <TaskList deleteItem={deleteItem} list={list}/>
    </div>
  );
}

export default App;
