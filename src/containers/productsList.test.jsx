import { configureStore } from "@reduxjs/toolkit";
import { beforeEach, describe, expect, it, vi } from "vitest";
import productsReducer, {
    setFilterType,
    setSearchText,
    fetchProducts,
} from "../store/productsSlice";

describe("productsSlice", () => {
    let store;

    beforeEach(() => {
        store = configureStore({
            reducer: { products: productsReducer },
        });
    });

    it("should have initial state", () => {
        const state = store.getState().products;
        expect(state).toEqual({
            products: [],
            filterType: "all",
            search: "",
            status: "idle",
            error: null,
        });
    });

    it("should set filterType", () => {
        store.dispatch(setFilterType("Beer"));
        expect(store.getState().products.filterType).toBe("Beer");
    });

    it("should set search text", () => {
        store.dispatch(setSearchText("Wine"));
        expect(store.getState().products.search).toBe("Wine");
    });

    it("should fetch products and update store", async () => {
        const mockProducts = [
            { id: 1, name: "Beer" },
            { id: 2, name: "Wine" },
        ];
        globalThis.fetch = vi.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockProducts),
            })
        );

        await store.dispatch(fetchProducts());

        const state = store.getState().products;
        expect(state.status).toBe("succeeded");
        expect(state.products).toEqual(mockProducts);
        expect(state.error).toBeNull();
    });
});
