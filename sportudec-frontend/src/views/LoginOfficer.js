import React, { Component } from 'react';
import '../css/Login.css'
import { getOfficer } from '../Data/DataOfficer'
import {
    Link, Navigate
} from "react-router-dom";

class LoginOfficer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    render() {
        //*Metodo cuando se envía
        const submit = (e) => {
            //Desactivamos el evento que limpia el form
            e.preventDefault();
            //Llamamos al metodo que verifica si los campos estan en la bd
            loginVerify();
        }
        const loginVerify = (async () => {
            //Buscamos en el metodo si estan los datos
            const datos = await getOfficer(this.state.email, this.state.password);
            //El metodo nos retorna 400 (ok), lo demás es error
            if (datos.status !== 400 && datos !== "error" && datos.cargo === 'funcionario') {
                //!Guardamos los datos en el localStorge como dataUser
                localStorage.setItem('dataUser', JSON.stringify(datos));
                // el renderizado para que pueda leer lo del localStorage
                this.forceUpdate();
            } else {
                alert("Verifica los campos")
            }
        });

        //!Si encuentra el dataUser es porque se encontró en la bd, se redirige al Dashboard
        var dataUser = JSON.parse(localStorage.getItem("dataUser"));
        if (localStorage.getItem("dataUser") && dataUser?.cargo === 'funcionario') {
            return <Navigate to="/Dashboard" />;
        } else if(localStorage.getItem("dataUser") && dataUser?.cargo === 'club'){
            return <Navigate to="/Count" />;
        }else {
            //!Si no, vuelve al login
            return (
                <div className="App">
                    <div className="login">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="container">
                                    {/* //?Si presiona el btn, lo dirige a /Home */}
                                    <Link to="/Home" className="btn btn-login rounded-circle pt-3"><i className="fa-solid fa-circle-arrow-left fa-3x"></i></Link>
                                </div>
                                <div className="container container-login login-form">
                                    <h2 className="text-login text-center pb-3">Bienvenido funcionario</h2>
                                    <form>
                                        <div className="form-floating pb-3">
                                            <input type="text" className="form-control" placeholder="Nombre de usuario" onChange={(e) => this.setState({ email: e.target.value })} />
                                            <label htmlFor="floatingInput">Nombre de usuario</label>
                                        </div>
                                        <div className="form-floating pb-3">
                                            <input type="password" className="form-control" placeholder="Contraseña" onChange={(e) => this.setState({ password: e.target.value })} />
                                            <label htmlFor="floatingInput">Contraseña</label>
                                        </div>
                                        <div className="d-grid">
                                            {/* //?Se hacen los metodos del onClick y se redirige al Dashboard */}
                                            <Link to="/Dashboard" type="submit" className="btn btn-log align-bottom" onClick={submit}>Iniciar Sesión</Link>
                                        </div>
                                        <div className='d-flex flex-column justify-content-center align-items-center'>
                                            <div className="pt-3">
                                                <span><a className='link-login'>Recuperar contraseña</a></span>
                                            </div>
                                            <div className="pt-3">
                                                <span><Link to='/Login' className='link-login'>Iniciar como club</Link></span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-6 bg">
                                <div className="img-img">
                                    {/* IMAGEN */}
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
            );
        }
    }
}

export default LoginOfficer;