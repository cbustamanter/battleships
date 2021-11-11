/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import { Square } from "../../../components/square/Square";

describe("Square Component", () => {
  it("Testing Square renders", () => {
    render(<Square />);
    const square = screen.getByRole("square");
    expect(square).toBeInTheDocument();
  });

  it("Testing Square missed state", () => {
    render(<Square square="missed" />);
    const hasBgMissed = screen
      .getByRole("square")
      .classList.contains("bg-green-300");
    expect(hasBgMissed).toBeTruthy();
  });

  it("Testing Square hitted state", () => {
    render(<Square square="hitted" />);
    const hasBgHitted = screen
      .getByRole("square")
      .classList.contains("bg-red-300");
    expect(hasBgHitted).toBeTruthy();
  });
});
