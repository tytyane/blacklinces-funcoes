/*
Crie uma função chamada averageArray que aceite um array de números e retorne a média
dos números. Para esta função vocês devem pesquisar e entender como o método reduce
funciona.

Dica: Some todos os elementos do array e divida pela quantidade de elementos. Utilize o
método reduce para somar os elementos do array.

Programa desenvolvido por:
 - Titi
 - Luiz
 - Samantha
 - Rafa
*/

function averageArray(num){
    let soma = parseFloat(num.reduce((acululador, valorAtual) => acululador + valorAtual))
    let media = soma / num.length
    return media.toFixed(2)
}

console.log(averageArray([5, 2, 4]))

// Pesquisa: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce