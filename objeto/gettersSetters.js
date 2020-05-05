//método get -> lê o valor da variável
//método set -> altera/"seta" o valor da variável

const sequencia = {
	_valor: 1, //não quer dizer que esta variável é privada, 
	//mas é uma convenção para dizer que esta variável
	//é pretendida ser acessada internamente dentro do objeto
	//PS: isso não impede que ser a atribuicao direta a variável
	get valor() { return this._valor++ },
	set valor(valor) { 
		if(valor > this._valor){
			this._valor = valor //dessa forma, não é possível
			//voltar a sequencia para trás
		}
	}
}

console.log(sequencia.valor, sequencia.valor)
//Os métodos sao chamados internamente, por isso tem-se esse 
//resultado: 1 2
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
//1000 1001

sequencia.valor = 900 //Ignora pois o valor é menor do que o 
//valor atual da sequencia
console.log(sequencia.valor, sequencia.valor)
//1002 1003