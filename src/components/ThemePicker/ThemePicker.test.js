import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ThemePicker from "./ThemePicker";

it("should render the theme picker form", () => {
   render(<ThemePicker />);

   const form = screen.getByRole("form");

   expect(form).toBeInTheDocument();
})

it("should allow the user to change the font type", () => {
   const { getByLabelText, getByText } = render(<ThemePicker />);

   userEvent.selectOptions(getByLabelText("Font Type"), "Modern")

   expect((getByText("Modern")).selected).toBeTruthy();
   expect((getByText("Classic")).selected).toBeFalsy();
})

it("should render the color inputs", () => {
   render(<ThemePicker />)

   const themeInput = screen.getByTestId("theme", { name: "themeColor" })
   const accentInput = screen.getByTestId("accent", { name: "accentColor" })
   const subtitleInput = screen.getByTestId("subtitle", { name: "subtitleColor" })

   expect(themeInput).toBeInTheDocument();
   expect(accentInput).toBeInTheDocument();
   expect(subtitleInput).toBeInTheDocument();
})

it("should show the hexcode value that matches the selected color on the input", () => {
   render(<ThemePicker />)

   const themeInput = screen.getByTestId("theme", { name: "themeColor" })

   fireEvent.input(themeInput, { target: { value: '#333333' } })
   expect(themeInput).toHaveValue("#333333")
})