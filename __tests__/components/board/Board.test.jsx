/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import { Board } from "../../../components/board/Board";
import { createBoard } from "../../../utils/board/createBoard";

describe("Board Component", () => {
  it("Testing Board renders 100 squares (10x10)", () => {
    const board = createBoard();
    render(<Board board={board} />);
    const divs = screen.getAllByRole("square").length;
    expect(divs).toEqual(100);
  });
});
