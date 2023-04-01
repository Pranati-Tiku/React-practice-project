import classes from "./Items.module.css";
import InputButton from "./InputButton";
const Items = (props) => {
    
  return (
    <div className={classes.items}>
      <ul>
        {props.items &&
          props.items?.map((item) => {
            return (
              <div>
                <li key={item.id}>{item.label}</li>
                <InputButton id={item.id} deleteItem={props.deleteButtonClick}/>
              </div>
            );
          })}
      </ul>
    </div>
  );
};
export default Items;
