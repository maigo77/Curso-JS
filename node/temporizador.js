const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 14 * * 2', function () {
	console.log('Executando Tarefa 1!', new Date().getSeconds())
})
//de 5 em 5 segundos as 14 horas as terça (2)

setTimeout(function() {
	tarefa1.cancel()
	console.log('Cancelando Tarefa1!')
}, 20000)
//para a tarefa1

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)] //de segunda a sexta-feira
regra.hour = 14 //hora que vai executar
regra.second = 30 //segundo que vai executar

const tarefa2 = schedule.scheduleJob(regra, function(){
	console.log('Executando Tarefa2', new Date().getSeconds())
})

setTimeout(function() {
	tarefa1.cancel()
	console.log('Cancelando Tarefa2!')
}, 60000)
//para a tarefa1