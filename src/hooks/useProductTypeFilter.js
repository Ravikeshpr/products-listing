import { useSelector, useDispatch } from "react-redux";
import { setFilterType } from "../store/productsSlice";

// This custom hook could subject the argument if required or not, I have created it
// to demonstrate the knowlege of the custom hooks
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
