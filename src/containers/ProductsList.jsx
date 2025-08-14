import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../store/productsSlice";

function ProductsList() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    return <div>Product List</div>;
}

export default ProductsList;
