/* Haz un bucle y muestra por consola todos aquellos valores del array que incluyan
la palabra "Camiseta". 
Usa la función .includes de javascript. */


const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

function camisetaIncludes(cualquierArray) {
    let camis = [];
  
    for (let i = 0; i < cualquierArray.length; i++) {
      if (camis.includes("Camiseta")) {
        products.push(cualquierArray[i]);
      }
    }
    return console.log(camis);
  }
  camisetaIncludes(products)