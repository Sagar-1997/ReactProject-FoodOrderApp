import classes from "./Input.module.css";
const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />{" "}
      {/* ...props.input will add all the attritube of input like type id name etc what ever present in props.input*/}
    </div>
  );
};
export default Input;
