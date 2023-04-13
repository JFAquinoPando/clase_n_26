const campos = [
    {
        texto: "nombre",
        tipo: "text"
    },
    {
        texto: "apellido",
        tipo: "text"
    },
    {
        texto: "fecha_nac",
        tipo: "date"
    },
    {
        texto: "email",
        tipo: "email"
    },
    {
        texto: "tipo_documento",
        tipo: "text"
    },
    {
        texto: "numero_documento",
        tipo: "text"
    },
]

const test = campos.map(function (elemento, indice) {
    return `<div class="form-group">
                <label for="${elemento.texto}">${elemento.texto}</label>
                <input class="form-control" type="${elemento.tipo}" name="${elemento.texto}" id="${elemento.texto}" placeholder="${elemento.texto}">
            </div>`
})

console.log("veamos el test", test);

document.querySelector(".campos").innerHTML = test.join("")


{/* <div class="form-group">
    <label for="nombre">nombre</label>
    <input class="form-control" type="text" name="nombre" id="nombre" placeholder="Ej: Juan">
</div>
 */}

const botonEnviar = document.querySelector(".enviar")
botonEnviar.addEventListener("click", function (params) {
    params.preventDefault();
    console.log("El params: ", params);

    const elformulario =  document.querySelector("form")
    const formData = new FormData(elformulario);

    const listaItemFormulario = []
    const persona = {}

    for (const [key, value] of formData) {
        console.log(`${key}: ${value}\n`);
        persona[key] = value

    }


    console.log("objeto persona", persona);
    const jsonPersona = JSON.stringify(persona)
    guardarDato("personaClase26", jsonPersona)
    document.querySelector("form").reset()
})


const botonObtener = document.querySelector(".obtener")
botonObtener.addEventListener("click", function (params) {
    params.preventDefault();
    let datosTexto =  obtenerDato("personaClase26")
    document.querySelector(".resultado").innerHTML = datosTexto
    datosTexto = JSON.parse(datosTexto)
    for (const iterator in datosTexto) {
        document.getElementById(iterator).value = datosTexto[iterator]
    }
})



const botonLimpiar = document.querySelector(".limpiar")
botonLimpiar.addEventListener("click", function (params) {
    params.preventDefault();
    document.querySelector(".resultado").innerHTML = ""
    borrarDato("personaClase26")
    document.querySelector("form").reset()
})


