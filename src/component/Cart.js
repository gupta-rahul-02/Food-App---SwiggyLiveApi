import { useSelector, useDispatch } from "react-redux";
import FoodCard from "./FoodCard";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const getTotal = () => {
    let total = cartItems.reduce((prev, curr) => {
      let s;
      typeof curr.price === "undefined"
        ? (s = prev + Math.floor(curr.defaultValue / 100))
        : (s = prev + Math.floor(curr.price / 100));
      return s;
    }, 0);
    return total;
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <h1 className="font-bold text-3xl">Cart Items - {cartItems.length}</h1>
      <div className="mt-32 flex flex-wrap ">
        {cartItems.map((item) => (
          <FoodCard {...item} />
        ))}
      </div>
      <div className="border border-orange-300 pl-[40%] pr-[20%] flex gap-16 ">
        <p className="font-bold">Total Amount :- {getTotal()}</p>
        <button
          className="border border-red-50 bg-red-400 p-1"
          onClick={() => handleClearCart()}
        >
          Clear Cart
        </button>
      </div>
    </>
  );
};

export default Cart;
