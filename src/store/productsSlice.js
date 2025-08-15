import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        const response = await fetch("/src/data/data.json");
        if (!response.ok) throw new Error("Failed to fetch products");
        return await response.json();
    }
);

const initialState = {
    products: [],
    filterType: "all",
    search: "",
    status: "idle",
    error: null,
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setFilterType(state, action) {
            state.filterType = action.payload;
        },
        setSearchText(state, action) {
            state.search = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const { setFilterType, setSearchText } = productsSlice.actions;
export default productsSlice.reducer;
