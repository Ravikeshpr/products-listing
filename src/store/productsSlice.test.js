import reducer, { fetchProducts } from "./productsSlice";
import { describe, it, expect, beforeEach, vi } from "vitest";

// Mock fetch for async thunk
globalThis.fetch = vi.fn();

const mockProducts = [
    { id: 1, name: "Product A", type: "type1" },
    { id: 2, name: "Product B", type: "type2" },
];

describe("productsSlice", () => {
    let initialState;

    beforeEach(() => {
        initialState = {
            products: [],
            filterType: "all",
            search: "",
            status: "idle",
            error: null,
        };
        fetch.mockReset();
    });

    it("should handle fetchProducts.pending", () => {
        const action = { type: fetchProducts.pending.type };
        const state = reducer(initialState, action);
        expect(state.status).toBe("loading");
        expect(state.error).toBeNull();
    });

    it("should handle fetchProducts.fulfilled", () => {
        const action = {
            type: fetchProducts.fulfilled.type,
            payload: mockProducts,
        };
        const state = reducer(initialState, action);
        expect(state.status).toBe("succeeded");
        expect(state.products).toEqual(mockProducts);
    });

    it("should handle fetchProducts.rejected", () => {
        const error = { message: "Failed to fetch" };
        const action = { type: fetchProducts.rejected.type, error };
        const state = reducer(initialState, action);
        expect(state.status).toBe("failed");
        expect(state.error).toBe("Failed to fetch");
    });
});
