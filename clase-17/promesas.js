function operacionaAsincronica() {
  return new Promise((resolve, reject) => {
    const exito = !true;

    if (exito) {
      resolve("operacion exitosa");
    } else {
      reject("la operacion ha fallado");
    }
  });
}

operacionaAsincronica()
  .then((response) => {
    console.log("response", response);
  })
  .catch((error) => {
    console.log(error);
  });

async function ejemploAsincronico() {
  try {
    const resultado = await operacionaAsincronica();
    console.log(resultado);
  } catch (error) {
    console.log("error: ", error);
  }
}
ejemploAsincronico();

console.log("fuera de la operacion asincronica");
