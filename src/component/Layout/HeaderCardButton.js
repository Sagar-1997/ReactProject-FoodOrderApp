import classes from "./HeaderCardButton.module.css";
import CardIcon from "../Cart/CardIcon";
const Button = () => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CardIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};
export default Button;
