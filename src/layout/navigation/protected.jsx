import { useSelector } from "react-redux"
import { getIsLoggedIn, getRole } from "../../screen/Auth/authSlice"
import { Navigate, Outlet } from "react-router-dom"


const ProtectedRoute = ({ roles, permission, redirectPath = "/", children }) => {
    const isLoggedIn = useSelector(getIsLoggedIn)
    // const userPermissions = useSelector(getPermissions)
    const role = useSelector(getRole)

    if (isLoggedIn && roles.includes(role)) {
        return children ? children : <Outlet />
    }
    return <Navigate to={redirectPath} replace />
}

export default ProtectedRoute