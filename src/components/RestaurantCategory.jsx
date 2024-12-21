import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowItems }) => {
  const { itemCards } = data;

  function handleClick(){
    setShowItems();
  }

  return (
    <div className="w-6/12 bg-gray-100 m-auto my-4 px-8 py-4 shadow-lg rounded-lg">
      {/* {Accordion Header} */}
      <div className="flex justify-between mb-4" onClick={()=> handleClick()}>
        <p className="font-extrabold text-lg">
          {data.title} ({data.itemCards.length})
        </p>
        <span className={showItems ? "rotate-180" : ""}>⬆️</span>
      </div>
      
      {/* {Accordion Body} */}
      <p>
        {itemCards.map((i) => (
          showItems && <ItemList key={i?.card?.info?.id} data={i?.card?.info} />
        ))}
      </p>
    </div>
  );
};

export default RestaurantCategory;
