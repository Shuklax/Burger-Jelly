import { screen, render, act, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cart from "../Cart";
import Body from "../Body";
import Header from "../Header"
import RestaurantInfo from "../RestaurantInfo";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import MOCK_DATA from "../mocks/menuDataMock.json";

global.fetch = jest.fn(()=>{
  return Promise.resolve({
    json: ()=> {
      return Promise.resolve(MOCK_DATA)
    }
  })
})

describe("Should render the accordion menu and add items to cart", () => {
  test("Should render the accordion menu when restaurant card is clicked", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Body />
            <RestaurantInfo />
          </Provider>
        </BrowserRouter>
      );
    });

    const cardItems = screen.getAllByTestId("res-card");

    fireEvent.click(cardItems[0]);

    const accordionHeader = screen.getByText("Recommended (14)");

    expect(accordionHeader).toBeInTheDocument();

    expect(screen.getAllByTestId("menuItem").length).toBe(14);

    const menuItems = screen.getAllByTestId("menuItems");

    const addBtn = screen.getAllByRole("button", {name: "ADD"});

  });
});

describe("Should render the Cart page with all the added items", () => {
  test("Should render the Cart page with all the added items", async () => {
    await act(async () => {
      render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header/>
          <Cart />
        </Provider>
      </BrowserRouter>)
    });
  });

  const cartItems = screen.getAllByTestId("menuItems");

  expect(cartItems.length).toBe(2)
});

describe("Should render the Cart page with the 'clear cart' button", () => {});
