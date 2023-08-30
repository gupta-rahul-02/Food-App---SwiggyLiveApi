import { useState } from "react";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import useRestaurant from "../utils/useRestaurant";
import useOnline from "../utils/useOnline";

export const Body = () => {
  const [searchText, setSearchText] = useState("");
  const { allRestaurant,setFilteredRestaurant, filteredRestaurant } = useRestaurant();
  const isOnline = useOnline()

  if (!isOnline){
    return <h1>You Are Offline!!! Please check your connection</h1>
  }
  //early return
  if (!allRestaurant) return null;
  return allRestaurant.length === 0 ? (
    <div className="flex flex-wrap mt-36">
      {Array.from({ length: 10 }).map((el, i) => {
        return <Shimmer key={i}></Shimmer>;
      })}
    </div>
  ) : (
    <div className="mt-36">
      <div className="ml-4 ">
        <input
          type="text"
          className="border border-orange-400 p-[4px] hover:shadow-xl hover:bg-orange-50"
          value={searchText}
          placeholder="Search"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
        className="ml-4 border bg-orange-400 p-[4px]"
          onClick={() => {
            const data = filterData(searchText, allRestaurant);
            setFilteredRestaurant(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurant.length === 0 ? (
          <h1>No Restaurant Found</h1>
        ) : (
          filteredRestaurant.map((restaurant) => {
            return (
              
              <RestrauntCard {...restaurant.info} key={restaurant.info.id} />
              
            );
          })
        )}
      </div>
    </div>
  );
};
