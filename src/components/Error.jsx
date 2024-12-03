import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();

    return (
        <div className="error">
            <h1>404 Error</h1>
            <h3>OOPS something went wrong</h3>
            <span>{err.status}</span>
        </div>
    )
}

export default Error;