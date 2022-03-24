import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// import { MainPage } from './MainPage/MainPage'
import { Authentification } from './Authentication/Authentification'
import { Registration } from './Registration/Registration'
import { NotFoundPage } from './NotFoundPage/NotFoundPage'

export const AuthPage = () => {
    return (
        <BrowserRouter>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/registration'>Registration</Link>
            <Routes>
                <Route path='/' element={<>Главная</>} />
                <Route path='/login' element={<Authentification />} />
                <Route path='/registration' element={<Registration />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
}
