// src/data/TodosLosProductos.jsx

export async function getTodosLosProductos() {
    const response = await fetch("http://localhost:8080/api/productos/con-imagenes");

    if (!response.ok) {
        throw new Error("No se pudo obtener los productos");
    }

    const productos = await response.json();
    return productos;
}
