import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../../components/mocks/RestaurantCardMock.json";
import RestaurantCard from "../RestaurantCard";
import "@testing-library/jest-dom"


describe("Should render the Restaurant Card", () => {
  it("Should render the restaurant card", () => {
    render(<RestaurantCard resData={MOCK_DATA}/>);
    const name = screen.getByText("Burger King");
    expect(name).toBeInTheDocument();
  });
});
