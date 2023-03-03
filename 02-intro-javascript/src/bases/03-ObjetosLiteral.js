const persona = {
  nombre: "Yulman",
  apellido: "Melindres",
  edad: 25,
};

// console.table(persona);

// Operador spread para clonar o extraer cada una de las propiedades y asignarlas

const persona2 = { ...persona };

console.log(persona);
console.log(persona2);