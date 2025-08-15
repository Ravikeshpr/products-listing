import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productsSlice";
import "./ProductsList.css";
import ProductCard from "../components/ProductCard";

function ProductsList() {
    const dispatch = useDispatch();

    const { products } = useSelector((state) => state.products);
    console.log("rrr", products);
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    return (
        <div className="container">
            <h1 className="title" tabIndex={0} aria-label="Product Listing">
                Product Listing
            </h1>
            <div className="controls">
                <select id="type-dropdown">
                    <option value={1}>"all"</option>
                </select>
                <input className="search-bar" />
            </div>

            <div className="product-grid">
                {products.map((product) =>
                    product ? (
                        <ProductCard key={product.index} product={product} />
                    ) : null
                )}
            </div>
        </div>
    );
}

export default ProductsList;
