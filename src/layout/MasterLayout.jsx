import "./MasterLayout.css";

const MasterLayout = ({ children }) => (
    <div className="master-layout-container">
        <header className="header">
            <h1>Product Store</h1>
        </header>
        <main className="main-content" id="main-content">
            {children}
        </main>

        <footer className="footer">
            <span>© {new Date().getFullYear()}, your one stop shop.</span>
        </footer>
    </div>
);

export default MasterLayout;
