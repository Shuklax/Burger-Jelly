import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

test("Should load contact us component", ()=>{
    render(<Contact/>)

    const heading = screen.getByRole("heading")

    //assertion
    expect(heading).toBeInTheDocument()
})

test("Should load the button inside the contact us component", ()=>{
    render(<Contact/>)
    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument()
})

test("Should load the button based on text inside it", ()=>{
    render(<Contact/>)
    const button = screen.getByText("Submit")
    expect(button).toBeInTheDocument();
})

test("Should load the input field with the placeholder 'name'", ()=>{
    render(<Contact/>)
    const input = screen.getByPlaceholderText("name...")
    expect(input).toBeInTheDocument();
})