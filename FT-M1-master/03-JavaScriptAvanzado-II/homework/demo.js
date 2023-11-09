function saludar(nombre) {
  return function () {
    return "hola " + nombre;
  };
}

saludo = saludar("feli");
console.log(saludo());

// otra forma de ejecutar
console.log(saludar("manuel")());
