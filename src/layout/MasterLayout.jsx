import { ErrorBoundary } from "./ErrorBoundry";
import "./MasterLayout.css";

const MasterLayout = ({ children }) => (
    <div className="master-layout-container">
        <header className="header" role="banner" aria-label="Site Header">
            <h1 tabIndex={0}>Product Store</h1>
        </header>
        <ErrorBoundary>
            <main
                className="main-content"
                id="main-content"
                tabIndex={-1}
                role="main"
            >
                {children}
            </main>
        </ErrorBoundary>
        <footer className="footer" role="contentinfo" aria-label="Site Footer">
            <span tabIndex={0}>
                © {new Date().getFullYear()}, your one stop shop.
            </span>
        </footer>
    </div>
);

export default MasterLayout;
