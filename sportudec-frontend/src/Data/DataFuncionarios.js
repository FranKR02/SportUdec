export function getFuncionario(email, password) {
    var funcionario;
    // fetch('https://localhost:44301/login', {
    //     method: 'POST',
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         correo: email,
    //         clave: password
    //     })
    // }).then((response) => {
    //     console.log(response)
    // }).then((funcionarios) => {
    //     console.log(funcionarios)
    //     funcionario = funcionarios;
    //     // this.setState({ todos: empleados.results }) //RICk Y MORTY
    // });
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            correo: email,
            clave: password
         })
    };
    fetch('https://localhost:44301/login', requestOptions)
        .then(response => response.json())
        .then(data => {
            funcionario = data;
        });
    return funcionario;

}