import React, { useState, Fragment } from "react";
import Items from "./Components/Items";
import InputForm from "./Components/InputForm";
import Button from "./Components/Button";
import classes from './App.module.css'
const DUMMY_ARRAY = [
  { label: "Apple", id: "a1" },
  { label: "Orange", id: "a2" },
  { label: "Banana", id: "a3" },
];
function App() {
  const [showItem, setShowItem] = useState(true);
  const [listItems, setListItems] = useState(DUMMY_ARRAY);
  const clickHandler = () => {
    setShowItem(!showItem);
  };
  const deleteButtonHandler=(id)=>{

    setListItems((prevState)=>{
      const updatedItems=prevState.filter(item=>item.id!==id);
      return updatedItems;
    })
  }
  const addUserInput = (enteredText) => {
    setListItems((prevState) => {
      return [...prevState, { label: enteredText, id: Math.random().toString() }];
    });
  };

  return (
    <div className={classes.App}>
      <InputForm onAddUserInput={addUserInput} />
      <Button onClick={clickHandler} />
      {showItem && <Items items={listItems} deleteButtonClick={deleteButtonHandler} />}
    </div>
  );
}

export default App;
