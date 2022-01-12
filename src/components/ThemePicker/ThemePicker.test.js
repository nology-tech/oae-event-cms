import { render, screen } from "@testing-library/react";
import ThemePicker from "./ThemePicker";

// it should render the theme picker form
it("should render the theme picker form", () => {
  render(<ThemePicker />);

  const form = screen.getByRole("form");

  expect(form).toBeInTheDocument();
})

// it should render the font input field

// it should render the colour picker fields for theme, accent and subtitle

// the font input field should be required

// when the inputs for the colours are clicked, it should show the colour picker 

// when the next button is clicked it should go to the next page
