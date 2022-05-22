import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import { addClub } from '../Data/DataClub'
class CreateClub extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            email: '',
            clave: '',
            numeroEstudiantes: '',
            profesor: '',
            recursos: '',
            deporte: ''
        }
    }
    datosForm = ((e) => {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        });
    });
    registrar = (async () => {
        console.log("hola")
        const newClub = await addClub(this.state.nombre,
            this.state.email,
            this.state.clave,
            this.state.numeroEstudiantes,
            this.state.profesor,
            this.state.recursos,
            this.state.deporte);
        console.log('newClub:', newClub);
    });
    render() {
        return (
            <div className="container h-100">
                <h1 className='fs-1 fw-bold mt-2'>Nuevo Club</h1>
                <div className="container h-75">
                    <form className='pt-3'>
                        <div className="row mb-4">
                            <div className="col">
                                <div className="form-outline">
                                    <input type="text" name='nombre' className="form-control" onChange={this.datosForm} required />
                                    <label className="form-label">Nombre del club</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-outline">
                                    <input type="email" name='email' className="form-control" onChange={this.datosForm} required />
                                    <label className="form-label">Email</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-outline">
                                    <input type="text" name='clave' className="form-control" onChange={this.datosForm} required />
                                    <label className="form-label">Contraseña</label>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col">
                                <div className="form-outline">
                                    <input type="number" name='numeroEstudiantes' className="form-control" onChange={this.datosForm} required />
                                    <label className="form-label">Numero de estudiantes</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-outline">
                                    <input type="text" name='deporte' className="form-control" onChange={this.datosForm} required />
                                    <label className="form-label">Deporte</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-outline">
                                    <input type="text" name='profesor' className="form-control" onChange={this.datosForm} required />
                                    <label className="form-label">Profesor o director</label>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col">
                                <div className="form-outline">
                                    <input type="text" name='recursos' className="form-control" onChange={this.datosForm} required />
                                    <label className="form-label">Recursos fisicos</label>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => { this.registrar() }} className="btn btn-primary btn-block mb-4">Registrar</button>
                    </form>
                </div>


            </div>
        );
    }
}

export default CreateClub;