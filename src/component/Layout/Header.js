import mealImage from "../../assets/meals.jpg";
import { Fragment } from "react";
import classes from "./Header.module.css";
import Button from "./HeaderCardButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <Button onClick={props.addshow} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImage} alt="food table" />
      </div>
    </Fragment>
  );
};
export default Header;
