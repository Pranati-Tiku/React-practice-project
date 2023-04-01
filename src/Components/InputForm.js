import classes from './InputForm.module.css';
import React,{useRef} from "react";
const InputForm=(props)=>{
    const submitHandler=(event)=>{
event.preventDefault();
const enteredText=userInput.current.value;
console.log(enteredText);
props.onAddUserInput(enteredText);
userInput.current.value='';
    }
    const userInput=useRef();
return <form onSubmit={submitHandler} className={classes.form}>
    <label htmlFor="inputText">Enter Input</label>
    <input type="text"
    id="inputText"
    ref={userInput}/>
    <button type="submit">Add</button>
</form>
};
export default InputForm;