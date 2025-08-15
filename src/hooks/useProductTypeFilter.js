import { useSelector, useDispatch } from "react-redux";
import { setFilterType } from "../store/productsSlice";

export default function useProductTypeFilter() {
    const dispatch = useDispatch();
    const { products, filterType } = useSelector((state) => state.products);
    const types = [
        "all",
        ...Array.from(new Set(products.map((product) => product.type))),
    ];
    const onChange = (e) => dispatch(setFilterType(e.target.value));
    return { types, filterType, onChange };
}
