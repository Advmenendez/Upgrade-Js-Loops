//Usa un bucle for...of para recorrer todos los juguetes y elimina los que 
//incluyan la palabra gato.

const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ]

    for (const iterator of toys) {
        if(iterator.name.includes("gato"))
        toys.splice(toys.indexOf(iterator))
    }
 console.log(toys)