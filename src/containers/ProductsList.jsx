import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productsSlice";
import "./ProductsList.css";
import ProductCard from "../components/ProductCard";
import useProductTypeFilter from "../hooks/useProductTypeFilter";

function ProductsList() {
    const dispatch = useDispatch();

    const { products, status, error } = useSelector((state) => state.products);
    const { types, filterType, onChange } = useProductTypeFilter();
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const filteredProducts = products.filter((product) => {
        console.log("Ffff", product, filterType);
        const matchesType = filterType === "all" || product.type === filterType;
        console.log("ggg", matchesType, filterType);
        return matchesType;
    });
    return (
        <div className="container">
            <h1 className="title" tabIndex={0} aria-label="Product Listing">
                Product Listing
            </h1>
            <div className="controls">
                <input className="search-bar" />
                <label htmlFor="type-dropdown" className="filter-label">
                    Filter by type
                </label>
                <select
                    id="type-dropdown"
                    value={filterType ?? "all"}
                    onChange={onChange}
                    className="dropdown"
                    aria-label="Filter products by type"
                >
                    {(types ?? ["all"]).map((type) => (
                        <option key={type} value={type}>
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                        </option>
                    ))}
                </select>
            </div>

            <div className="product-grid">
                {status === "loading" && <p>Loading...</p>}
                {status === "failed" && (
                    <p className="no-results">
                        {error ?? "An error occurred."}
                    </p>
                )}
                {status === "succeeded" &&
                    (!filteredProducts || filteredProducts.length === 0) && (
                        <p className="no-results" role="status">
                            No products found.
                        </p>
                    )}
                {filteredProducts.map((product) =>
                    product ? (
                        <ProductCard key={product.index} product={product} />
                    ) : null
                )}
            </div>
        </div>
    );
}

export default ProductsList;
