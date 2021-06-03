import React, { useState } from "react";
import Header from "./component/Layout/Header";
import Meals from "./component/Meals/Meals";
import Cart from "./component/Cart/Cart";
function App() {
  const [cartShow, setCartShow] = useState(false);
  const showHandler = () => {
    setCartShow(true);
  };
  const hideHandler = () => {
    setCartShow(false);
  };
  return (
    <React.Fragment>
      {cartShow && <Cart hideshow={hideHandler} />}
      <Header addshow={showHandler} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
