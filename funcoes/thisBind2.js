function Pessoa() {
	this.idade = 0

	const self = this
	setInterval(function(){
		self.idade++
		console.log(self.idade) //this.idade
	}/*.bind(this)*/, 1000) //1 segundo
}

new Pessoa 
//NaN (Antes de acrescentar o bind)
//1 2 3..(Depois do Bind)
//1 2 3..(Depois do self)