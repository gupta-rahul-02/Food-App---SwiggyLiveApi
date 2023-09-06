import { useSelector, useDispatch } from "react-redux";
import FoodCard from "./FoodCard";
import { clearCart, removeItem } from "../utils/cartSlice";
import { Link } from "react-router-dom";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const cartValue = useSelector((store) => store.cart.cartValue)
  const totalCartItem = useSelector(store => store.cart.totalQuantity)
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleRemoveItem = () => {
    dispatch(removeItem());
  };

  return (
    <>
    
      

      <div className=" flex flex-wrap mt-40">
        {cartItems.map((item) => (
          <FoodCard key={item.id} {...item} />
        ))}
      </div>

      {
        cartValue === 0 ? <EmptyCart/> : 
        <div className=" px-[35%] flex gap-16 ">
          <div className="flex gap-16">
            <Link to={"/order"}>
              <button
                className="border border-green-200 bg-green-400 p-1 h-[100%] w-40 shadow-lg hover:shadow hover:italic"
                onClick={() => handleClearCart()}
              >
                Place Order
              </button>
            </Link>
            <p className="font-bold">Total Amount :- {cartValue}</p>
            <button
                className="border border-red-50 bg-red-400 p-1 h-[100%] w-40 hover:font-bold shadow-lg hover:shadow"
              onClick={() => handleClearCart()}
            >
              Clear Cart
            </button>
          </div>
        </div>
      }
      
      {/* <div className="border border-orange-300 px-[45%] flex gap-16 ">
        {cartValue === 0 ? (
          <Link to={"/"}>
            <button className="border border-green-200 bg-green-400 pl-10 pr-10  ">
              Explore
            </button>
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
            <p className="font-bold">Total Amount :- {cartValue}</p>
            <button
              className="border border-red-50 bg-red-400 p-1"
              onClick={() => handleClearCart()}
            >
              Clear Cart
            </button>
          </div>
        )}
      </div> */}
    </>
  );
};

export default Cart;
