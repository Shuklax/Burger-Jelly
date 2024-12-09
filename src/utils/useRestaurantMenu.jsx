import { useEffect, useState } from "react";
import { resInfoUrl } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(`${resInfoUrl}${resId}`);
      const json = await data.json();
      console.log(json);
      setResInfo(json);
    } catch (error) {
      console.error("Error fetching menu:", error);
      setResInfo(null);
    }
  };

  return resInfo;
};

export default useRestaurantMenu;
