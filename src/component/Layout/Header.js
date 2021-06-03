import mealImage from "../../assets/meals.jpg";
import { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCardButton from "./HeaderCardButton";
import Button from "./HeaderCardButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <Button />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImage} alt="food table" />
      </div>
    </Fragment>
  );
};
export default Header;
