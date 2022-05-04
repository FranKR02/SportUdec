import { Component } from "react";

class GetFuncionarios extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            id: ''
        }
    }
    componentDidMount() {
        fetch('https://localhost:44301/funcionarios' + this.state.id)
            .then((response) => {
                return response.json()
            })
            .then((empleados) => {

                this.setState({ todos: empleados })
                // this.setState({ todos: empleados.results }) //RICk Y MORTY
            })
    }
    render() {
        const funcionarios = this.state.todos.map((todo) => {
            return (
                <div className="col-sm-4 col-md-4 col-lg-4 p-2" key={todo.id}>
                    <div className="card shadow-lg" style={{  height: "14rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">{todo.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">ID {todo.id}</h6>
                            <p className="card-text">Email {todo.email}</p>
                            <p className="card-text">Cedula {todo.cedula}</p>
                            <div className="d-flex justify-content-center">
                                <button className="btn btn-danger">Borrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        });
        return (
            <div className="row">
                {funcionarios}
            </div>

        )
    }
}

export default GetFuncionarios;