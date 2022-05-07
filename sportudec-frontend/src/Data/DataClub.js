
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

//! Se pueden poner mas metodos acá, SOLO PARA EL FUNCIONARIO