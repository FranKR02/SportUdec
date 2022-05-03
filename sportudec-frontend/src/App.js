import { Component } from 'react';
import './App.css';
import GetFuncionarios from './Data/GetFuncionarios';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="container">
            <h1 className='display-4 fw-bolder pb-2 text-white'>SportUdec</h1>
          </div>
        </div>
        <div className="container">
          <GetFuncionarios />
        </div>
      </div>
    );
  }
}

export default App;
