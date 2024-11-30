import { CARD_IMG } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, rating, cuisines, locality, costForTwo, cloudinaryImageId } =
    resData;

  return (
    <div className="res-card" style={{ background: "#f0f0f0" }}>
      <div>
        <img src={CARD_IMG + cloudinaryImageId} className="res-card-img" />
      </div>

      <div className="res-body">
        <h3>{name}</h3>
        <br />
        <h4>{rating}</h4>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{locality}</h4>
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
};
export default RestaurantCard;
