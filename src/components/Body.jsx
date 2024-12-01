import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useEffect, useState } from "react";
import "../../App.css";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(()=>{
    fetchData();
  }, [])

  const fetchData =  async() => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.49690&lng=80.32460&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const jsonData = await data.json();
    console.log(jsonData);

    setListOfRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  if(listOfRestaurants.length===0){
    return <Shimmer/>;
  }

  return (
    <div className="body">
      <div className="body-header">
        <div className="search">
          <input type="text" placeholder="search....." />
        </div>
        <div className="filter">
          <button
            onClick={() => {
              const newListOfRestaurants = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.3
              );
              setListOfRestaurants(newListOfRestaurants);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="restaurantContainer">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};
export default Body;
