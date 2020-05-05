console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana'] //forma recomendada p/ 
//declarar array
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo' //Mais comum p/ substituir um elemento que
//ja existe
aprovados.push('Augusto') //Mais apropriado p/ adicionar elemento novo ao array
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[0]
console.log(aprovados[0])
console.log(aprovados[1])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2') 
//Deleta a partir do indice 1 e vai ate o indice 2
// e acrescenta os dois outros parâmetros no array
//O splice pode incluir, deletar, incluir e deletar ao mesmo tempo
//tornando-o muito flexivel
console.log(aprovados)