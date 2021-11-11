/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import { DifficultyBtn } from "../../../components/button/DifficultyBtn";

describe("Difficulty Component", () => {
  it("Testing Difficulty text prop", () => {
    const text = "Hard";
    render(<DifficultyBtn text={text} />);
    const btnText = screen.getByRole("button").textContent;
    expect(btnText).toEqual(text);
  });

  it("Test click event as prop", () => {
    const mockCallBack = jest.fn();
    render(<DifficultyBtn onClick={mockCallBack} />);
    screen.getByRole("button").click();
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  it("Test passing other props", () => {
    const title = "btn-title";
    render(<DifficultyBtn title={title} />);
    const btnTitle = screen.getByRole("button").title;
    expect(btnTitle).toEqual(title);
  });
});
