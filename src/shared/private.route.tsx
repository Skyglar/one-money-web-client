import { Navigate } from "react-router-dom"

export const PrivateRoute = ({auth: { isAuthenticated }, children }: any) => {
    debugger;
    return isAuthenticated ? children : <Navigate to="/login" />
}