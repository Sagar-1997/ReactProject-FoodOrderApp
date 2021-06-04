import classes from "./Input.module.css";
import React from "react";
//if we want to use Ref is custom component then we have to use React.ForwardRef
//forwarding
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />{" "}
      {/* ...props.input will add all the attritube of input like type id name etc what ever present in props.input*/}
    </div>
  );
});
export default Input;
