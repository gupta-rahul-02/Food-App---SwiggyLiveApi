import { Link } from "react-router-dom"
const EmptyCart = () =>{
    return(
        <div className="mt-35 px-[35%] flex flex-col mb-20 gap-4 ">
            <img className="h-[256px] w-[271px]" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"></img>
            <h2 className="px-[15%]">Your cart is empty</h2>
            <p className="w-[100%] font-light text-gray-500" >You can go to home page to view more restaurants</p>
            <Link to="/">
            <button className="bg-orange-400 w-80">SEE RESTAURANTS NEAR YOU</button>
            </Link>
            
        </div>

    )
}

export default EmptyCart