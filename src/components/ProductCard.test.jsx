import { render, screen } from "@testing-library/react";
import ProductCard from "./ProductCard";
import { describe, expect, it } from "vitest";

describe("ProductCard", () => {
    const mockProduct = {
        productImage: "test.jpg",
        productName: "Test Product",
        type: "Electronics",
        price: 99.99,
        isSale: false,
    };

    it("renders nothing if no product is provided", () => {
        const { container } = render(<ProductCard />);
        expect(container.firstChild).toBeNull();
    });

    it("renders product image with correct src", () => {
        render(<ProductCard product={mockProduct} />);
        const img = screen.getByRole("img");
        expect(img).toHaveAttribute("src", "/images/test.jpg");
    });

    it("renders product name, type, and price", () => {
        render(<ProductCard product={mockProduct} />);
        expect(screen.getByText("Test Product")).toBeInTheDocument();
        expect(screen.getByText("Electronics")).toBeInTheDocument();
        expect(screen.getByText("99.99")).toBeInTheDocument();
    });

    it("renders 'Sale' badge when isSale is true", () => {
        render(<ProductCard product={{ ...mockProduct, isSale: true }} />);
        expect(screen.getByText("Sale")).toBeInTheDocument();
        expect(screen.getByLabelText("On Sale")).toBeInTheDocument();
    });

    it("does not render 'Sale' badge when isSale is false", () => {
        render(<ProductCard product={mockProduct} />);
        expect(screen.queryByText("Sale")).not.toBeInTheDocument();
    });

    it("renders 'Price N/A' if price is missing", () => {
        const product = { ...mockProduct, price: undefined };
        render(<ProductCard product={product} />);
        expect(screen.getByText("Price N/A")).toBeInTheDocument();
    });
});
