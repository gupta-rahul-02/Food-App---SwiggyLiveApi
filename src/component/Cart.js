import { useSelector, useDispatch } from "react-redux";
import FoodCard from "./FoodCard";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems)
  const dispatch = useDispatch();
  const getTotal = () => {
    let total = cartItems.reduce((prev, curr) => {
      let s;
      typeof curr.price === "undefined"
        ? (s = prev + Math.floor(curr.defaultPrice / 100))
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
          <FoodCard key={item.id} {...item} />
        ))}
      </div>
      <div className="border border-orange-300 pl-[45%] pr-[30%] flex gap-16 ">
        {getTotal() === 0 ? (
          <Link to={"/"}>
          <button className="border border-green-200 bg-green-400 pl-10 pr-10  ">Explore</button>
          </Link>
        ) : (
          <div className="flex gap-16">
             <Link to={"/order"}>
            <button
              className="border border-green-200 bg-green-400 p-1"
              onClick={() => handleClearCart()}
            >
              Place Order
            </button>
          </Link>
          <p className="font-bold">Total Amount :- {getTotal()}</p>
            <button
          className="border border-red-50 bg-red-400 p-1"
          onClick={() => handleClearCart()}
        >
          Clear Cart
        </button>
          </div>
         
          
        )}

       
  
        
      </div>
    </>
  );
};

export default Cart;
