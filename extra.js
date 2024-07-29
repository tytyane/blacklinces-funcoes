/*
Este é um arquivo com desafios extras. Eles são mais difíceis e vão exigir mais pesquisa.
Se você não conseguir fazer todos, não tem problema, se concentre nos exercícios do 1 ao 12.

1. Crie uma função chamada intersection que aceite dois arrays e retorne um novo array contendo
apenas os elementos que estão presentes em ambos os arrays.

Dica: Utilize o método filter para encontrar os elementos comuns. Utilize o método
includes para verificar se um elemento está presente no outro array.

Programa desenvolvido por:
 - Titi
 - Luiz
 - Samantha
 - Rafa
*/

function intersection(array1, array2){
    let comuns = array1.filter(function(i){
        return array2.incudes(i)
    })
    return comuns
}

console.log(intersection([1, 2, 3, 4], [4, 5, 2, 8, 1]))

// Pesquisa: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

/*
2. Crie uma função chamada drawEvenNumberTriangle que aceite um número n, use a função
getEvenNumbers para gerar os primeiros n números pares e, em seguida, use esses números
para desenhar um triângulo no console.

Dica: Primeiro, crie a função getEvenNumbers que retorna os primeiros n números pares.
Use um laço para iterar desde 1 até n e, em cada iteração, imprima os primeiros i
números pares. Utilize a função getEvenNumbers para obter os números pares.
*/
