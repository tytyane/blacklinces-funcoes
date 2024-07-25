/*
Crie uma função chamada greetUsers que aceita um array de nomes e
exibe uma saudação para cada nome no console.

Programa desenvolvido por:
 - Titi
 - Luiz
 - Samantha
 - Rafa
*/

function greetUsers(names){
    names.forEach(name => {
        console.log(`Pi oiii, ${name}!!!`)
    })
}

greetUsers(['Titi', 'Luiz', 'Sa', 'Rafa'])
