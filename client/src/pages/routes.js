import React from "react";
import { Routes, Route} from 'react-router-dom'
// import { MainPage } from './AuthPage/MainPage/MainPage'
import { AuthPage } from './AuthPage/AuthPage'
import { NotFoundPage } from './AuthPage/NotFoundPage/NotFoundPage'
import { Authentification } from './AuthPage/Authentication/Authentification'
import { Registration } from "./AuthPage/Registration/Registration";


export const useRoutes = (isLogin) => {
    if (isLogin) {
        return (
            <Routes>
                <Route path="/" element={<AuthPage/>} />
                <Route path="*" element={<NotFoundPage/>} />
                {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
            </Routes>
        )
    }

    return (
        <Routes>
            <Route path="/login" element={<Authentification/>} />
            <Route path="/registration" element={<Registration/>} />
            <Route path="*" element={<NotFoundPage/>} />
            {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
        </Routes>
    )
}