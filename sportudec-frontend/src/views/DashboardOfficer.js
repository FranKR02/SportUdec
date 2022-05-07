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
                <div className="container-fluid">
                    <div className="row flex-nowrap">
                        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                                <a href="#" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                    <h2 className="fs-5 d-none d-sm-inline text-center h-100">Menu</h2>
                                </a>
                                {/* MENU */}
                                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link nav-link-menu align-middle px-0">
                                            <i className="fa-solid fa-house"></i><span className="ms-1 d-none d-sm-inline ps-2">Inicio</span>
                                        </a>
                                    </li>
                                    {/* MENU PARA EL CRUD DE LOS CLUBS */}
                                    <li>
                                        <a href="#clubs" data-bs-toggle="collapse" className="nav-link nav-link-menu px-0 align-middle">
                                            <i className="fa-solid fa-people-group"></i><span className="ms-1 d-none d-sm-inline ps-2">Clubs</span> </a>
                                        <ul className="collapse show nav flex-column ms-1" id="clubs" data-bs-parent="#menu">
                                            <li className="w-100 ps-3">
                                                <a href="#" className="nav-link text-white"><span className="d-none d-sm-inline">Ingresar Club</span></a>
                                            </li>
                                            <li className="w-100 ps-3">
                                                <a href="#" className="nav-link text-white"><span className="d-none d-sm-inline">Ver Clubs</span></a>
                                            </li>
                                            <li className="w-100 ps-3">
                                                <a href="#" className="nav-link text-white"><span className="d-none d-sm-inline">Editar Club</span></a>
                                            </li>
                                            <li className="w-100 ps-3">
                                                <a href="#" className="nav-link text-white"><span className="d-none d-sm-inline">Eliminar Club</span></a>
                                            </li>

                                        </ul>
                                    </li>
                                    {/* MENU PARA VER PROFESORES */}
                                    <li>
                                        <a href="#profesores" data-bs-toggle="collapse" className="nav-link nav-link-menu px-0 align-middle ">
                                            <i className="fa-solid fa-chalkboard-user"></i><span className="ms-1 d-none d-sm-inline ps-2">Profesores</span></a>
                                        <ul className="collapse nav flex-column ms-1" id="profesores" data-bs-parent="#menu">
                                            <li className="w-100 ps-3">
                                                <a href="#" className="nav-link text-white"><span className="d-none d-sm-inline">Ver profesores</span></a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <hr />
                                {/* Boton para salir */}
                                <div className="dropdown pb-4">
                                    <a href="#" className="d-flex align-items-baseline text-white text-decoration-none dropdown-toggle icon-user" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <div className="rounded-circle">
                                            <i className="fa-solid fa-user"></i>
                                        </div>
                                        <span className="d-none d-sm-inline mx-1 ps-2">Funcionario</span>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col py-3">
                            <h3>Deben mostrar por acá</h3>
                        </div>
                    </div>
                </div>
            </div >
        )
    } else {
        //! Si no hay nada en el localStorage, dirige al login
        return <Navigate to="/login" />;
    }
}
export default DashboardOfficer;