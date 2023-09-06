import { imageCDN } from "../constants/constants";
import { useDispatch } from "react-redux";
import { addQuantity, removeItem, removeQuantity } from "../utils/cartSlice";
const FoodCard = ({ name, price, imageId, count, description, id }) => {
  const item = {
    name: name,
    imageId: imageId,
    price: price,
    description: description,
    id: id,
    count: count,
  };
  const dispatch = useDispatch();
  const handleCount = () => {
    dispatch(addQuantity(item));
  };
  const handleDecreaseCount = () => {
    dispatch(removeQuantity(item));
  };
  return (
    <>
      <div className="border border-solid border-orange-300 w-[18%] p-3 m-[1%] h-80 shadow hover:bg-orange-50 ">
        <h1 className="font-bold">{name.length > 25 ? name.slice(0,25)+"..." : name}</h1>
        <img className="w-[100%] h-[50%]" src={imageCDN + imageId}></img>
        <h3 class="italic">
          {description.length > 60
            ? description.slice(0, 59) + "...."
            : description}
        </h3>
        <p className="w-[450px font-light">
          {Math.ceil(price / 100)}
          /- Rs.
        </p>
        <div className="flex flex-row items-start  border border-orange-200 bg-orange-400  w-[50%] mx-[25%] gap-8  ">
          <button className="w-[25%] font-semibold " onClick={() => handleCount(item)}>
            +
          </button>
          <p className="font-bold">{count}</p>
          <button
            className="w-[25%] font-bold"
            onClick={() => handleDecreaseCount(item)}
          >
            -
          </button>
        </div>
      </div>
    </>
  );
};

export default FoodCard;
