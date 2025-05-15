import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Counter from "../components/Counter";

describe("<Counter />", () => {
  it("renders the initial count correctly", () => {
    const { getByText } = render(<Counter />);
    expect(getByText("Count: 0")).toBeTruthy();
  });

  it('increments the count when the "Increment" button is pressed', () => {
    const { getByText } = render(<Counter />);
    const incrementButton = getByText("Increment");
    fireEvent.press(incrementButton);
    expect(getByText("Count: 1")).toBeTruthy();
  });

  it('decrements the count when the "Decrement" button is pressed', () => {
    const { getByText } = render(<Counter />);
    const decrementButton = getByText("Decrement");
    fireEvent.press(decrementButton);
    expect(getByText("Count: -1")).toBeTruthy();
  });
});
