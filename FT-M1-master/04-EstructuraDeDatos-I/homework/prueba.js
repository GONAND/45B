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

function Queue() {
  this.array = [];
}

Queue.prototype.enqueue = function (elemento) {
  return this.array.push(elemento);
};

Queue.prototype.dequeue = function () {
  return this.array.shift();
};

Queue.prototype.size = function () {
  return this.array.length;
};

const lista = new Queue();
console.log(lista.enqueue("jose"));
console.log(lista.size());
console.log(lista);

let arra1 = [1, 3, 5, 7];
let arra2 = [2, 4, 6, 8];

console.log(arra1.concat(arra2));

LinkedList.prototype.tacharLista = function (sinStock) {
  // Tu código awuí:
  const nuevaLista = new LinkedList();
  if (sinStock.length === 0) return LinkedList;
  let current = this.head;
  while (current) {
    for (let i = 0; i < sinStock.length; i++) {
      if (current.value !== sinStock[i]) {
        let aux = current.value;
        nuevaLista.add(aux);
      }
    }
    current = current.next;
  }
  return nuevaLista;
};
