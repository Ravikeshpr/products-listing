import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the App component with expected text", () => {
    render(<App />);
    const linkElement = screen.getByText("Product List");
    expect(linkElement).toBeInTheDocument();
});
