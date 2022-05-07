import React from 'react';
import { Navigate } from 'react-router-dom';
import '../css/Count.css'

function Count() {
    var local = localStorage.getItem('dataUser');
    var dataUser = JSON.parse(localStorage.getItem("dataUser"));
    if (local && dataUser?.cargo == 'club') {
        return (
            <div className="count-user">
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <div className="container">
                        <a className="navbar-brand fw-bold btn-close-white text-uppercase me-auto" href="#">SportUdec</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="bi bi-person-circle bnt btn-outline-secondary"></i>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#">Perfil</a></li>
                                        <li><a className="dropdown-item" href="#">Asdf</a></li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li><a className="dropdown-item" href="#">Cerrar sesíon</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container-fluid grid-block img-header d-flex flex-column justify-content-center align-items-center">
                    <div className="container">
                        <div className="modal-content container text-center">
                            <div className="text-center modal-content centrarimg">
                                <img src="img/person-circle.svg" className="rounded mx-auto d-block" alt="10px" width="10%" height="10%" />
                            </div>
                            <figure className="row text-center">
                                <blockquote className="blockquote">
                                    <p>Escuela burritas del señor</p>
                                </blockquote>
                                <figcaption className="blockquote-footer col-sm-3">
                                    Profesor: <cite title="Source Title">Pedro Infante</cite>
                                </figcaption>
                                <figcaption className="blockquote-footer col-sm-9">
                                    Localización: <cite title="Source Title">Los Corraleros de Majagual</cite>
                                </figcaption>
                                <figcaption className="blockquote-footer col-sm-3">
                                    Numero de estudiantes: <cite title="Source Title">312</cite>
                                </figcaption>
                                <figcaption className="blockquote-footer col-sm-9">
                                    Horario: <cite title="Source Title">Todos los dias a media noche</cite>
                                </figcaption>
                                <figcaption className="blockquote-footer col-sm-3">
                                    Email: <cite title="Source Title">pepe@gmail.com</cite>
                                </figcaption>
                                <figcaption className="blockquote-footer col-sm-9">
                                    Telefono: <cite title="Source Title">3041253476</cite>
                                </figcaption>
                            </figure>
                        </div> <br />
                        <div className="modal-content container text-center">
                            <dl className="row">
                                <dt className="col-sm-3">Descripción de la escuela</dt>
                                <dd className="col-sm-9">Ve cogé el sillón y pónselo a la burrita
                                    Pónselo a la burrita, pónselo a la burrita
                                    Ve cogé el machete y metélo en su vainita
                                    Metélo en su vainita, metélo en su vainita
                                    Ve que va a llover y el camino es culebrero
                                    El camino es culebrero, el camino es culebrero
                                    Pero como me voy, yo me pongo mi sombrero
                                    Me pongo mi sombrero, me pongo mi sombrero
                                    Ve cogé el sillón y pónselo a la burrita
                                    Pónselo a la burrita, pónselo a la burrita
                                    Ve que va a llover y el camino es culebrero
                                    El camino es culebrero, el camino es culebrero</dd>
                            </dl>
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