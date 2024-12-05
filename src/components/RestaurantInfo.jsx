import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { resInfoUrl } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantInfo = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  const fetchMenu = async () => {
    try {
      const data = await fetch(`${resInfoUrl}${resId}`);
      const json = await data.json();
      console.log(json);
      setResInfo(json);
    } catch (error) {
      console.error("Error fetching menu:", error);
      setResInfo(null);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines, avgRating} =
    resInfo?.data?.cards[2]?.card?.card?.info || {};

  const itemCards =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards || [];

  return (
    <div className="RestaurantInfo">
      <h1>{name}</h1>
      <p>{`${cuisines.join(", ")} - ${costForTwoMessage}`}</p>
      <h2>Menu - {avgRating} stars</h2>
      <div className="RestaurantMenu">
        <ul>
          {itemCards.map((foodItem, index) => (
            <li key={foodItem.card.info.id || index}>
              {`${foodItem.card.info.name} - Rs${
                foodItem.card.info.defaultPrice / 100 || foodItem.card.info.price / 100
              }`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantInfo;
