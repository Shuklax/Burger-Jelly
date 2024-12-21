import { CDN_URL_MENU } from "../utils/constants";

const ItemList = ({ data }) => {
  return (
    <div className="text-left flex border-b-2 border-gray-300 p-3 py-6 ml-4 mt-3">
      <div className="w-9/12">
        <p className="font-bold text-lg">{data.name}</p>
        <p className="font-semibold text-base">
          ₹ {data.price ? data.price / 100 : data.defaultPrice / 100}
        </p>
        <p className="text-gray-500 font-normal pt-4">{data.description}</p>
      </div>
      <div className="w-3/12">
        <img
          className="w-36 h-36 relative left-9 bottom-3 rounded-xl z-0"
          src={CDN_URL_MENU + data.imageId}
        />
        <button className="font-bold text-lg rounded-lg shadow-lg bg-white text-orange-500 py-2 px-6 border relative bottom-8 left-16 z-10">
          ADD
        </button>
      </div>
    </div>
  );
};

export default ItemList;
