import { Redirect, Route } from "react-router-dom";

export const PublicRoutes = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    return (
        <Route {...rest} component= {(props) => (
            (!isAuthenticated) ? <Component {...props} /> : <Redirect to="/" />
        )} />
    );
}