import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import WelcomePage from "./WelcomePage";

xdescribe("should render welcomepage components", () => {
  // Testing heading is on the page
  it("should render heading", () => {
    //Arrange
    render(<WelcomePage />);
    // //Act - clicking, entering text input
    const form = screen.getByRole("heading");
    //Assert
    expect(form).toBeInTheDocument();
  });

  // Testing button is on the page
  it("should render button", () => {
    //Arrange
    render(<WelcomePage />);
    // //Act - clicking, entering text input
    const button = screen.getByRole("button");
    //Assert
    expect(button).toBeInTheDocument();
  });

  // Testing logo is on the page
  it("should render logo", () => {
    //Arrange
    render(<WelcomePage />);
    // //Act - clicking, entering text input
    const logo = screen.getByRole("link");
    //Assert
    expect(logo).toBeInTheDocument();
  });

  // Testing username input is on the page
  it("should render user input", () => {
    //Arrange
    render(<WelcomePage />);
    // //Act - clicking, entering text input
    const userInput = screen.getAllByRole("textbox");
    //Assert
    userInput.forEach((input) => {
      expect(input).toBeInTheDocument();
    });
  });
});
