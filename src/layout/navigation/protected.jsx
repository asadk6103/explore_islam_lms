import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import { getIsLoggedIn } from "../../pages/Login/loginSlice"


const ProtectedRoute = ({ roles, permission, redirectPath = "/", children }) => {
    // const isLoggedIn = true
    const isLoggedIn = useSelector(getIsLoggedIn)
    // const userPermissions = useSelector(getPermissions)
    const role ='admin'

    if (isLoggedIn && roles.includes(role)) {
        return children ? children : <Outlet />
    }
    return <Navigate to={redirectPath} replace />
}

export default ProtectedRoute