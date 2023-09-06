import { useState } from "react";
import { Link } from "react-router-dom";
import useLocationCoord from "../utils/useLocationCoords";
const Location = () => {
  const [city, setCity] = useState("");
  const {setLocal,getCoordinates} =  useLocationCoord()
  //console.log(coords)
  return (
    <div className="mt-36">
      <h1>Location</h1>
      <input
        type="text"
        placeholder="location"
        className="border border-orange-400 p-[4px] hover:shadow-xl hover:bg-orange-50"
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
      ></input>
      <Link to="/body">
      <button className="ml-4 border bg-orange-400 p-[4px]"
        onClick={() => {
          setLocal(city)
          
        }
        }
      >Submit</button>
      </Link>
      
    </div>
  );
};

export default Location;
