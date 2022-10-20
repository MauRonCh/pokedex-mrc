import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {

    const username = useSelector(state => state.username)

    if (username) {
        return <Outlet />
    } else {
        return <Navigate to='/' />
    }
}

export default ProtectedRoutes