//Código não executável

//Procedural (função)
processamento(valor1, valor2, valor3) //função que manipula dados

// OO 
objeto = {
	valor1,
	valor2,
	valor3,
	processamento() {
		// ...
	}
}

objeto.processamento() //O foco passou a ser o objeto
//Diferente do procedural, que as funções possuiam objetos,
//agora os objetos possuem funções (comportamentos) e atributos
// o objeto é a capsula que agrupa comportamentos e atributos
// os objetos interagem, que podem ser enxergados no mundo real
// e trazer essa realidade (mapeada) para dentro do software

//Principios Importantes:
//Abstração: pegar um objeto do mundo real e traduzir para dentro
//do sistema. Ex: carro (velocidade, peso, ligar, desligar, acelerar,
// porta, mecanica, etc..) Porém, essa traduçao deve ser 
//simplificada para atender as necessidades. 
//O chassi pode ser importante para um sistema tipo o Detran
//mas não é para um sistema de mecânica por exemplo

//Encapsulamento: ter os detalhes de implementação escondidos
// e mostrar para quem precisar usar o sistema,
// uma interface simples para que seja possível interagir com 
// o objeto. Sendo assim, existem informações que não precisam
// que o usuário final se preocupe com o como aquilo vai 
// executar (desde que execute). Os objetos devem ser
//independentes, cada um funcionando por si, sem depender
//de outros para que realize sua função adequadamente.

//Herança (Prototype): Composição "é um" 
//O civic é um carro, o carro tem um motor, etc..
//Dizer que o carro tem o motor não quer dizer que
// dentro do objeto carro a complexidade do motor deve
// ser "mostrada", a complexidade do motor fica no próprio 
//objeto motor. Reúso de código, herança, recebe
//atributos de outras estruturas 
//Conceito genérico: Animal
//Conceito específico: Humanos
//Macaco é um animal mas não é um humano
//Priorize a composição ao um invés de herança

//Polimorfismo: Múltiplas formas
//A partir de um conceito genérico apontar para diferentes
//características, um objeto carro pode apontar
//para um carro automático e para um carro manual,
//um uno e uma ferrari, etc.. 



