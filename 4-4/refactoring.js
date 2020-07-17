//1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b,
// definidas no começo com os valores que serão operados. Faça programas para:
// Adição
// Subtracão
// Multiplicação
// Divisão
// Módulo

//addition
function addition(value1, value2) {
    return value1 + value2;
}

console.log("---");
console.log("Addition: " + addition(2,19));
console.log("");

//subtraction
function subtraction(value1, value2) {
    return value1 - value2;
}

console.log("---");
console.log("Subtraction: " + subtraction(15,4));
console.log('');

//multiplication
function multiply(value1, value2) {
    return value1 * value2;
}

console.log("---");
console.log("Multiplication: " + multiply(3,41));
console.log('');

//division
function division(value1, value2) {
    return value1 / value2;
}

console.log("---");
console.log("Division: " + division(18, 6));
console.log('');

//modulus
function modulus(value1, value2) {
    return value1 % value2;
}

console.log('---');
console.log("Modulus: " + modulus(17,5));
console.log('');

//2- Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.

function comparison(value1, value2) {
    if (value1 === value2) {
        return "Same";
    } else if (value1 > value2) {
        return value1;
    } else {
        return value2;
    }
}

console.log('--2');
console.log("Comparison: " + comparison(9,2));
console.log("");

//3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

function compareThreeValues(value1, value2, value3) {
    let biggestNumber = value1;
    let values = [value1, value2, value3];
    
    for (value in values) {
        if (values[value] > biggestNumber) {
            biggestNumber = values[value];
        }
    } 

    return biggestNumber;
}

console.log('---3');
console.log("Comparison between three values: " + compareThreeValues(29, 3, 6));
console.log('');

//4- Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

function isPosNeg(input) {
    let value = input;

    if (input > 0) {
        return "Positive";
    } else if (input < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

console.log('---4');
console.log("Checking if positive or negative: " + isPosNeg(-88));
console.log('');

//5- Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo.
//Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.
//Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus. 
//Caso os ângulos estejam inválidos, o programa deve retornar uma mensagem de erro.

function isAngle(v1, v2, v3) {
    if ((v1 + v2 + v3) === 180) {
        return true;
    } else {
        return false;
    }
}

console.log ('---5');
console.log("Is 180o angle? " + isAngle(60,60,50));
console.log('');

//6- Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
//Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas,
//sem aumentar a quantidade de condicionais.
//Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
//Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
//Exemplo: bishop -> diagonals

function chessPieceMovement(piece) {
    let pieceLC = piece.toLowerCase();

    switch (pieceLC) {
        case 'peon':
            return "forward 1 block";
            break;
        case 'bishop':
            return "diagonals";
            break;
        case 'tower':
            return "horizontally and vertically";
            break;
        case 'horse':
            return "L shaped movement";
            break;
        case 'king':
            return "1 block any side";
            break;
        case 'queen':
            return "ANYWHEEEEERE!! by Gary Oldman in Leon the Professional"
        default:
            break;
    }
}

console.log("---6");
console.log("Chess piece movement: " + chessPieceMovement("QueEn"));
console.log('');

//7- Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

function grade(input) {
    if (input < 0 || input > 100) {
        return "Error!";
    } else if (input >= 90) {
        return "A";
    } else if (input >= 80) {
        return "B";
    } else if (input >= 70) {
        return "C";
    } else if (input >= 60) {
        return "D";
    } else if (input >= 50) {
        return "E";
    } else {
        return "F";
    }
}

console.log ("---7");
console.log("Grade: " + grade(49));
console.log('');

//8- Escreva um programa que defina três números em variáveis no seu começo e retorne true se uma das três for par.
//Caso contrário, ele retorna false. Bonus: use somente um if.

function isEven(v1, v2, v3) {
    if ((v1 % 2 === 0) || (v2 % 2 === 0) || (v3 % 2 === 0)) {
        return true;
    } else {
        return false;
    }
}

console.log('---8');
console.log("Is one of them an even number? " + isEven(9,3,7));
console.log('');

//9- Escreva um programa que defina três números em variáveis no seu começo e retorne true se uma das três for ímpar.
//Caso contrário, ele retorna false. Bonus: use somente um if.

function isOdd(v1, v2, v3) {
    if ((v1 % 2 !== 0) || (v2 % 2 !== 0) || (v3 % 2 !== 0)) {
        return true;
    } else {
        return false;
    }
}

console.log('---8');
console.log("Is one of them an odd number? " + isOdd(9,3,7));
console.log('');

//10- Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. 
// A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

function rawProfit(buy, sell) {
    let taxedBuy = buy + (buy * 0.2);

    return (sell - taxedBuy) * 1000;
}

console.log('---10');
console.log('Raw profit is: $ ' + rawProfit(17,41) + ",00");
console.log('');

//11- Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. 
// Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
// INSS
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

function netSalary(grossSalary) {

    //INSS
    if (grossSalary <= 1556.94) {
        grossSalary -= (grossSalary * 0.08);
    } else if ( grossSalary <= 2594.92) {
        grossSalary -= (grossSalary * 0.09);
    } else if (grossSalary <= 5189.82) {
        grossSalary -= (grossSalary * 0.11);
    } else {
        grossSalary -= 570.88;
    }

    //IR
    if (grossSalary <= 1903.98) {
        grossSalary -= 0;
    } else if (grossSalary <= 2826.65) {
        grossSalary -= ((grossSalary * 0.075) - 142.8);
    } else if (grossSalary <= 3751.05) {
        grossSalary -= ((grossSalary * 0.15) - 354.8);
    } else if (grossSalary <= 4664.68) {
        grossSalary -= ((grossSalary * 0.225) - 636.15);
    } else {
        grossSalary -= ((grossSalary * 0.275) - 869.36);
    }

    return grossSalary;
}

console.log("---11")
console.log("Net salary: " + netSalary(3000));
console.log('');