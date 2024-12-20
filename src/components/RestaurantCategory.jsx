import RestaurantList from "./RestaurantList";

const RestaurantCategory = ({ data }) => {
  const { itemCards } = data;
  console.log(data);
  return (
    <div className="w-6/12 bg-gray-200 m-auto my-4 p-2 shadow-lg rounded-lg">
      {/* {Accordion Header} */}
      <div className="flex justify-between">
        <p className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </p>
        <span>⬆️</span>
      </div>
      
      {/* {Accordion Body} */}
      <p>
        {itemCards.map((i) => (
          <RestaurantList data={i.card.info} />
        ))}
      </p>
    </div>
  );
};

export default RestaurantCategory;
