import { useContext, useState, useEffect } from "react";
import classes from "./HeaderCardButton.module.css";
import CardIcon from "../Cart/CardIcon";
import CartContext from "../../Store/Cart-context";
const Button = (props) => {
  const [enterAnim, setAnim] = useState(false);
  const ctx = useContext(CartContext);
  const { items } = ctx;
  const badgenumber = items.reduce((currValue, item) => {
    return currValue + item.amount;
  }, 0);
  const btnclasses = `${classes.button} ${enterAnim ? classes.bump : ""}`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setAnim(true);
    const timer = setTimeout(() => {
      setAnim(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnclasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CardIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{badgenumber}</span>
    </button>
  );
};
export default Button;
