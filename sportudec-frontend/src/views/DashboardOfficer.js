import React, { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';
import '../css/DashboardOfficer.css'
import CreateClub from './CreateClub';
import GetClubs from './GetClubs';

class DashboardOfficer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vista: ''
        }
    }
    vistaInicio = () => {
        this.setState({ vista: <h1>Hola</h1> });
    }
    componentDidMount() {
        this.setState({ vista: <h1>Hola</h1> });
    }
    getClubs = () => {
        this.setState({ vista: <GetClubs /> });
    }
    createClub = () => {
        this.setState({ vista: <CreateClub /> });
    }
    render() {
        const signOut = (() => {
            //Borra el localStorage y forza el renderizado para que salga
            localStorage.removeItem('dataUser');
            this.forceUpdate();
        });
        var local = localStorage.getItem("dataUser");
        // ?Si lo encuentra en el localStorage, retorna el dashboard
        var dataUser = JSON.parse(localStorage.getItem("dataUser"));
        if (local && dataUser?.cargo == 'funcionario') {
            return (
                <div className="dashboard">
                    <div className="container-fluid">
                        <div className="row flex-nowrap">
                            <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                                <div className="fw-bold d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                                    <a className="d-flex justify-content-center align-items-center pb-3 mt-3 w-100 text-white text-decoration-none">
                                        <h2 className="fw-boldfs-5 d-none d-sm-inline text-center h-100">Menu</h2>
                                    </a>
                                    {/* MENU */}
                                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                        <li className="nav-item">
                                            <button className="nav-link nav-link-menu align-middle px-0" onClick={this.vistaInicio}>
                                                <i className="fa-solid fa-house"></i><span className="fw-bold ms-1 d-none d-sm-inline ps-2">Inicio</span>
                                            </button>
                                        </li>
                                        {/* MENU PARA EL CRUD DE LOS CLUBS */}
                                        <li>
                                            <a href="#clubs" data-bs-toggle="collapse" className="nav-link nav-link-menu px-0 align-middle">
                                                <i className="fa-solid fa-people-group"></i><span className="ms-1 d-none d-sm-inline ps-2">Clubs</span> </a>
                                            <ul className="collapse show nav flex-column ms-1" id="clubs" data-bs-parent="#menu">
                                                <li className="w-100 ps-3">
                                                    <button className="nav-link text-white" onClick={this.createClub} ><span className="fw-bold d-none d-sm-inline">Ingresar Club</span></button>
                                                </li>
                                                <li className="w-100 ps-3">
                                                    <a href="#" className="nav-link text-white" onClick={this.getClubs}><span className="d-none d-sm-inline">Ver Clubs</span></a>
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
                                            <li><button className="dropdown-item" onClick={signOut}>Cerrar sesion</button></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col py-3" >
                                {this.state.vista}
                            </div>
                        </div>
                    </div>
                </div >
            )
        } else {
            //! Si no hay nada en el localStorage, dirige al login
            return <Navigate to="/LoginOfficer" />;
        }
    }
}

export default DashboardOfficer;