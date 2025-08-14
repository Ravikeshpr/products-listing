import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import MasterLayout from "../layout/MasterLayout";

describe("MasterLayout", () => {
    it("renders header, footer, and children", () => {
        render(
            <MasterLayout>
                <div>Test Content</div>
            </MasterLayout>
        );
        expect(screen.getByRole("banner")).toBeInTheDocument();
        expect(screen.getByRole("main")).toBeInTheDocument();
        expect(screen.getByRole("contentinfo")).toBeInTheDocument();
        expect(screen.getByText("Test Content")).toBeInTheDocument();
    });
});
