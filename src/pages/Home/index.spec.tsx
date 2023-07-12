import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Home from ".";

describe("Testing home component", () => {
  test("Should be have a h1 element in screen", () => {
    const { getByText } = render(<Home />);

    expect(getByText("Hello World")).toBeInTheDocument();
  });
});
