import React from 'react'
import '../AuthPage.scss'
import { Link } from 'react-router-dom'

export const Registration = () => {
    return (
        <div className='container'>
            <div className='auth-page'>
                <h3>Регистрация</h3>
                <form className="form form-login">
                    <div className='row'>
                        <div className='input-field col s12'>
                            <input
                                type="email"
                                name="email"
                                className='validate'
                            />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className='input-field col s12'>
                            <input
                                type="password"
                                name="password"
                                className='validate'
                            />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className='row'>
                        <button
                            className='wawes-effect wawes-light btn blue'
                        >
                            Регистрация
                        </button>
                        <Link to="/" className="btn-outline btn-reg">Аккаунт уже существует</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
