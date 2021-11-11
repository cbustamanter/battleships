/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home Page", () => {
  it("renders a components in Home Page", () => {
    render(<Home />);
    const navbar = screen.getByRole("navigation");
    const btnStart = screen.getByRole("button", { name: "Nuevo Juego" });
    const btnConfig = screen.getByRole("button", { name: "Configurar juego" });
    expect(navbar).toBeInTheDocument();
    expect(btnStart).toBeInTheDocument();
    expect(btnConfig).toBeInTheDocument();
  });
});
