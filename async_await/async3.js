// Implementa la funzione asincrona "lanciaVeicoloSpaziale" che chiama in sequenza la funzione "caricaModulo" per caricare i moduli A, B e C,
// attendendo il completamento di ciascuna operazione prima di passare alla successiva.

// Gestisci eventuali errori nel caricamento dei moduli stampando in console 
//"Impossibile lanciare il veicolo spaziale a causa di errori nei moduli."

// Alla fine, se tutti i moduli sono stati caricati con successo, stampa in console "Veicolo spaziale pronto per il lancio!".

function caricaModulo(modulo) {
    return new Promise((resolve, reject) => {
        const tempoCaricamento = Math.random() * 3000; // Simula il caricamento con un ritardo casuale fino a 3 secondi.
        setTimeout(() => {
            if (tempoCaricamento < 1500) {
                resolve(`Il modulo ${modulo} è stato caricato.`);
            } else {
                reject(`Errore durante il caricamento del modulo ${modulo}.`);
            }
        }, 2000);
    });
}

// implementa la funzione asincrona "lanciaVeicoloSpaziale" gestendo gli eventuali errori
async function lanciaVeicoloSpaziale() {
    try {

        const moduli = ['A', 'B', 'C'];
        const risultati = await Promise.all(moduli.map(caricaModulo));

        risultati.forEach((risultato, indice) => {
            console.log(`Modulo ${moduli[indice]}: ${risultato}`);
        });
    } catch (error) {
        console.error('Errore caricamento');
    }
    console.log("Veicolo spaziale pronto per il lancio")
}
// Esegui la funzione asincrona
lanciaVeicoloSpaziale();
        


    


