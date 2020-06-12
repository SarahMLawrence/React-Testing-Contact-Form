import React from "react";
import {
  render,
  fireEvent,
  getByAltText,
  getByLabelText,
  getByPlaceholderText,
  getByText,
  getAllByLabelText,
} from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

test("renders App without crashing", () => {
  render(<App />);
});

//=========//
//  TESTS  //
//=========//

it("submits correct values", () => {
  const { container } = render(<App />);

  //========================================================================//
  //  querySelector: returns the first Element within the document that     //
  //                  matches the specified selector                        //
  //========================================================================//
  const fname = container.querySelector('input[name="firstName"]');
  const lname = container.querySelector('input[name="lastName"]');
  const email = container.querySelector('input[name="email"]');
  // const submit = container.querySelector('button[type="submit"]')
});

it("submits", () => {
  //==========================================================================//
  //  jest.fn: method that allows us to create a new mock function directly.  //
  //==========================================================================//
  const onSubmit = jest.fn();
  const { getByPlaceholderText } = render(<ContactForm onSubmit={onSubmit} />);
  fireEvent.submit(getByPlaceholderText("submit"));
  // expect(onSubmit).toHaveBeenCalled();
});

test("Firs tName Input label: ", () => {
  const { getByPlaceholderText } = render(<App />);
  getByPlaceholderText("First Name");
});

test("Last Name Input label: ", () => {
  const { getByPlaceholderText } = render(<App />);
  getByPlaceholderText("Last Name");
});

// Stretch

test("Select a city", () => {
  const { getByPlaceholderText } = render(<App />);
  getByPlaceholderText("Choose");
});
