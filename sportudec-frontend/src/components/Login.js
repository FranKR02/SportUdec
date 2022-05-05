import React, { Component } from 'react';
import Navbar from './Navbar';
import '../css/Login.css'
function Login() {
    return (
        <div className="login">
            <div className="row">
                <div className="col-md-6">
                    <div className="container">
                        <div className="btn btn-login rounded-circle pt-3"><i className="fa-solid fa-circle-arrow-left fa-3x"></i></div>
                    </div>
                    <div className="container container-login login-form">
                        <h2 className="text-login text-center pb-3">Bienvenido!</h2>
                        <form>
                            <div className="form-floating  pb-3">
                                <input type="text" className="form-control" placeholder="Nombre de usuario" />
                                <label htmlFor="floatingInput">Nombre de usuario</label>
                            </div>
                            <div className="form-floating pb-3">
                                <input type="password" className="form-control" placeholder="Contraseña" />
                                <label htmlFor="floatingInput">Contraseña</label>
                            </div>
                            <div className="d-grid">
                                <button type="button" className="btn btn-log align-bottom">Iniciar Sesión</button>
                            </div>
                            <div className="pt-3">
                                <span><a className='link-login' href="#">Recuperar contraseña</a></span>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-6 bg">
                    <div className="img">
                        {/* IMAGEN */}
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Login;