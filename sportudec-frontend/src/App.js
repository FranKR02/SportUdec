import { Component, Fragment } from 'react';
import './App.css';
import IMG from '../src/images/work-team.png'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './views/Login';
import DashboardOfficer from './views/DashboardOfficer';
import Count from './views/Count';
import LoginOfficer from './views/LoginOfficer';

class App extends Component {
  render() {
    function Main() {
      return (
        <div className="principal">
          <div className="img image-background p-0">
            <div className="main">
              {/* NAVEGACION */}
              <nav className="navbar navbar-expand-lg fw-bold" id='navbar'>
                <div className="container d-flex">
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="logo">
                    <Link to='/Home' className="navbar-brand color-text">SportUdec</Link>
                  </div>
                  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 h-100">
                      <li className="nav-itemm">
                        <a className="nav-link nav-linkk active color-text" aria-current="page" href="#">Inicio</a>
                      </li>
                      <li className="nav-itemm h-100">
                        <a className="nav-link nav-linkk color-text" href="#nosotros">Nosotros</a>
                      </li>
                      <li className="nav-itemm">
                        <a className="nav-link nav-linkk color-text" href='#servicios'>Servicios</a>
                      </li>
                      <li className="nav-itemm">
                        <a className="nav-link nav-linkk color-text" href='#contacto'>Contactos</a>
                      </li>
                    </ul>
                    <div className="buttons">
                      <Link to="/Login" className='btn btn-user rounded-pill me-3 fw-bold color-text'>Ingresar</Link>
                    </div>
                  </div>
                </div>
              </nav>
              {/* CONTENIDO */}
              <div className="container container-main">
                <h2 className='title-main'>Haz conocida tu escuela deportiva</h2>
                <p className='text-main'>Acércate a la Casa de la Cultura, solicita tu registro para que puedas</p>
                <p className='text-main'>ser parte de nuestra comunidad y logres que muchas </p>
                <p className='text-main'>personas conozcan tu escuela deportiva.</p>
                <div>
                  <a className='btn btn-lg rounded-3 btn-about fw-bold me-2' href='#nosotros'>Ver más</a>
                  <a className='btn btn-lg rounded-3 btn-about fw-bold' href='#servicios'>Servicios</a>
                </div>
              </div>
            </div>
          </div>
          {/* NOSOTROS */}
          <div className="nosotros pt-5 pb-4" id='nosotros'>
            <div className="container pt-3 pb-3">
              <div className="row">
                <div className="col-md-6 about">
                  <h2 className='title-about'>Nosotros</h2>
                  <p className='text-about'>SportUdec es una pagina web que te facilitará la difusión de tu escuela deportiva con ayuda de la alcaldía municipal. Esto con la intención de apoyar el deporte y las escuelas deportivas del municipio para que se den a conocer a través de SportUdec. </p>
                  <h2 className='title-about'>¿En qué me ayuda SportUdec?</h2>
                  <p className='text-about'>SportUdec busca reunir la mayor información de las escuelas deportivas del municipio de Facatativá en una sola página para que la población o gente interesada en realizar deporte en Facatativá pueda encontrar la información de forma rapida, segura y centralizada. <br /> Ademas, si estás empezando o quieres tener más alumnos, puedes formar parte de SportUdec y dar a conocer tu escuela deportiva.  </p>
                </div>
                <div className="col-md-6">
                  <div className="box">
                    <img src={IMG} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* SERVICIOS */}
          <div className="servicios bg-light pt-4 pb-4 d-flex flex-column justify-content-around" id='servicios'>
            <h2 className='title-about pt-2'>Servicios</h2>
            <div className="container pt-5 h-100 d-flex align-items-baseline justify-content-around">
              <div className="row">
                <div className="col-md-4">
                  <div className="card shadow-lg" style={{ height: "14rem", width: "22rem" }}>
                    <div className="card-body d-flex flex-column justify-content-center align-items-center">
                      <h5 className="card-title m-0"><i className="fa-solid fa-headset fa-2x"></i></h5>
                      <h6 className="card-subtitle mb-2">Atención</h6>
                      <div className="container">
                        <p className="card-text">Nuestros servicios se encargan de guardar y publicar automaticamente tu información.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card shadow-lg" style={{ height: "14rem", width: "22rem" }}>
                    <div className="card-body d-flex flex-column justify-content-center align-items-center">
                      <h5 className="card-title m-0"><i className="fa-solid fa-newspaper fa-2x"></i></h5>
                      <h6 className="card-subtitle mb-2">Difusion</h6>
                      <div className="container">
                        <p className="card-text">Ingresa tu información en nuestro sitio web y nosotros nos encargamos de guarda y publicar tus datos.</p>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card shadow-lg" style={{ height: "14rem", width: "22rem" }}>
                    <div className="card-body d-flex flex-column justify-content-center align-items-center">
                      <h5 className="card-title m-0"><i className="fa-solid fa-basketball fa-2x"></i></h5>
                      <h6 className="card-subtitle mb-2">Apoyo</h6>
                      <div className="container">
                        <p className="card-text">SportUdec ayuda a las pequeñas y grandes escuelas de formación deportiva.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* CONTACTOS */}
          <div className="contactos bg-dark pt-4 pb-4" id='contacto'>
            <div className="container">
              <div className="row d-flex justify-content-around">
                <div className="col-md-4">
                  <h2 className='title-about'>SportUdec</h2>
                  <p className='card-text'>Publica y comparte la infromación de tu escuela deportiva con nosotros. Sé parte de nuestra familia!</p>
                  <div className='iconos pt-3'>
                    <a className='icono-a' href="https://www.facebook.com/frank.rojas.9465177" target="_blank"><i className="fa-brands fa-facebook fa-3x shadow"></i></a>
                    <a className='icono-a' href="https://www.linkedin.com/in/frank02/" target="_blank"><i className="fa-brands fa-linkedin fa-3x shadow"></i></a>
                    <a className='icono-a' href="https://github.com/FranKR02" target="_blank"><i className="fa-brands fa-github fa-3x shadow"></i></a>
                    <a className='icono-a' href="#"><i className="fa-solid fa-at fa-3x shadow"></i></a>
                  </div>
                </div>
                <div className="col-md-4">
                  <h2 className='title-about'>Contáctanos</h2>
                  <form>
                    <div className="input-group mb-3">
                      <span className="input-group-text "><i className="fa-solid fa-user"></i></span>
                      <input type="text" className="form-control" placeholder="Nombre" />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text "><i className="fa-solid fa-at"></i></span>
                      <input type="text" className="form-control" placeholder="Correo" />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text"><i className="fa-solid fa-comment"></i></span>
                      <textarea cols="30" rows="2" className="form-control" placeholder="Mensaje"></textarea>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button className="btn btn-lg btn-contact fw-bolder" type="button">Enviar</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* COPYRIGHT */}
          <div className="bg-dark pb-2">
            <div className="container copyright">
              <div className='text-muted p-0 m-0 h-100 d-flex justify-content-center align-items-center'>&#169; Copyright 2022 | Designed by<a className='text-white fw-bolder ps-1' href='https://www.linkedin.com/in/frank02/' target="_blank" id='copy'> Frank Rojas</a></div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <Router>
        <Fragment>
          <div className="App">
            <Routes>
              {/* //!TODAS LAS RUTAS DE LA PAGINA DEBEN IR ACA, ROUTER PADRE*/}
              {/* El <Main/> es el mentodo, no un componente */}
              {/* Se usa una funcion ya que si se deja normal se va a mostrar ese contenido mas lo del login */}
              <Route exact path="/Home" element={<Main />} />
              <Route exact path="/" element={<Main />} />
              {/* Ruta absoluta (/Home) y relativa (/) */}

              {/* Login club */}
              <Route exact path="/Login" element={<Login />} />
              {/* Login Funcionario */}
              <Route exact path="/LoginOfficer" element={<LoginOfficer />} />
              {/* Vista del club */}
              <Route exact path="/Count" element={<Count />} />
              {/* Vista del administrador */}
              <Route exact path='/Dashboard' element={<DashboardOfficer />}/>
            </Routes>
          </div >

        </Fragment>
      </Router>
    );
  }
}

export default App;
