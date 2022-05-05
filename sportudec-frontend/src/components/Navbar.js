import React, { Component } from 'react';
import '../App.css';
class Navbar extends Component {
    state = {}
    render() {
        return (
            <nav className="navbar navbar-expand-lg fw-bold" id='navbar'>
                <div className="container d-flex">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="logo">
                        <a className="navbar-brand color-text" href="#">SportUdec</a>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 h-100">
                            <li className="nav-item">
                                <a className="nav-link active color-text" aria-current="page" href="#inicio">Inicio</a>
                            </li>
                            <li className="nav-item h-100">
                                <a className="nav-link color-text" href="#nosotros">Nosotros</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link color-text" href='#servicios'>Servicios</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link color-text" href='#contacto'>Contactos</a>
                            </li>
                        </ul>
                        <div className="buttons">
                            <a className='btn btn-user rounded-pill me-3 fw-bold color-text'>Ingresar</a>
                            <a className='btn btn-user rounded-pill fw-bold color-text'>Registrarse</a>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;