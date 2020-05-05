// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)
//{ nome: 'Pedro' }

//pessoa -> 456 -> {...} 
pessoa = {nome: 'Ana'}
//Gera um erro. Não pode atribuir novamente para a const pessoa
//um outro objeto

Object.freeze(pessoa)
//O objeto foi 'congelado'

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(pessoa)
// { nome: 'Pedro' }

const pessoaConstante = Object.freeze({ nome: 'Joao' })
console.log(pessoaConstante)
// { nome: 'Joao' } 
//Não será possível fazer nenhuma modificação nesse objeto