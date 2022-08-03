const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
};

// respostas aqui ⬇️

console.log(filme.elenco[0])
console.log(filme.elenco[3])
console.log(filme.transmissoesHoje)
console.log(filme.transmissoesHoje[1].horario)

//filme é um objeto e transmissoesHoje é array

// para saber quantos objetos tem:
// console.log(filme.elenco[filme.elenco.lenght-1]);
//o lenght conta a partir do 1 e nao do 0, por isso -1