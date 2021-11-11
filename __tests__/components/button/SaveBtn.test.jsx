/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import { SaveBtn } from "../../../components/button/SaveBtn";

describe("SaveBtn Component", () => {
  it("Testing SaveBtn text prop", () => {
    const text = "Guardar";
    render(<SaveBtn />);
    const btnText = screen.getByRole("button").textContent;
    expect(btnText).toEqual(text);
  });

  it("Test click event as prop", () => {
    const mockCallBack = jest.fn();
    render(<SaveBtn onClick={mockCallBack} />);
    screen.getByRole("button").click();
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
