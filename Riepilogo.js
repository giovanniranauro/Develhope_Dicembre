//In questo esercizio dato un array di studenti:
//Utilizza forEach per stampare i nomi degli studenti.
//Utilizza find per trovare uno studente con un voto superiore a 90.
//Utilizza reduce per calcolare la media dei voti degli studenti.
//Utilizza map per creare un nuovo array contenente i nomi degli studenti in maiuscolo.
//Utilizza filter per trovare gli studenti con voti superiori a 85.


const studenti = [
  { nome: "Alice", voto: 95 },
  { nome: "Bob", voto: 88 },
  { nome: "Carol", voto: 76 },
  { nome: "David", voto: 92 },
  { nome: "Eve", voto: 84 },
];

//forEach
let myVar = studenti.forEach(studenti => {
 console.log(studenti.nome)
});

//Find
let overNin = studenti.find(studenti => studenti.voto > 90)
 console.log(overNin)

 //reduce
 let media = studenti.reduce((a,studente) => 
 a + studente.voto /studenti.length,0)
 
 console.log(media)

 //map
 let bigName = studenti.map(studenti => studenti.nome.toUpperCase())
 console.log(bigName)

 //filter
let overEigFiv = studenti.filter(studenti => studenti.voto > 85)
console.log(overEigFiv)