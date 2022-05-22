import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import '../css/Count.css'
import '../App.css';


function Count() {
    var local = localStorage.getItem('dataUser');
    const dataUser = JSON.parse(localStorage.getItem("dataUser"));
    console.log(dataUser)
    if (local && dataUser?.cargo == 'club') {
        return (
            <div className="count-user">
                <nav className="navbar navbar-expand-lg fw-bold" id='navbar'>
                    <div className="container d-flex">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="logo me-5">
                            <Link to='/Home' className="navbar-brand color-text">SportUdec</Link>
                        </div>
                        <div className="collapse navbar-collapse ms-5 ps-5" id="navbarTogglerDemo03">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 h-100">
                                <li className="nav-itemm">
                                    <Link to='/Home' className="nav-link nav-linkk active color-text" aria-current="page" href="#">Inicio</Link>
                                </li>
                                <li className="nav-itemm h-100">
                                    <a className="nav-link nav-linkk color-text" href="#nosotros">Escuelas</a>
                                </li>
                            </ul>
                            <div className="buttons">
                                <Link to="/Home" className='btn btn-user rounded-pill me-3 fw-bold color-text' onClick={() => { localStorage.removeItem("dataUser") }}>Salir</Link>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="container contenedor-count mt-1 ">
                    <div className="contenedorHead">
                        <div className="contenerChild">
                            {/* IMAGEN */}
                        </div>
                        <div className="contenido-header">
                            <h1 className='display-1' id='nameClub'>{dataUser.club.nameClub}</h1>
                        </div>
                        <div className="datos-right">
                            <p className='h3' id='sport'>{dataUser.club.sport}</p>
                            <button className='btn btn-settings'><i className="fa-solid fa-gear fa-2x"></i></button>
                            
                        </div>
                        <div className="contenido">
                            <div className="contenedor-datos">
                                <p>Profesor: {dataUser.club.managerName}</p>
                                <p>Correo: {dataUser.club.address}</p>
                                <p>Deportistas: {dataUser.club.numberStudens}</p>
                                <p>Recursos fisicos: {dataUser.club.physicalResources}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        //! Si no hay nada en el localStorage, dirige al login
        return <Navigate to="/login" />;
    }

}

export default Count;