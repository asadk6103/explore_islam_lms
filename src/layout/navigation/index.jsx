import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./protected";
import { ROUTES } from "./constants";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../pages/Login/loginSlice";
import Login from "../../pages/Login";

const Navigation = () => {
    const isLoggedIn = useSelector(getIsLoggedIn)

    console.log({isLoggedIn})
    return (
        <>
            <Routes>
                <Route index element={isLoggedIn ? <Navigate to={`/dashboard`} replace /> : <Login />} />
                {ROUTES.map((route) => (
                    route.childrens && route.childrens.length > 0 ?
                        <Route
                            key={route.label}
                            path={route.url}
                        >
                            {route.childrens.map(r => (
                                <Route
                                    key={r.label}
                                    path={route.url + r.url}
                                    element={
                                        route.isProtected ?
                                            (<ProtectedRoute
                                                redirectPath={route.redirectPath}
                                                roles={r.role}
                                                permission={r.permission}
                                            >
                                                <r.screen />
                                            </ProtectedRoute>)
                                            : (<r.screen />)
                                    }
                                />
                            ))}
                        </Route>
                        :
                        <Route
                            key={route.label}
                            path={route.url}
                            element={
                                route.isProtected ?
                                    (<ProtectedRoute
                                        redirectPath={route.redirectPath}
                                        roles={route.role}
                                        permission={route.permission}
                                    >
                                        <route.screen />
                                    </ProtectedRoute>)
                                    : (<route.screen />)
                            }
                        />
                ))}
                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </>
    )
}

export default Navigation