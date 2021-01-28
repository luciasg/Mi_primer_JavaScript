'use strict';

const scores = [6, 7, 2, 9, 3, 4, 5, 8, 2];

// En este caso, el ejercicio se resuelve de dos maneras:

// Utilizando for:
let nota = 0;
for (let i = 0; i < scores.length; i++) {
  nota += scores[i];
};
console.log('Con el bucle FOR la calificación final es ' + nota);

// Utilizando un for ... of:
let puntuacion = 0;
for (let score of scores) {
  puntuacion += score;
};
console.log('Con el bucle FOR OF la calificación final es ' + puntuacion);