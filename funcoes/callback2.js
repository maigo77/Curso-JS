const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//Sem callback
let notasBaixas1 = []
for (let i in notas) {
	if (notas[i] < 7){
		notasBaixas1.push(notas[i])
	}
}

console.log(notasBaixas1) // 6.5, 5.2, 3.6

//Com calback
notasBaixas2 = notas.filter(function (nota) {
	return nota < 7
}) //true = adiciona elemento no array
							// false = não adiciona

console.log(notasBaixas2)// 6.5, 5.2, 3.6

const notasMenoresQue7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenoresQue7)
console.log(notasBaixas3)// 6.5, 5.2, 3.6