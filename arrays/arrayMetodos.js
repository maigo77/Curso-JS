const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() //massa quebrou o carro (exclui o ultimo elemento
// do array)
console.log(pilotos)

pilotos.push('Verstappen') //inclui um elemnto no array
console.log(pilotos)

pilotos.shift(pilotos) //remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') //adiciona o elemento na primeira
//posição do array
console.log(pilotos)

//splice pode adicionar e remover

//add
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //novo array
//pega do indice 0 até o 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) 
//o indice 1 entra, mas o 4 não
console.log(algunsPilotos2)