import React, { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { getClubs, deleteClub } from '../Data/DataClub'
import { editClub } from '../Data/DataClub'
import '../css/GetClub.css'

class GetClubs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clubs: [],
            sport: '',
            name: '',
            correo: '',
            pass: '',
            number: '',
            teach: '',
            re: '',
            id: '',
            //////////////
            nombre: '',
            email: '',
            clave: '',
            numeroEstudiantes: '',
            profesor: '',
            recursos: '',
            deporte: ''
        }
    }
    componentDidMount() {
        this.getClubs();
    }
    getClubs = (async () => {
        const datos = await getClubs();
        this.setState({ clubs: datos });
    });
    editarClub = ((club) => {
        // Nombre club, email, contraseña, numeroes, profe, recu
        this.setState({ sport: club.sport });
        this.setState({ name: club.nameClub });
        this.setState({ correo: club.address });
        this.setState({ pass: club.password });
        this.setState({ number: club.numberStudens });
        this.setState({ teach: club.managerName });
        this.setState({ re: club.physicalResources });
        this.setState({ id: club.idSportclub });

    });
    eliminarClub = (async (id) => {
        if (window.confirm("¿Estas seguro?")) {
            var response = await deleteClub(id);
            await this.getClubs();

        }

    });
    datosForm = (async () => {
        var sport = document.getElementById('sport').value;
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var clave = document.getElementById('clave').value;
        var numStudents = document.getElementById('numStudents').value;
        var teacher = document.getElementById('teacher').value;
        var recursos = document.getElementById('recursos').value;

        this.setState({
            deporte: sport,
            nombre: name,
            email: email,
            clave: clave,
            numeroEstudiantes: numStudents,
            profesor: teacher,
            recursos: recursos
        }, async () => {
            const clubEdit = await editClub(
                this.state.id,
                this.state.nombre,
                this.state.email,
                this.state.clave,
                this.state.numeroEstudiantes,
                this.state.profesor,
                this.state.recursos,
                this.state.deporte,
                this.state.id);
            setTimeout(async () => {
                const datos = await getClubs();
                this.setState({
                    clubs: datos,
                    name: '',
                    correo: '',
                    pass: '',
                    number: '',
                    teach: '',
                    re: '',
                    id: '',
                    sport: '',
                    nombre: '',
                    email: '',
                    clave: '',
                    numeroEstudiantes: '',
                    profesor: '',
                    recursos: '',
                    deporte: ''
                });
            }, 1500);
        });
    });

    render() {
        var club = this.state.clubs.map((club) => {

            return (
                <tr key={club.idSportclub}>
                    <td className='td-align text-center'>{club.idSportclub}</td>
                    <td className='td-align text-center'>{club.nameClub}</td>
                    <td className='td-align text-center'>{club.sport}</td>
                    <td className='td-align text-center'>{club.address}</td>
                    <td className='td-align text-center'>{club.numberStudens}</td>
                    <td className='td-align text-center'>{club.physicalResources}</td>
                    <td className='td-align text-center'><button className='btn btn-secondary' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => { this.editarClub(club) }}>Editar</button></td>
                    <td><button className='btn btn-danger' onClick={() => { this.eliminarClub(club.idSportclub) }}>Eliminar</button></td>
                </tr>
            )
        });

        return (
            <div className="container contenedor">
                <h1 className='fs-1 fw-bold mt-2'>Clubs</h1>
                <div className="tabla">
                    <table className="table table-info">
                        <thead>
                            <tr>
                                <td className='fw-bold text-center text-uppercase' scope='col'>Id</td>
                                <td className='fw-bold text-center text-uppercase' scope='col'>Nombre</td>
                                <td className='fw-bold text-center text-uppercase' scope='col'>Deporte</td>
                                <td className='fw-bold text-center text-uppercase' scope='col'>Correo</td>
                                <td className='fw-bold text-center text-uppercase' scope='col'>Estudiantes</td>
                                <td className='fw-bold text-center text-uppercase' scope='col'>Recursos fisicos</td>
                                <td className='fw-bold text-center text-uppercase' scope='col'></td>
                                <td className='fw-bold text-center text-uppercase' scope='col'></td>
                            </tr>
                        </thead>
                        <tbody>
                            {club}
                        </tbody>
                    </table>
                </div>
                {/* MODAL */}
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Editar el usuario</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form className='pt-3'>
                                    <div className="row mb-4">
                                        <div className="col">
                                            <div className="form-outline">
                                                <input type="text" name='nombre' defaultValue={this.state.name} className="form-control" id='name' required />
                                                <label className="form-label">Nombre del club</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-outline">
                                                <input type="email" name='email' id='email' defaultValue={this.state.correo} className="form-control" required />
                                                <label className="form-label">Email</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col">
                                            <div className="form-outline">
                                                <input type="text" name='sport' id='sport' defaultValue={this.state.sport}
                                                 className="form-control" required />
                                                <label className="form-label">Deporte</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-outline">
                                                <input type="text" name='clave' id='clave' defaultValue={this.state.pass} className="form-control" required />
                                                <label className="form-label">Contraseña</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-outline">
                                                <input type="number" name='numeroEstudiantes' id='numStudents' defaultValue={this.state.number} className="form-control" required />
                                                <label className="form-label">Numero de estudiantes</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col">
                                            <div className="form-outline">
                                                <input type="text" name='profesor' id='teacher' defaultValue={this.state.teach} className="form-control" required />
                                                <label className="form-label">Profesor o director</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-outline">
                                                <input type="text" name='recursos' id='recursos' defaultValue={this.state.re} className="form-control" required />
                                                <label className="form-label">Recursos fisicos</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => { this.datosForm() }}>Actualizar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GetClubs;
