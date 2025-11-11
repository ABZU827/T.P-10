function areaCirculo(radio) {
  return Math.PI * radio * radio;
}
console.log(areaCirculo(5));

function sumarArray(numeros) {
  let suma = 0;
  for (let num of numeros) {
    suma += num;
  }
  return suma;
}
console.log(sumarArray([2, 4, 6, 8]));
