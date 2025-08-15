import React from "react";
export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    componentDidCatch(error, info) {
        console.log("Error boundry catch error", error, info);
    }
    render() {
        if (this.state.hasError) {
            return (
                <div
                    role="alert"
                    className="main-content"
                    style={{
                        color: "red",
                        textAlign: "center",
                        padding: "2rem",
                    }}
                >
                    Something went wrong. Please try again later.
                </div>
            );
        }
        return this.props.children;
    }
}
