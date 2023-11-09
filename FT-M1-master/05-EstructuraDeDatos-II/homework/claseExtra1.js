//crear una memoria que me de la posibilidad de guardar o
//editar datos de diferentes usuarios pudiendo almacenarlos con algun
//identificador unico
// para guardar vas a recibir por parametro el usuario
//para editarlo recibe el identificador del usuario
//creamos la memoria que va a interactuar con la closeur y
// el ID es para identificar cada usuario
function memoDrive() {
  let memo = {};
  let id = 1;
  // creamos un objeto closure que cada uno realiza su respectiva tarea
  //guardar - editar
  const saveEdit = {
    save: function (obj) {
      let nameKey = "user_" + id;
      id++;
      memo[nameKey] = obj;
      return memo;
    },
    edit: function (userId, name) {
      console.log(memo[userId]);
      memo[userId] = name;
      return "UN MENSAJE";
    },
  };

  return saveEdit;
}

const testMemoDrive = memoDrive();

console.log(testMemoDrive.save({ name: "mauro" }));
console.log(testMemoDrive.edit("user_1", "mauro"));

// el objetivo de la consigna es guardar en una memoria las letras
//que me pasan por parametro con su valor equivalente en code ASCII

console.log("a".charCodeAt());
function memoDrive2(data = {}) {
  function createCodeAscii(str) {
    if (data.hasOwnProperty(str)) return data;
    let val = str.charCodeAt();
    data[str] = val;
    return data;
  }
  return createCodeAscii;
}
const res = memoDrive2();
console.log(res("a"));
