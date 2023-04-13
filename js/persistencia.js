/* console.log("Existe el localstorage? ", window.localStorage);
// window.localStorage.setItem("prueba_tn_26","hola, estoy en el navegador!");


document.querySelector(".resultado").innerText = window.localStorage.getItem("prueba_tn_26"); */

function obtenerDato(clave) {
    new Toast({
        message: 'Dato recuperado!',
        type: 'success'});
    return window.localStorage.getItem(clave)
}

function guardarDato(clave, valor) {
    window.localStorage.setItem(clave, valor)
    new Toast({
        message: 'Archivo guardado!',
        type: 'success'
        /* customButtons: [
            {
                text: 'Refresh the page',
                onClick: function () {
                    window.location.reload();
                }
            },
            {
                text: 'Follow @ireaderinokun',
                onClick: function () {
                    window.open('https://twitter.com/ireaderinokun');
                }
            }
        ] */
    });


}

function borrarDato(clave) {
    window.localStorage.removeItem(clave)
    new Toast({
        message: "Dato eliminado",
        type: "danger"
    })
}