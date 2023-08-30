import { useState, useEffect } from "react";
import { restaurantMenuCDN , proxyCDN} from "../constants/constants";
const useRestaurantMenu = (resId) => {
  const [restaurant, setRestaurant] = useState({});
  const [menu, setMenu] = useState({});
  useEffect(() => {
    getRestrauntInfo();
  }, []);

  const getRestrauntInfo = async () => {
    const data = await fetch(proxyCDN+restaurantMenuCDN+resId);
    const json = await data.json();
    {
    }
    json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards === undefined
      ? setMenu(
          json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[3].card.card
            .itemCards
        )
      : setMenu(
          json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
            ?.card?.card?.itemCards
        );

    setRestaurant(json?.data?.cards[0]?.card?.card?.info);
  };
  return { restaurant, menu };
};

export default useRestaurantMenu;
