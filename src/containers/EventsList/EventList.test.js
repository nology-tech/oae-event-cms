import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CreateEvent from "../CreateEvent/CreateEvent";
import EventsList from "./EventsList";


it("should render the Main Title of the Events List", () => {

  render(<EventsList />);

  const component = screen.getByRole('heading', { level: 2 });

  expect(component).toBeInTheDocument();
});


it("should render all the sub Headings of the Events List", () => {

  render(<EventsList />);

  const headings = screen.getAllByRole('heading', { level: 5 });

  headings.forEach(heading => {
    expect(heading).toBeInTheDocument();
  })
});


it("should render the add button on the Events List", () => {

  render(<EventsList />);

  const button = screen.getByRole('button');

  expect(button).toBeInTheDocument();
});

// write test to check the add button works
it("should redirect you to the create event page when you press the add button", () => {
  render(<EventsList/>);

  const button = screen.getByRole("button");
  userEvent.click(button);
  
  const eventsList = screen.getByRole("heading", {level: 2})

  expect(eventsList).not.toBeInTheDocument();
})

// write test to check the delete button works
it("should remove the event from the events list", () => {
  render(<EventsList/>);

  const deleteIcons = screen.getAllByAltText("bin button");

  
})

it("should load the icon images on the event cards", () => {
  render(<EventsList />);

  const editIcons = screen.getAllByAltText("edit button")
  const deleteIcons = screen.getAllByAltText("bin button")
  editIcons.forEach(editIcon => {
    expect(editIcon).toBeInTheDocument();
  })
  deleteIcons.forEach(deleteIcon => {
    expect(deleteIcon).toBeInTheDocument();
  })
})

it("should fill the searchbox with user input and change events displayed appropriately", () => {

  render(<EventsList />);

  const searchBox = screen.getByRole("textbox")
  const eventCardOne = screen.getByText("Infant Musicality")
  const eventCardTwo = screen.getByText("Can You Hear The Shape of a Drum?")

  userEvent.type(searchBox, "infant")

  expect(eventCardOne).toBeInTheDocument();
  expect(eventCardTwo).not.toBeInTheDocument();
});
