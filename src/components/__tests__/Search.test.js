import { act, fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/BodyDataMock.json";
import Body from "../Body";
import "@testing-library/jest-dom";


global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

describe("Should load the Body component with the buttons", () => {
  test("Should load the Body component with the 'Search' button", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      );
    });

    const searchBtn = screen.getByRole("button", { name: "Search" });

    expect(searchBtn).toBeInTheDocument();
  });

  it("Should load the Body component with the 'Top Rated Restaurants' button", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      );
    });

    const topRatedBtn = screen.getByRole("button", {
      name: "Top Rated Restaurants",
    });

    expect(topRatedBtn).toBeInTheDocument();
  });
});

describe("Should search API mock data for input 'ice cream'", () => {
  test("Should correctly search for the input 'ice cream'", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      );
    });

    const cardsBeforeSearch = screen.getAllByTestId("res-card");

    expect(cardsBeforeSearch.length).toBe(20);

    const searchBtn = screen.getByRole("button", { name: "Search" });

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, { target: { value: "ice cream" } });

    fireEvent.click(searchBtn);

    const cards = screen.getAllByTestId("res-card");

    expect(cards.length).toBe(4);
  });
});

it("Should filter the API mock data for top rated restaurants", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsBeforeFilter = screen.getAllByTestId("res-card")

  expect(cardsBeforeFilter.length).toBe(20);

  const topRestaurantsButton = screen.getByRole("button", {name: "Top Rated Restaurants"})

  fireEvent.click(topRestaurantsButton);

  const cardsAfterFilter = screen.getAllByTestId("res-card");

  expect(cardsAfterFilter.length).toBe(9);
});
