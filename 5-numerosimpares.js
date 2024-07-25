/*
Crie uma função chamada getOddNumbers que aceite um array de números e retorne
um novo array contendo apenas os números ímpares do array original.

Dica: Para filtrar os números ímpares, você pode usar o operador módulo (%).
Um número é ímpar se o resto da divisão desse número por 2 é diferente de zero
(num % 2 !== 0). Você também pode usar o método filter para criar um novo
array contendo apenas os números que atendem a essa condição.

Programa desenvolvido por:
 - Titi
 - Luiz
 - Samantha
 - Rafa
*/

function getOddNumbers(num){
    let impar = []
    num.forEach(number => {
        if(number % 2 !== 0){
            impar.push(number)
        }
    })
    return impar
}

console.log(`${getOddNumbers([2, 5, 12, 7, 19])}`)