var nombre = "mauro";
var myKey = "nombre";

const obj = {};

const objVerduleria = {
  title: "",
  verduras: [],
  frutas: [],
  direccion: "",
  owner: {
    nombre: "",
    edad: "",
  },
};

function initData(owner, title, direccion) {
  this.owner = owner;
  this.title = title;
  this.direccion = direccion;

  return this.title;
}

const testBindFunData = initData.bind(objVerduleria);
testBindFunData({});
console.log(objVerduleria);
function verDireccion() {}
