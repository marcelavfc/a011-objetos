const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};
//a
const pokemon2 = {...pokemon1, 
    nome: "Squirtle",
	tipo: "Água",
};
//b
pokemon1.ataques = [] //se eu nao tivesse adicionado esse
//qual seria a diferença?
console.log(pokemon1)

//c
pokemon1.ataques.push(
    {
    nome: "Investida",
    dano: 48,
    tipo: "Normal",
    precisao: 100,
    }
)
console.log ('add ataques ao 2° por spread', pokemon2)

//d
pokemon1.ataques.push(ataque)
const ataque = (
    {
        nome: "folha navalha",
        dano: 45,
        precisão: 100,
        tipo: "grama",
    }
)
console.log('add outros ataques ao 1°', pokemon1)

//e
pokemon2.ataques.push(
    {
    nome: "Jato de Água",
    dano: 40,
    precisão: 100,
    tipo: "água",
    }
)

//f
console.log("R 1° pokemon",pokemon1)
console.log("R do 2° pokemon", pokemon2)



// () receber listas
// {} guarda as propriedades 
//(eles sao objetos)
//bom por atakes no plural, pq nesse array pd guardar outros