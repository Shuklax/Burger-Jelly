import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test cases", () => {
  beforeAll(() => {
    console.log("before all");
  });

  afterAll(() => {
    console.log("after all");
  });

  beforeEach(() => {
    console.log("before each");
  });

  afterEach(() => {
    console.log("after each");
  });
});

test("Should load contact us component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  //assertion
  expect(heading).toBeInTheDocument();
});

describe("Should load the button", () => {
  test("Should load the button by role", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  it("Should load the button by text", () => {
    render(<Contact />);
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });
});

test("Should load the input field with the placeholder 'name'", () => {
  render(<Contact />);
  const input = screen.getByPlaceholderText("name...");
  expect(input).toBeInTheDocument();
});

it("Should load 2 input boxes", () => {
  render(<Contact />);

  //Querying
  const inputBoxes = screen.getAllByRole("textbox");

  //Assertion
  expect(inputBoxes).toHaveLength(2);
  //expect(inputBoxes).toBe(2)
  //expect(inputBoxes).not.toHaveLength(3)
  //expect(inputBoxes).not.toBe(3)
});
