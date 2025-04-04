import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getPermissions } from '../screen/Auth/authSlice'


const useCan = (permission) => {
    const userPermissions = useSelector(getPermissions)

    const [hasPermission, setHasPermission] = React.useState(false)

    useEffect(() => {
        if (permission && userPermissions.length > 0) {
            if (userPermissions && userPermissions.length > 0) {
                if(userPermissions.includes(permission)){
                    setHasPermission(true)
                }
            }
        }
    }, [permission, userPermissions])

    return hasPermission

}

export default useCan