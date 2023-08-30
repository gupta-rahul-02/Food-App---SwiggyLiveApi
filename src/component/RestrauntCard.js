import { imageCDN } from "../constants/constants";
import { Link } from "react-router-dom";
const RestrauntCard = ({name,cloudinaryImageId,avgRating,locality,cuisines,id}) => {
    return (
      <div className="border border-solid border-orange-300 w-[18%] p-3 m-[1%] h-72 shadow hover:shadow-xl hover:bg-orange-50 hover:italic  ">
        <Link to={"/restaurant/" + id}  >
        <img className="w-[100%] h-[60%]" src={imageCDN+cloudinaryImageId}></img>
        <h2 className="text-xl font-semibold">{(name.length > 22) ? name.slice(0,23)+"..." : name}</h2>
        {/* <h3>{cuisines.toString()}</h3> */}
        <h3 className="italic">{(cuisines.toString().length > 30) ? cuisines.toString().slice(0,30)+"..." : cuisines.toString()}</h3>
        {/* <h3>Location: {locality}</h3> */}
        <h4 className="font-semibold">{avgRating} Rating</h4>
        </Link>
      </div>
    );
  };

export default RestrauntCard