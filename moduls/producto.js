export function crearProductoCard(producto) {
    const card = document.createElement("div");
    card.classList.add("producto-card");

    const imagen = document.createElement("img");
    imagen.src = producto.image;
    imagen.alt = producto.title;

    const info = document.createElement("div");
    info.classList.add("producto-info");

    const titulo = document.createElement("h3");
    titulo.classList.add("producto-titulo");
    titulo.textContent = producto.title;

    const descripcion = document.createElement("p");
    descripcion.classList.add("producto-descripcion");
    descripcion.textContent = producto.description;

    const precio = document.createElement("p");
    precio.classList.add("precio");
    precio.textContent = `Precio: $${producto.price.toFixed(2)}`;

    
    info.appendChild(titulo);
    info.appendChild(descripcion);
    info.appendChild(precio);
    card.appendChild(imagen);
    card.appendChild(info);

    return card;
}