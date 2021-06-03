import classes from "./HeaderCardButton.module.css";
import CardIcon from "../Cart/CardIcon";
const Button = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CardIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};
export default Button;
