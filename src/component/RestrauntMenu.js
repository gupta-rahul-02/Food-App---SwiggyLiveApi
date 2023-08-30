import { useParams } from "react-router-dom";
import RestrauntMenuCard from "./RestrauntMenuCard";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
//import { useDispatch } from "react-redux";
const RestrauntMenu = () => {
  const { resId } = useParams();
  const  {restaurant,menu} = useRestaurantMenu(resId)

  return(Object.values(menu).length === 0) ? <div className="flex flex-wrap">
  {Array.from({length:10}).map((el,i) =>{
  return <Shimmer key={i}></Shimmer>
})} 
 </div>:(
    
    <>
    <div className="flex pl-[25%] pr-[25%] flex-col items-center gap-3 mt-36">
    <h1 className="text-2xl font-semibold">Restraunt Menu</h1>
      <h2 className="text-xl font-bold">{restaurant.name}</h2>
      <h3>
        {restaurant.locality} , {restaurant.areaName}
      </h3>
    </div>
    
      <div className="border-t border-orange-300 mt-7 flex flex-col items-center">
        {Object.values(menu).map((item) => (
            <RestrauntMenuCard key={item?.card?.info?.id} {...item?.card?.info}/>
        ))}
      </div>
    </>
  );
};

export default RestrauntMenu;
