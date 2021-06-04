import classes from "./MealItem.module.css";
import MenuItemForm from "./MealItemform";
import { useContext } from "react";
import CardContext from "../../../Store/Cart-context";
const MealItem = (props) => {
  const ctx = useContext(CardContext);
  const price = `$${props.price.toFixed(2)}`;
  const handleAmount = (amount) => {
    const item = {
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    };
    ctx.addItem(item);
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MenuItemForm addAmount={handleAmount} />
      </div>
    </li>
  );
};
export default MealItem;
