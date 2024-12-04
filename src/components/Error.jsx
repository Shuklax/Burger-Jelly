import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError();
    console.log(err);

    return (
        <div className="error">
            <h1>404 Error</h1>
            <h2>OOPS something went wrong</h2>
            <h3></h3>
        </div>
    )
}

export default Error;