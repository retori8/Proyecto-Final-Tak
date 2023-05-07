import React from 'react'
import { Navigate } from 'react-router-dom'

export const ProteccionDeRutas = ({ currentUser, children }) => {
    if (!currentUser) {
        return <Navigate to='/login' replace />
    }
    return children
}