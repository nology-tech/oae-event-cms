import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EventList from "./EventsList";

// 1st RTL Test Case
it("should render the form", () => {
  // Arrange
  render(<EventList />);
  // Act
  const component = screen.getByRole("EventList");
  // Assert
  expect(component.find("EventList")).toExist();
});
