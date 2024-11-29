import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/logo.png";
import "./App.css";

const Header = () => (
  <div className="header">
    <div className="logo">
      <img src={logo} />
    </div>
    <div className="navbar">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li>
          <a href="#">Cart</a>
        </li>
      </ul>
    </div>
  </div>
);

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <div>
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597" className="res-card-img"/>
      </div>

      <div className="res-body">
        <h3 className="res-title">Meghana Foods</h3>
        <p>4.6</p>
        <p>kormangalam road, whitefield</p>
        <p>Indian, Chinese, Italian</p>
        <p>Rs. 500 for two people</p>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="search....." />
      </div>
      <div className="restaurantContainer">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const Footer = () => <div className="footer"></div>;

const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
