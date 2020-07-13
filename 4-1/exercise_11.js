let salario_bruto = 3500;

let salario_liquido;
let desconto_inss;
let salario_inss;
let desconto_ir;
let salario_ir;

//INSS
if (salario_bruto <= 1556.94) {
    desconto_inss = salario_bruto * 0.08;
} else if (salario_bruto <= 2594.92) {
    desconto_inss = salario_bruto * 0.09;
} else if (salario_bruto <= 5189.82) {
    desconto_inss = salario_bruto * 0.11;
} else {
    desconto_inss = 570.88;
}

salario_inss = salario_bruto - desconto_inss;


//IR
if (salario_inss <= 1903.98) {
    desconto_ir = 0;
} else if (salario_inss <= 2826.65) {
    desconto_ir = (salario_inss * 0.075) - 142.8;
} else if (salario_inss <= 3751.05) {
    desconto_ir = (salario_inss * 0.15) - 354.80;
} else if (salario_inss <= 4664.68) {
    desconto_ir = (salario_inss * 0.225) - 636.13;
} else {
    desconto_ir = (salario_inss * 0.275) - 869.36;
}

salario_ir = salario_inss - desconto_ir;

console.log("Salário bruto = R$ " + salario_ir);