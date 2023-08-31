import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Title = () => {
  return (
    <a href="/">
      <img
        className="w-28"
        src="data:image/png;base64,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"
      ></img>
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const cartItem = useSelector(store => store.cart.items)
  return (
    <div className="flex justify-between border-solid border-2 border-orange-400 fixed w-[100%] overflow-hidden top-0 bg-orange-100">
      <Title />
      <div>
        <ul className="flex gap-4">
          <Link to="/" class="p-3 hover:text-orange-500">
            <li>Home</li>
          </Link>
          <Link to="/about" className="p-3 hover:text-orange-500">
            <li>About</li>
          </Link>
          <Link to="/contact" className="p-3 hover:text-orange-500">
            <li>Contact</li>
          </Link>
          <Link to="/cart" className="p-3 hover:text-orange-500">
            <li>Cart {cartItem.length}</li>
          </Link>
          <Link to="/instamart" className="p-3 hover:text-orange-500">
            <li>Instamart</li>
          </Link>
        </ul>
      </div>
      {isLoggedIn ? (
        <button className="rounded-none bg-orange-500 h-10 m-8 p-2" onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <Link to={"/login"}>
        <button className="rounded-none bg-orange-500 h-10 m-8 p-2" onClick={() => setIsLoggedIn(true)}>Login</button>
        </Link>
      )}
    </div>
  );
};

export default Header;
