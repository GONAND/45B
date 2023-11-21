let tragos = {
  trago1: { nombre: "margarita", cantidadVendida: 20 },
  trago2: { nombre: "sofia", cantidadVendida: 25 },
  trago2: { nombre: "jose", cantidadVendida: 15 },
};

function encontrarTragoPopular(tragos, i = 0) {
  // Tu código aquí:
  if (Object.entries(tragos).length === 0) return false;
  if (i < Object.entries(tragos).length) {
    let tragoMasVendido = 0;

    if (Object.values(tragos)[i]["cantidadVendida"] >= tragoMasVendido) {
      tragoMasVendido = Object.entries(tragos)[i];

      return encontrarTragoPopular(tragos, i + 1);
    } else {
      encontrarTragoPopular(tragos, i + 1);
    }
  }

  Object.assign(tragoMasVendido, { tragoMasVendido: true });

  return tragoMasVendido;
}
console.log(encontrarTragoPopular(tragos, (i = 0)));
