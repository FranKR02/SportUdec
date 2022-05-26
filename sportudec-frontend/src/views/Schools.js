import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getClubs } from '../Data/DataClub'

import '../css/Schools.css'
class Schools extends Component {
    constructor(props){
        super(props);
        this.state = {
            clubs: [],
            anuncio1: 'Anuncio',
            anuncio2: 'Anuncio1'
        }
    }
    componentDidMount() {
        this.getClubs();
    }
    getClubs = (async () => {
        const datos = await getClubs();
        this.setState({ clubs: datos });
    });
    render() {
        var clubs = this.state.clubs.map((club) => {
            return (
                <div className="cards-escuelas" key={club.idSportclub}>
                            <div className="card mb-3" style={{minWidth: "50rem",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img className="imagen-clubs"/>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title h2 fw-bolder">{club.nameClub}</h5>
                                            <p className="card-text h3">{club.sport}</p>
                                            <p className="card-text">{club.address}</p>
                                            <p className="card-text">{club.physicalResources}</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            )
        });
        return (
            <div className="body-main">
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
                                    <Link to='/Schools' className="nav-link nav-linkk color-text">Clubs</Link>
                                </li>
                            </ul>
                            <div className="buttons">
                                <Link to="/Login" className='btn btn-user rounded-pill me-3 fw-bold color-text'>{localStorage.getItem("dataUser") ? "Cuenta" : "Ingresar"}</Link>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="contenedor-escuelas">
                    <div className="escuelas">
                        <div className="title">
                            <h1 className='text-center' id='heading-1'>Escuelas</h1>
                        </div>
                        {clubs}
                    </div>
                    {this.state.anuncio1?<div className="anuncio bg-dark text-white">Anuncio</div>:''}
                    {this.state.anuncio2?<div className="anuncio2 bg-dark text-white">Anuncio</div>:''}
                    
                </div>
            </div>
        );
    }
}

export default Schools;