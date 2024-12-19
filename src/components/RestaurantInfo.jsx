import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { resInfoUrl } from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantInfo = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines, avgRating } =
    resInfo?.data?.cards[2]?.card?.card?.info || {};

  const itemCards =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards || [];

  console.log(resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR)

  return (
    <div className="text-center">
      <h1 className="my-4 font-bold text-2xl">{name}</h1>
      <p className="text-lg mb-4 font-semibold">{`${cuisines.join(
        ", "
      )} - ${costForTwoMessage} - ${avgRating}⭐`}</p>
      <div className="RestaurantMenu">
        <ul>
          {itemCards.map((foodItem, index) => (
            <li key={foodItem.card.info.id || index}>
              {`${foodItem.card.info.name} - Rs${
                foodItem.card.info.defaultPrice / 100 ||
                foodItem.card.info.price / 100
              }`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantInfo;
