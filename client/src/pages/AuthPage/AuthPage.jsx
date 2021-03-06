import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
// import { MainPage } from './MainPage/MainPage'
import { Authentification } from './Authentication/Authentification'
import { Registration } from './Registration/Registration'
import { NotFoundPage } from './NotFoundPage/NotFoundPage'
import { MainPage } from './MainPage/MainPage'

export const AuthPage = () => {

    return (
        <>  
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/registration'>Registration</Link>
            <Routes>
                <Route path='/' element={<MainPage/>} />
                <Route path='/login' element={<Authentification />} />
                <Route path='/registration' element={<Registration />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </>
    )
}
