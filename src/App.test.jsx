import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";

describe("App", () => {
    test("renders ProductsList component inside MasterLayout with store provider", () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );
        const headerText = screen.getByText("Product Store");
        expect(headerText).toBeInTheDocument();
        const footerText = screen.getByText(/your one stop shop./i);
        expect(footerText).toBeInTheDocument();
    });
});
