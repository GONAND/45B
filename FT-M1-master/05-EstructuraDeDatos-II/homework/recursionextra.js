const listaDeProductos = [
  {
    id: 1,
    nombre: "Producto 1",
    precio: 19.99,
    descripcion: "Descripción del Producto 1",
  },
  {
    id: 2,
    nombre: "Producto 2",
    precio: 24.99,
    descripcion: "Descripción del Producto 2",
  },
  {
    id: 3,
    nombre: "Producto 3",
    precio: 14.99,
    descripcion: "Descripción del Producto 3",
  },
  // Puedes agregar más productos aquí
];

//recorrer un array productos y ver si se encuentra (buscar nombre)
//por params se pasa una lista de productos

function searchProduct(list, name) {
  if (list.length === 0) return "producto no encontrado";
  let product = list.pop();
  if (name === product.nombre) {
    return "producto entontrado " + product.id;
  }

  return searchProduct(list, name);
}

console.log(searchProduct(listaDeProductos, "Producto 1"));
