import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { resInfoUrl } from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantInfo = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines, avgRating } =
    resInfo?.data?.cards[2]?.card?.card?.info || {};

  const itemCards =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards || [];

  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR);
  // console.log(categories);

  return (
    <div className="text-center">
      <h1 className="my-4 font-bold text-2xl">{name}</h1>
      <p className="text-lg mb-4 font-semibold">{`${cuisines.join(
        ", "
      )} - ${costForTwoMessage} - ${avgRating}⭐`}</p>
      {/* {Restaurant category Accordion} */}
      {categories.map((category) => (
        <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card} />
      ))}
    </div>
  );
};

export default RestaurantInfo;
