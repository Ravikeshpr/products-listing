import ProductsList from "./containers/ProductsList";
import MasterLayout from "./layout/MasterLayout";

function App() {
    return (
        <MasterLayout>
            <ProductsList />
        </MasterLayout>
    );
}

export default App;
