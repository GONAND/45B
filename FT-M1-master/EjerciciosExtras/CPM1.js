// DOC. SI
// GOOGLEAR DOC. SI
// DOC. Extra SI

// Puedo copiar y pegar code directo de chatGPT NO
// puedo usar métodos nativos de JS cdo me dicen q no lo use NO
// en el ej. 1 no usar .sort()  NO

// si

//* TEMAS
/*
* CLOSURE  (receta)
* RECURSIÓN  (receta)

* Clases Constructoras (funciones constructoras) <- THIS
  Estructuras de Datos
  ? STACK   []    (un molde)
  ? QUEUE   []    (un molde)
  ? LINKED-LIST  {{{{}}}}    (dos moldes ->  List  Node)
  ? BST - Tree  {{{}{}}{{}{}}}    (un molde) Node <- Tree <- BST

* Algortimos de ordenamientos  <- tomar una lista ([]) desordenada y hacer tal cosa ...
!no usar el .sort()  NO 


function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[i]) {
        let aux = array[i];
        array[i] = array[j];
        array[j] = aux;
      }
    }
  }
  return array;
}
*/

/*
todo: Hackerrank / mismo email que usan para Henry y para GitHub
app o email enlace
Ingresar y/o registro
Aceptar 

CP
  Ej 1
  Ej 2
  ej 3
     aparece submit general


     Ej 1
     Run  Test  submit -> me puedo ir al Visual

     
*/

var obj = {};

var objArr = [];

// console.log(typeof obj === "object" && !Array.isArray(obj));

// console.log(Array.isArray(objArr));

// for (const key in object) {
// }

// for (let i = 0; i < array.length; i++) {}

function calculadoraAvanzada() {
  const obj = {
    valor: 0,
    sumar: null,
    multiplicar: null,
    restar: null,
    dividir: null,
  };
  obj.sumar = function (num) {
    this.valor += num;
    return this.valor;
  };
  obj.multiplicar = function (num) {
    this.valor *= num;
    return this.valor;
  };
  obj.restar = function (num) {
    this.valor -= num;
    return this.valor;
  };
  obj.dividir = function (num) {
    this.valor /= num;
    return Math.round(this.valor);
  };
  return obj;
}

const instObjClase = calculadoraAvanzada();
console.log(instObjClase);

function calculaSuperClosure() {
  let value = 0;
  return {
    sum: function (a, b) {
      value += a + b;
      return a + b;
    },
    mult: function (a, b) {
      value += a * b;
      return a * b;
    },
    verResult: function () {
      return value;
    },
  };
}

const queeee = calculaSuperClosure();
console.log(queeee.sum(2, 3));
console.log(queeee.mult(2, 4));
console.log(queeee.verResult());

// esto es considerado una closure?

//TODO:  EXTRA-REPASO M1

// hash linkedList Alg. ordenamiento

function HashTable() {
  this.buckets = [];
  this.numBuckets = 10;
}

// HashTable.prototype.hash = function (str) {
//   var result = 0;
//   for (let i = 0; i < str.length; i++) {
//     result += str[i].charCodeAt();
//   }
//   return result % this.numBuckets;
// };

HashTable.prototype.set = function (key, value) {
  if (typeof key !== "string") throw TypeError("Keys must be strings");
  let numBox = this.hash(key);

  if (this.buckets[numBox] === undefined) {
    this.buckets[numBox] = {};
  }
  this.buckets[numBox][key] = value;
  return this.buckets;
};
HashTable.prototype.get = function (key) {
  let numBox = this.hash(key);
  if (this.buckets[numBox] && this.buckets[numBox][key]) {
    return this.buckets[numBox][key];
  }
  return null;
};
HashTable.prototype.hasKey = function (key) {
  const result = this.get(key);
  if (result) return true;
  else return false;
};

HashTable.prototype.reset = function () {
  if (this.buckets.length > 0) {
    this.buckets = [];
    return "tabla vacía";
  } else {
    return "la tabla ya estaba vacía";
  }
};

HashTable.prototype.hash = function (str) {
  console.log(Date().split(" ")[4].split(":")[2]);
  let dateTimeActual = Date().split(" ")[4].split(":")[2];
  const code = str.length * Number(dateTimeActual);
  console.log(code);
  let indexTabla = code % this.numBuckets;
  console.log(indexTabla);
  return indexTabla;
};

HashTable.prototype.changeCantBox = function (num) {
  this.numBuckets = num;
  return "uhuuuuu";
};

const hashTest = new HashTable();

console.log(hashTest);
console.log(hashTest.hash("pepe"));

