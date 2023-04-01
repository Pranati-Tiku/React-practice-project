import classes from './InputButton.module.css';
const InputButton=props=>{
const deleteHandler=()=>{
    console.log(props.id)
    props.deleteItem(props.id);
}
    return <button className={classes.button} onClick={deleteHandler}>-</button>
};
export default InputButton;