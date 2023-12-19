//Crea una funzione chiamata somma che accetta un numero qualsiasi di argomenti e restituisce la somma di tali argomenti.
//Utilizza il parametro rest per raccogliere gli argomenti. -Stampa in console l'output della funzione somma.

function sum(...args){
    return args.reduce((a,arg) => a + arg, 0)
    
}

const mySum = sum(5,10)
console.log(mySum)