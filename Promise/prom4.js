// // -Crea una Promise che simula il recupero dei dati da un'API. 
// A volte la richiesta avrà successo, a volte fallirà con un messaggio di errore
// . -Crea una variabile chiamata success con un valore numerico random da 0 a 0.5
//  -La chiamata avrà successo con il messaggio Data retrieved successfully se il valore random è inferiore a 0.5 
//  altrimenti fallisce con il messaggio Error: Failed to fetch data

function fetchDataFromAPI(success){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const success = Math.random() * 0.5;
        if(success < 0.5){
                resolve (`data retrieved 
            ${success}`)
            } else reject(new Error("Failed to fetch data"))
    })
        }, 1000)
}

    


fetchDataFromAPI()
.then((success) => { console.log('Valore casuale di success:', success)})
.catch((errore)=> console.error(error.message))