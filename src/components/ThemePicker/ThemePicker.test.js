import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ThemePicker from "./ThemePicker";

// it should render the theme picker form
it("should render the theme picker form", () => {
  render(<ThemePicker />);

  const form = screen.getByRole("form");

  expect(form).toBeInTheDocument();
})

// the user should be able to change the font type
it("should allow the user to change the font type", () => {
  const {getByLabelText, getByText} = render(<ThemePicker />);

  userEvent.selectOptions(getByLabelText("Font Type"), "Modern")
  expect((getByText("Modern")).selected).toBeTruthy();
  expect((getByText("Classic")).selected).toBeFalsy();
})

// it should render the colour picker fields for theme, accent and subtitle
it("should render the color inputs", () => {
  //Arrange
  render(<ThemePicker/>)
  // Act
  const themeInput = screen.getByTestId("theme", {name: "Theme Color"})
  const accentInput = screen.getByTestId("accent", {name: "Accent Color"})
  const subtitleInput = screen.getByTestId("subtitle", {name: "Subtitle Color"})
  // Assert
  expect(themeInput).toBeInTheDocument();
  expect(accentInput).toBeInTheDocument();
  expect(subtitleInput).toBeInTheDocument();

})

// the font input field should be required **RE-VISIT**
// it("should not let you proceed to the next page if the font has not been chosen", ()=> {
//   //Arrange
//   render(<ThemePicker/>)
//   //Act
//   const nextButton = screen.getByTestId("nextButton")
//   userEvent.click
// })

// when the color inputs are clicked, and a color is chosen, the color shown should match the selected color
it("should show the hexcode value that matches the selected color on the input", ()=> {
render(<ThemePicker/>)

const themeInput = screen.getByTestId("theme", {name: "Theme Color"}) 
fireEvent.input(themeInput, {target: {value: '#333333'}})

expect(themeInput).toHaveValue("#333333")
})

// when the inputs for the colours are clicked, it should show the colour picker 

// when the next button is clicked it should go to the next page

