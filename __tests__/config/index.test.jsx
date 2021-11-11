/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Config from "../../pages/config/index";

describe("Config Page", () => {
  it("renders components in Config Page", () => {
    render(<Config />);
    const navbar = screen.getByRole("navigation");
    const btnEasy = screen.getByRole("button", { name: "Fácil" });
    const btnMedium = screen.getByRole("button", { name: "Medio" });
    const btnHard = screen.getByRole("button", { name: "Difícil" });
    const btnOther = screen.getByRole("button", { name: "Otro" });

    expect(navbar).toBeInTheDocument();
    expect(btnEasy).toBeInTheDocument();
    expect(btnMedium).toBeInTheDocument();
    expect(btnHard).toBeInTheDocument();
    expect(btnOther).toBeInTheDocument();
  });
});
