const date = [
  {
    name: "Carol",
    ticket: "FALSO",
    estado: "Desconocido",
  },
  {
    name: "Gonzalo",
    ticket: "VIP",
    estado: "Conocido",
  },
  {
    Name: "Micaias",
    ticket: "VIP",
    estado: "Conocido",
  },
  {
    Name: "Coraline",
    ticket: "FALSO",
    estado: "Desconocido",
  },
  {
    Name: "Micaias",
    ticket: "VIP",
    estado: "Desconocido",
  },
  {
    name: "Mati",
    ticket: "VIP",
    estado: "Conocido",
  },
];

function iterador(date) {
  let ingresar = [];
  for (let i = 0; i < date.length; i++) {
    if (date[i]["ticket"] === "VIP" && date[i]["estado"] === "Conocido") {
      ingresar.push(date[i]);
    }
  }
  return ingresar;
}

console.log(iterador(date));
