// -Crea una semplice Promise che si risolve dopo un ritardo di 2 secondi.
// -Utilizzare setTimeout per simulare un'operazione asincrona.



function delayedPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
         if(true === true){
        resolve('promise risolta dopo 2 secondi')
         } else reject(new Error('non è possibile operazione'))
    
    },2000)
    })
    }
    
delayedPromise()
.then((result) => console.log(result))
.catch((errore) => console.log(errore))
