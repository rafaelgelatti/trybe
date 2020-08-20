let ang1 = 150;
let ang2 = 19;
let ang3 = 11;

let isAngular = ((ang1 + ang2 + ang3) === 180);

if (isAngular) {
    console.log("Os valores " + ang1 + ", " + ang2 + " e " + ang3 + " representam os ângulos internos de um triângulo.")
} else {
    console.log("Erro. Valores NÃO representam os ângulos internos de um triângulo.")
}

// revisiting 19/08/2020
const checkIfIsAngular = (ang1, ang2, ang3) => {
    let angle = ((ang1 + ang2 + ang3) === 180);
    if (angle) {
        console.log(`The sum of the values ${ang1}, ${ang2} and ${ang3} represent the internal angles of a triangle.`)
    } else {
        console.log(`Error. The sum of the values ${ang1}, ${ang2} and ${ang3} do not represent the internal angles of a triangle`);
    }
}

checkIfIsAngular(35,35,110);
checkIfIsAngular(45,15,150);