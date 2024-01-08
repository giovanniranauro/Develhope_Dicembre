// Riscrivi la funzione fetchDataFromAPI dell'esercizio Le Callback - 6 utilizzando Promises per una migliore gestione degli errori.
// La promise dovrebbe risolversi con i dati e rifiutare con un messaggio di errore.



function fetchDataFromAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data = { name: "John", age: 30 }
            if (true === false) {
                resolve(data)
            } else { reject("newError") }
        },2000);

    }
    )

}

fetchDataFromAPI()
.then(data => console.log(data))
.catch(error => console.log(error))