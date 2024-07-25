/*
Crie uma função chamada findMax que aceita um array de números e retorne
o maior número do array.

Programa desenvolvido por:
 - Titi
 - Luiz
 - Samantha
 - Rafa
*/

function findMax(num){
    let max = num[0]
    num.forEach(number => {
        if(number > max){
            max = number
        }
    })
    return max
}

console.log(findMax([2, 8, 3, 11, 5]))