import {useRouteError} from "react-router-dom";

export default function ErrorPage(props) {
    let error = useRouteError();
    if (!error) {
        error = props.errorGiven;
    } else if (error.statusText !== null) {
        error = error.statusText;
    } else {
        error = error.message;
    }

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <i>{error}</i>
            {error === "Request failed with status code 401" ? (
                <div>
                    <p>Please remember to input the API Key into the endpoint header in the location of "KEY" stated in
                        the README</p>
                    <i>If fixed, please refresh the browser</i>
                </div>
            ) : (<></>)}
        </div>
    );
}