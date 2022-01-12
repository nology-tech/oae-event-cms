import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ThemePicker from "./ThemePicker";

// it should render the theme picker form
it("should render the theme picker form", () => {
  render(<ThemePicker />);

  const form = screen.getByRole("form");

  expect(form).toBeInTheDocument();
})

// the user should be able to change the font type
it("should allow to the user to change the font type", () => {
  const {getByLabelText, getByText} = render(<ThemePicker />);

  userEvent.selectOptions(getByLabelText("Font Type"), "Modern")
  expect((getByText("Modern")).selected).toBeTruthy();
  expect((getByText("Classic")).selected).toBeFalsy();
})

// it should render the colour picker fields for theme, accent and subtitle

// the font input field should be required

// when the inputs for the colours are clicked, it should show the colour picker 

// when the next button is clicked it should go to the next page
