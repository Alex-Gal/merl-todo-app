import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom'
import { MainPage } from './AuthPage/MainPage/MainPage'
import { AuthPage } from './AuthPage/AuthPage'


export const useRoutes = (isLogin) => {
    if (isLogin) {
        return (
            <Routes>
                <Route path="/" element={MainPage} />
                {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
            </Routes>
        )
    }

    return (
        <Routes>
            <Route path="/login" element={AuthPage} />
            {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
        </Routes>
    )
}