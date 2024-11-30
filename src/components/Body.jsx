import RestaurantCard from "./RestaurandCard";
import { resList } from "../utils/mockData";

const Body = () => {
    return (
      <div className="body">
        <div className="search">
          <input type="text" placeholder="search....." />
        </div>
        <div className="restaurantContainer">
          {resList.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
          ))}
        </div>
      </div>
    );
  };
export default Body;