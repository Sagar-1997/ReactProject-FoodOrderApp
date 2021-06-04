import { useState } from "react";
import Header from "./component/Layout/Header";
import Meals from "./component/Meals/Meals";
import Cart from "./component/Cart/Cart";
import CartProvider from "./Store/CartProvider";
function App() {
  const [cartShow, setCartShow] = useState(false);
  const showHandler = () => {
    setCartShow(true);
  };
  const hideHandler = () => {
    setCartShow(false);
  };
  return (
    <CartProvider>
      {cartShow && <Cart hideshow={hideHandler} />}
      <Header addshow={showHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
