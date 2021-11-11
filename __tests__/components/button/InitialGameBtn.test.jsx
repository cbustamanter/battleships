/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import { InitialGameBtn } from "../../../components/button/InitialGameBtn";

describe("InitialGameBtn Component", () => {
  it("Testing InitialGameBtn text", () => {
    const text = "testing btn";
    render(<InitialGameBtn text={text} />);
    const btnText = screen.getByRole("button").textContent;
    expect(btnText).toEqual(text);
  });

  it("Test click event as prop", () => {
    const mockCallBack = jest.fn();
    render(<InitialGameBtn onClick={mockCallBack} />);
    screen.getByRole("button").click();
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
