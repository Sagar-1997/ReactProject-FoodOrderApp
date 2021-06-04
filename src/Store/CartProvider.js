import CartContext from "./Cart-context";
import { useReducer } from "react";
const defaultState = {
  items: [],
  totalAmount: 0,
};
const CartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    console.log(updatedItems);
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let UpdateItems;
    const updateAmount = state.totalAmount - existingCartItem.price;
    if (existingCartItem.amount === 1) {
      UpdateItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updateItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      UpdateItems = [...state.items];
      UpdateItems[existingCartItemIndex] = updateItem;
    }
    return {
      items: UpdateItems,
      totalAmount: updateAmount,
    };
  }
  return defaultState;
};
const CartProvider = (props) => {
  const [CartState, DispatchCartAction] = useReducer(CartReducer, defaultState);
  const addItemHandler = (Item) => {
    DispatchCartAction({ type: "ADD_ITEM", item: Item });
  };
  const removeItemHandler = (id) => {
    DispatchCartAction({ type: "REMOVE_ITEM", id: id });
  };
  const cartContext = {
    items: CartState.items,
    totalAmount: CartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
