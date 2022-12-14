import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Counter from "./index";

describe("counter tests", () => {
  let increaseBtn, decreaseBtn, count;
  
  const setup = () => render(<Counter />);
  beforeEach(() => {
    console.log("Her testten önce çalışacağım")
    // eslint-disable-next-line testing-library/no-render-in-setup
    setup();
    increaseBtn = screen.getByText("Increase");
    decreaseBtn = screen.getByText("Decrease");
    count = screen.getByText("0");
  });

  beforeAll(() => {
    console.log("bir kere çalışacağım")
  });

  afterAll(() => {
    console.log("En son bir kere çalışacağım")
  });

  afterEach(() => {
    console.log("Her testten sonra çalışacağım")
  })

  test("increase btn", () => {
    userEvent.click(increaseBtn);
    expect(count).toHaveTextContent("1");
  });

  test("decrease btn", () => {
    userEvent.click(decreaseBtn);
    expect(count).toHaveTextContent("-1");
  });
});
