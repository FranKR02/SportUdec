
// Con este metodo verificamos si el usuario tiene una cuenta en la pagina
//?Retona un objeto del tipo usuario (SportClub) o error en el status code
export async function getClub(email, password) {
    var club;
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            correo: email,
            clave: password
        })
    };
    await fetch('https://localhost:44301/login', requestOptions)
        //Volvemos la respuesta a json
        .then(response => response.json())
        //La respuesta ahora es data, datos = data
        .then(data => {
            club = data;
        }).catch(() => {
            //Si captura algun error lo retornamos como error
            club = "error"
        });
    return club;
}
//Obtener todos los clubs
export async function getClubs() {
    var clubs;
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    await fetch('https://localhost:44301/sportclub', requestOptions)
        //Volvemos la respuesta a json
        .then(response => response.json())
        //La respuesta ahora es data, datos = data
        .then(data => {
            clubs = data;
        }).catch(() => {
            //Si captura algun error lo retornamos como error
            clubs = "error"
        });
    return clubs;
}

//Borrar club
export async function deleteClub(id) {
    var clubs;
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    };
    await fetch('https://localhost:44301/sportclub/' + id, requestOptions)
        //Volvemos la respuesta a json
        .then(response => response.json())
        //La respuesta ahora es data, datos = data
        .then(data => {
            clubs = data;
        }).catch(() => {
            //Si captura algun error lo retornamos como error
            clubs = "error"
        });
    return clubs;
}
//Agregar
export async function addClub(nombre, email, clave, numeroEstudiantes, profesor, recursos, deporte) {
    var dataUser = JSON.parse(localStorage.getItem("dataUser"));
    var club;
    fetch('https://localhost:44301/sportclub', {
        method: 'POST',
        body: JSON.stringify({
            nameClub: nombre,
            address: email,
            password: clave,
            numberStudens: Number(numeroEstudiantes),
            managerName: profesor,
            id: dataUser.id,
            physicalResources: recursos,
            sport: deporte
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => club = data)
        .catch((e) => {
            club = "error"
        });
    return club;
}
//Editar
export async function editClub(idClub, nombre, email, clave, numeroEstudiantes, profesor, recursos, deporte, id) {
    var dataUser = JSON.parse(localStorage.getItem("dataUser"));
    var club;
    fetch('https://localhost:44301/sportclub/' + id, {
        method: 'PUT',
        body: JSON.stringify({
            idSportclub: idClub,
            nameClub: nombre,
            address: email,
            password: clave,
            numberStudens: Number(numeroEstudiantes),
            managerName: profesor,
            id: dataUser.id,
            physicalResources: recursos,
            sport: deporte
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => club = data)
        .catch((e) => {
            club = "error"
        });
    return club;
}

//! Se pueden poner mas metodos acá, SOLO PARA EL FUNCIONARIO