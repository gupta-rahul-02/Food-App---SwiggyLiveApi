import {useState, useEffect} from "react"
import { bangloreRestaurantsCDN , proxyCDN} from "../constants/constants";
//import useLocationCoord from "./useLocationCoords";
const useRestaurant = () =>{
    const [allRestaurant, setAllRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([])
    // const coords = useLocationCoord()
    // console.log(coords.coords)
    useEffect(() =>{
        getRestaurants()
      },[])
    
      async function getRestaurants() {
        const data = await fetch(proxyCDN+bangloreRestaurantsCDN)
        const json = await data.json();
        setAllRestaurant(json?.data?.cards[2]?.card?.card?.gridElements.infoWithStyle.restaurants)
        setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements.infoWithStyle.restaurants)
      }

      return{allRestaurant,filteredRestaurant,setFilteredRestaurant}
}


export default useRestaurant