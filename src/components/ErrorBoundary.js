import React from "react";
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }
    static getDerivedStateFromError(error) {
        console.log("here getDerivedStateFromError");
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }
    componentDidCatch(error, errorInfo) {
        console.log("here did catch");
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, errorInfo);
        this.setState({
        error: error,
        errorInfo: errorInfo,
        hasError: true
        });
    }

    render() {
        console.log("Error Found");

        return this.state.error ? (
        <h1> Something Went Wrong ... Error Boundary Caught it!</h1>
        ) : (
        <>
            {this.props.children}
        </>
        );
    }
}
export default ErrorBoundary