import classes from "./MealItemform.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";
const MenuItemForm = (props) => {
  const [valid, setAmount] = useState(true);
  const Inputamount = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enterAmount = Inputamount.current.value;
    const numAmount = +enterAmount;
    if (enterAmount.trim().length === 0 || numAmount < 1 || numAmount > 5) {
      setAmount(false);
      return;
    }
    props.addAmount(numAmount);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        ref={Inputamount}
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+Add</button>
      {!valid && <p>Amount is invalid</p>}
    </form>
  );
};
export default MenuItemForm;
