import { renderHook, act } from "@testing-library/react";
import useProductTypeFilter from "./useProductTypeFilter";
import { describe, it, expect } from "vitest";
import { Provider } from "react-redux";
import { store } from "../store"; // Adjust the import path to your actual store location

const wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;

describe("useProductTypeFilter", () => {
    it("should initialize with default filter value", () => {
        const { result } = renderHook(() => useProductTypeFilter(), {
            wrapper,
        });

        expect(result.current.filterType).toBe("all");
        expect(result.current.types).toContain("all");
    });
});
