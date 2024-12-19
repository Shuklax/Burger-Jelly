import { CARD_IMG } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, avgRating, cuisines, locality, costForTwo, cloudinaryImageId } =
    resData;

  return (
    <div className="res-card m-6 p-4 w-[245px] rounded-xl bg-gray-100 hover:bg-gray-200">
      <div>
        <img
          src={CARD_IMG + cloudinaryImageId}
          className="res-card-img rounded-lg"
        />
      </div>

      <div className="res-body">
        <h3 className="font-bold py-2">{name}</h3>
        <h4>{avgRating}</h4>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{locality}</h4>
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard />
      </div>
    );
  };
};

export default RestaurantCard;
