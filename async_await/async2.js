// In questo esercizio andremo a simulare il caricamento di moduli di un veicolo spaziale in modo asincrono 
//e quindi lanciare il veicolo spaziale quando tutti i moduli sono stati caricati con successo!

// La funzione "caricaModulo" ritorna una promise simulando il caricamento di un modulo con un ritardo di 2 secondi!

// Implementa la funzione asincrona "lanciaVeicoloSpaziale" che chiama in sequenza la funzione "caricaModulo" per caricare i moduli A, B e C, attendendo il completamento di ciascuna operazione prima di passare alla successiva.

// Alla fine, quando tutti i moduli sono stati caricati con successo, stampa in console "Veicolo spaziale pronto per il lancio!".

function caricaModulo(modulo) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      if(modulo === `A`){
      resolve(`Il modulo ${modulo} è stato caricato.`);
      }else reject(new Error('errore'))
    }, 2000);
  });
}

// ipmlementa la funzione asincrona "lanciaVeicoloSpaziale"

async function lanciaVeicoloSpaziale() {
  try {
    const arr = ['A']
    /// fonte : https://it.javascript.info/array-methods#array-isarray 
    //"Ho utilizzato il metodo arr.concat crea un nuovo array che include valori di altri array, o elementi aggiuntivi."
    const moduli =  await arr.concat(['B','C']) 
    console.log(moduli,"Veicolo spaziale pronto per il lancio!")
    } catch(error) {
    console.error("errore durante il lancio",error.message)
  }
}
   

lanciaVeicoloSpaziale();
