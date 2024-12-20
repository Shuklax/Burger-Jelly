import RestaurantList from "./RestaurantList";

const RestaurantCategory = ({ data }) => {
  const { itemCards } = data;
  console.log(data);
  return (
    <div className="w-6/12 bg-gray-100 m-auto my-4 px-8 py-4 shadow-lg rounded-lg">
      {/* {Accordion Header} */}
      <div className="flex justify-between mb-4">
        <p className="font-extrabold text-lg">
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
