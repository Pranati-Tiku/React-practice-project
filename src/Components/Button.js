import classes from './Button.module.css';
const Button=({onClick})=>{
    return <button className={classes.button} onClick={onClick}>
        Show/Hide
    </button>
};
export default Button;