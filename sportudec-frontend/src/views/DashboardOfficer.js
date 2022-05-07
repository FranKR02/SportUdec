import React from 'react';
import { Navigate } from 'react-router-dom';
import '../css/DashboardOfficer.css'
function DashboardOfficer() {
    // !Lo 1ero que hace es verificar que hay algo en el localStorage
    var local = localStorage.getItem("dataUser");
    // ?Si lo encuentra en el localStorage, retorna el dashboard
    var dataUser = JSON.parse(localStorage.getItem("dataUser"));
    if (local && dataUser?.cargo == 'funcionario') {
        return (
            <div className="dashboard">
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <div className="container-fluid">
                        <button className="navbar-toggler me-2" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                            <span data-bs-target="#offcanvasExample" className="navbar-toggler-icon"></span>
                        </button>
                        <a className="navbar-brand fw-bold btn-close-white text-uppercase me-auto" href="#">SportUdec</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <form className="d-flex ms-auto">
                                <div className="input-group my-3 my-lg-0">
                                    <input type="text" className="form-control" placeholder="Recipient's username"
                                        aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i
                                        className="bi bi-search"></i></button>
                                </div>
                            </form>
                            <ul className="navbar-nav mb-2 mb-lg-0">
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
                <div className="offcanvas offcanvas-start bg-dark text-white sidebar-nav" tabIndex="-1" id="offcanvasExample"
                    aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-body p-0">
                        <nav className="navbar-dark">
                            <ol className="navbar-dark">
                                <li>
                                    <div className="text-muted small fw-bold text-uppercase px-3">
                                        Escuelas
                                    </div>
                                </li>
                                <li>
                                    <a href="#" className="nav-link px-3 active">
                                        <span className="me-2">
                                            <i className="bi bi-clipboard-data"></i>
                                        </span>
                                        <span>Lista de Escuelas</span>
                                    </a>
                                    <ul>
                                        <li>
                                            <span className="nav-link px-3"><i className="bi bi-book"></i> Crear</span>
                                        </li>
                                        <li>
                                            <span className="nav-link px-3"><i className="bi bi-trash"></i> Eliminar</span>
                                        </li>
                                        <li>
                                            <span className="nav-link px-3"><i className="bi bi-pencil"></i> Editar</span>
                                        </li>
                                    </ul>
                                </li>
                                <li className="my-4">
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a href="#" className="nav-link px-3 active">
                                        <span className="me-2">
                                            <i className="bi bi-person-check"></i>
                                        </span>
                                        <span>Profesores</span>
                                    </a>
                                    <a  className="nav-link px-3 active">
                                        <span className="me-2">
                                            <i className="bi bi-map"></i>
                                        </span>
                                        <span>Locaciones</span>
                                    </a>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <main className="mt-5 pt-3">
                </main>
            </div>
        )
    } else {
        //! Si no hay nada en el localStorage, dirige al login
        return <Navigate to="/login" />;
    }
}
export default DashboardOfficer;