/* Haz un bucle y muestra por consola todos aquellos valores del array que incluyan
la palabra "Camiseta". 
Usa la función .includes de javascript. */


const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

function camisetaIncludes(cualquierArray) {
    let camis = "";
  
    for (let i = 0; i < cualquierArray.length; i++) {
      if (cualquierArray[i].includes("Camiseta")) 
      console.log(cualquierArray[i])
    }
  }
  camisetaIncludes(products)