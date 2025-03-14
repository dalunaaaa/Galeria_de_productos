
import { productosApi } from "../services/api.js";
import { crearProductoCard } from "../moduls/producto.js";

async function mostrarProductos() {
    try {
        let datos = await productosApi();
        console.log(datos); 
        todosLosProductos(datos);
    } catch (error) {
        console.error("Error: ", error);
    }
}

// ----------------------------------------------------------------------------------

function todosLosProductos(data) {
    let DOM = document.querySelector("#root");
    DOM.innerHTML = ""; 
    data.forEach(element => {
        console.log(element);
        let card = crearProductoCard(element);
        DOM.appendChild(card);
    });
}

export { mostrarProductos };