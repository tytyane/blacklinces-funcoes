/*
Crie uma função chamada minutesToSeconds que aceite um número de minutos como parâmetro
e retorne o equivalente em segundos.

Programa desenvolvido por:
 - Titi
 - Luiz
 - Samantha
 - Rafa
*/

function minutesToSeconds(num){
    let segundos = parseFloat(num) * 60
    return segundos
}

console.log(`${minutesToSeconds(8)} segundos`)