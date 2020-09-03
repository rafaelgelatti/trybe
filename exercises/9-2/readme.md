### 9.2 - JavaScript - Promises

-----

##### exercise1.html
Fazer uma requisição do site https://icanhazdadjoke.com/ e retornar uma piada aleatória

##### exercise2.js
1. Produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado
2. Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. Acresça um then e um catch à Promise com qualquer coisa dentro só para que o código funcione.
3. Quando a promise for resolvida com sucesso, retorne o resultado da divisão desse número por 2, 3, 5 e 10 em um array.
4. Quando a Promise for rejeitada, imprima, via console.log, a frase "É mais de oito mil! Essa promise deve estar quebrada!"
5. Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.