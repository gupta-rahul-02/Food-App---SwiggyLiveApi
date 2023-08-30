import { imageCDN } from "../constants/constants";
const FoodCard = ({
  name,
  price,
  imageId,
  count,
  description,
  defaultPrice,
}) => {
  return (
    <>
      <div className="border border-solid border-orange-300 w-[18%] p-3 m-[1%] h-72 shadow hover:bg-orange-50">
        <h1 className="font-bold">{name}</h1>
        <img className="w-[100%] h-[50%]" src={imageCDN + imageId}></img>
        <h3 class="italic">
          {description.length > 60
            ? description.slice(0, 59) + "...."
            : description}
        </h3>
        <p className="w-[450px font-light">
          {typeof price === "undefined"
            ? Math.ceil(defaultPrice / 100)
            : Math.ceil(price / 100)}
          /- Rs.
        </p>
        <div className="flex flex-row items-center pl-20">
          {/* <button className="border border-orange-200 w-[25%] bg-orange-500">+</button>
          <p>{count}</p>
          <button className="border border-orange-200 w-[25%] bg-orange-500">-</button> */}
          {/* <button
            className="border border-r-orange-100 bg-orange-200"
            //onClick={() => handleRemove(name)}
          >
            Remove
          </button> */}
        </div>
      </div>
    </>
  );
};

export default FoodCard;
