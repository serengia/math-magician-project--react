import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from "react-test-renderer";

import Calculator from "./Calculator";

it("renders correctly", () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe("User interactions", () => {
  test("if the right value is passed upon a click", () => {
    // Arrange
    render(<Calculator />);

    // Act
    let buttonElement;
    act(() => {
      buttonElement = screen.getByText("AC");
      userEvent.click(buttonElement);
    });

    // Assert
    const outputElement = buttonElement;

    expect(outputElement.textContent).toBe("AC");
  });
});