//* linkedList
/*
 LinkedList es una estructura de datos que se puede utilizar para representar una cola de 
 espera en un taller de reparación de vehículos, como mencionaste. Cada elemento de la LinkedList 
 podría representar un vehículo en la cola, y las operaciones comunes que se pueden realizar en 
 esta LinkedList incluirían: {data:{marca:"bmw", reparado:false}, next:{{{}}}}

* 1. Agregar un nuevo vehículo a la cola: Cuando un cliente llega al taller con su vehículo, se agrega 
un nuevo nodo a la LinkedList que representa este vehículo. Este nuevo nodo se coloca al final de l
a lista, ya que es el último en la cola de espera.

* 2. Marcar un vehículo como reparado: A medida que los vehículos avanzan en la cola de espera y se reparan, 
puedes marcar un nodo de la LinkedList como "reparado". Esto significa que el vehículo ha sido atendido 
y ya no está en espera.

* 3. Eliminar un vehículo de la cola: Cuando un vehículo ha sido reparado y recogido por el cliente, 
puedes eliminar el nodo correspondiente de la LinkedList. Esto reduce la longitud de la cola y garantiza 
que solo los vehículos pendientes de reparación permanezcan en la LinkedList.

* 4. Consultar el próximo vehículo en la cola: Puedes acceder al primer nodo de la LinkedList para determinar 
cuál es el próximo vehículo en la cola de espera. Esto permite al taller saber cuál es el próximo 
vehículo que debe atender.

En este escenario, la LinkedList es una forma eficaz de gestionar una cola de espera de vehículos, 
ya que permite agregar, eliminar y acceder a los elementos de la cola de manera eficiente, lo que 
refleja su utilidad en la vida real como una estructura de datos versátil.
*/

function LinkedList() {
  this.head = null,
  this._size= 0
}

function Node(car) {
  this.data = car,
  this.next= null
}


LinkedList.prototype.add = function (car) { // {marca: car,reparado: false}
  const newNode = new Node(car);
  // if(this.head===null){ // (this.head)   (null) <- false    ({}) <- true
  if (!this.head) {
    this.head = newNode;
  } else {
    let current = this.head;
    while (current.next) {
      // (null) <- false   ({}) <- true
      current = current.next;
    }
    current.next = newNode;
  }
  this._size++;
  return newNode;
};

LinkedList.prototype.remove = function () {
  if (!this.head) return null;
  var current = this.head;
  if (!this.head.next) {
    // el next que sigue al head es null <- this.head.next === null
    this.head = null;
    this._size--;
    return current.data;
  } else {
    while (current.next.next) {
      // ({}) <- true   (null) <- false
      current = current.next;
    } // aquí va a avanzar hasta no el último next, sino uno anterior
    console.log("--current--> ", current);
    const valueCopy = current.next.data;
    current.next = null;
    this._size--;
    return valueCopy;
  }
};

LinkedList.prototype.reparado = function (nameCar) { // {marca: car,reparado: true}
  if (!this.head) return null;
  var current = this.head;
  while (current) {
    if (current.data.marca === nameCar) {
       current.data.reparado = true;
       return current.data
    }
    current = current.next;
  }
  return null;
};

LinkedList.prototype.verUltimoCar = function () {
  if(!this.head) return "no hay autos"
  var current = this.head 
  console.log(current)
  if(!current.next){
    // console.log("in")
    return current.data 
  } 
  while (current.next) {
    // console.log(current)
    current = current.next
  }
  return current.data
}

const testList = new LinkedList()
testList.add({marca: "ford",reparado: false})
testList.add({marca: "bmw",reparado: false})
testList.add({marca: "fiat",reparado: false})
// testList.remove()
testList.reparado("fiat")
console.log(testList.verUltimoCar())
console.log(testList)



//* Alg. ordenamiento
const listProducts=
[
  {idVenta: 1, "cantidad": 5},
  {idVenta: 2, "cantidad": 3},
  {idVenta: 3, "cantidad": 5},
  {idVenta: 4, "cantidad": 2},
  {idVenta: 5, "cantidad": 3}
 ]
/*
Tienes una lista de ventas con su ID de venta y cantidad de productos vendidos. 
El objetivo es ordenar esta lista de ventas por la cantidad de productos vendidos. 
Si dos ventas tienen la misma cantidad de productos vendidos, deben mantener su orden relativo original.
[
 {"idVenta": 1, "cantidad": 5},
 {"idVenta": 2, "cantidad": 3},
 {"idVenta": 3, "cantidad": 5},
 {"idVenta": 4, "cantidad": 2},
 {"idVenta": 5, "cantidad": 3}
]
*/
function orderList(list){

}

console.log(orderList(listProducts))
