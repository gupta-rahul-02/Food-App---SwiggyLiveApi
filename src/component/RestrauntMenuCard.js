import { imageCDN } from "../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getItemCount } from "../utils/cartSlice";
const RestrauntMenuCard = ({
  imageId,
  name,
  price,
  description,
  itemAttribute,
  defaultPrice,
  id,
}) => {
  const item = {
    name: name,
    imageId: imageId,
    price: price,
    description: description,
    id: id,
    count: 1,
  };
  typeof price === "undefined"
    ? (item.price = defaultPrice)
    : (item.price = price);
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="border-b border-orange-200 w-[45%] m-[1%] h-52 p-5 flex flex-row overflow-auto  hover:bg-orange-50">
      <div className="flex flex-col gap-3">
        {itemAttribute.vegClassifier === "VEG" ? (
          <img
            className="w-10 h-6"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Veg_symbol.svg"
          ></img>
        ) : (
          <img
            className="w-10 h-6"
            src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Non_veg_symbol.svg"
          ></img>
        )}
        <h3 className="text-lg font-semibold">{name.length > 50 ? name.slice(0,49)+"..." : name }</h3>
        <p className="w-[450px font-light">
          {Math.ceil(item.price / 100)}
          /- Rs.
        </p>
        <p className="w-[450px] font-light">
          {typeof description === "undefined"
            ? null
            : description.length > 180
            ? description.slice(0, 179) + "..."
            : description}
        </p>
      </div>
      <div className="flex flex-col justify-end overflow-auto ">
        <img className="h-[100%] w-[100%]" src={imageCDN + imageId}></img>
        <button
          className="rounded-none bg-orange-500 p-2 w-20 ml-[30%]"
          onClick={() => handleAddItem(item)}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default RestrauntMenuCard;
