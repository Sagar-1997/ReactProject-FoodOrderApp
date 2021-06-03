import Available from "./AvaiableMeals";
import MealsSummary from "./MealsSummary";
import { Fragment } from "react";
const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <Available />
    </Fragment>
  );
};
export default Meals;
