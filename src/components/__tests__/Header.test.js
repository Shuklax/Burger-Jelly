import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import Header from "../Header";

describe("Should render the header component with login button", () => {
  it("Should render the login button by role", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("Should render the login button by text", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const button = screen.getByText("login");
    expect(button).toBeInTheDocument();
  });
});

it("Should load the header component with the button named login",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )

    const button = screen.getByRole('button', {name:"login"});
    expect(button).toBeInTheDocument();

}) //only to be used when you are searching one button among the rests

describe("Should render the cart with initial 0 items", () => {
  test("should render the cart with initial 0 items", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const cartItems = screen.getByText("Cart - (0 items)")
    expect(cartItems).toBeInTheDocument();
  });
});

test("Should render the header component and check the functionality of login button", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button", {name: "login"})

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name: "logout"})

    expect(logoutButton).toBeInTheDocument();
})