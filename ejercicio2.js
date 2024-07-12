// Obtener la frase ingresada por el usuario
var frase = prompt('Escribe una frase y te diré cuántas "vocales" hay en ella');

// Contar el número total de caracteres en la frase
var numeroCaracteres = frase.length;

// Contar el número de vocales (sin distinguir mayúsculas y minúsculas)
var numeroVocales = frase.match(/[aeiou]/gi).length;

// Calcular el número de vocales por clases (en este caso, simplemente dividiendo por 5)
var vocalesPorClase = numeroVocales / 5;

// Mostrar los resultados
alert(`La frase tiene ${numeroCaracteres} caracteres.`);
alert(`Las vocales de tu frase son: ${numeroVocales}.`);
alert(`Vocales por clase: ${vocalesPorClase}.`);
