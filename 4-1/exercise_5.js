let ang1 = 150;
let ang2 = 19;
let ang3 = 11;

let isAngular = ((ang1 + ang2 + ang3) === 180);

if (isAngular) {
    console.log("Os valores " + ang1 + ", " + ang2 + " e " + ang3 + " representam ons ângulos internos de um triângulo.")
} else {
    console.log("Erro. Valores NÃO representam os ângulos internos de um triângulo.")
}