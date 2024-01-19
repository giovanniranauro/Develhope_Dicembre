// // 1. Creare una funzione recuperaCarrello che restituisca una promessa.

// // // La promessa dovrebbe risolversi con un array di oggetti, 
// //ognuno rappresentante un prodotto nel carrello con le proprietà nome e prezzo.
// // // Utilizzare un setTimeout per simulare un recupero asincrono dei dati dopo 1 secondo.
// // // Funzione per Calcolo Totale:



// function recuperaCarrello(){
//     return new Promise((resolve,reject) => {
//  setTimeout(()=>{
//      const carrello = [
//          {nome:'PC',prezzo:20},
//          {nome:'TV',prezzo:10}
//      ]
//     resolve(carrello)
 
//  },1000);

//     })
//  }
//  recuperaCarrello()
//   .then((carrello) => {
//     console.log('Prodotti nel carrello:', carrello);

//     const totale = calcolaTotale(carrello);
//     console.log('Totale del carrello:', totale);
//   })
//   .catch((errore) => {
//     console.error('Si è verificato un errore durante il recupero del carrello:', errore);







function recuperaCarrello(){
  return new Promise((resolve,reject)=>{
  setTimeout(()=>{
    const carrello = [
        {name:'Pc',prezzo:20},
        {name:'Tv',prezzo:10}
    ]
    if(carrello[0].name === "Pc"){
        resolve(carrello)
    }else reject(new Error('Non è possibile recuperare'))
},1000)
  })

}

function calcolaTotale(prodotti){
return new Promise((resolve,reject)=>{
  setTimeout(()=> {
  if(prodotti.length > 0){
    const result = prodotti.reduce((acc,prodotto)=>
    acc + prodotto.prezzo,0
    
    )
    resolve(result)
  }else reject(new Error("Non ci sono prodotti nel carrello"))

  }
  )

},1000)
}

function confermaOrdine(totale){
return new Promise((resolve,reject)=>{
  setTimeout(()=>{
  if(totale > 0){
  resolve(`Il tuo ordine è stato confermato,il totale è ${totale}`)
  }else reject(new Error('Il tuo pagamento non è andato a buon fine'))
  

  },1500)

})
}

recuperaCarrello()
.then((result)=>calcolaTotale(result)

)
.then((totale)=>confermaOrdine(totale)
)
.then((messaggio)=>{
    console.log(messaggio)
})
.catch((errore)=>{
console.log(errore.message)
})
