// function fetchUserData(dati) {
//     return new Promise((resolve, reject) => {
//         const dati = [
//             { id: 1, name: 'John' }
//         ]
//         setTimeout(() => {
//         if ('true' === 'true')
//                 resolve(dati){
//                 } else reject(new Error("Non è possibile operazione"))
//         }, 1000)






// function printUserDataAndPosts(userData, userPosts) {
//     console.log('User Name:', userData.name);
//     console.log('User Posts:', userPosts);
// }

// fetchUserData()
//     .then((name) => { return fetchUserData(name.id, name.name) })
//     .then((dati) => { console.log("nome utente:", dati.name, 'user post: ', dati.post) })
//     .catch(console.error(error.message))



/*Una promise non è altro che un oggetto creato dalla
constructor function Promise per la gestione del codice
asincrono. resolve e rejected sono due funzioni, resolve
corrisponde a then, reject a catch.*/


function fetchUserData(dati) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let userData = [{ id: 1, name: 'John' }
            ]
            if (userData === true) {
                resolve(`${dati} risolta`);
            } else {
                reject(new Error(`non si può effettuare operazione`))
            }
        }, 1000);
    })

}

function printUserDataAndPosts(userPosts) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let userPosts = ['Post 1', 'Post 2', 'Post 3']
           if (userPosts === 'string') {
                resolve({ userData, userPosts });
            } else {
                reject(new Error(`I dati dell'utente o i post non sono disponibili`));
            }
        }, 1500);
    });
}

    fetchUserData()
    .then((resolve) => { return fetchUserData(user.id, name.name) })
    .then((dati) => { console.log("nome utente:", userData.name, 'user post: ', userData.post) })
    .catch((error) => console.log(error.message))


// const  = azione('Portare marmellata');
// obbiettivo.then((risp) => {
//       console.log(risp);
//       return azione('Fare la crostata');
//       /*--Dato che la funzione azione ritorna una promise
//       possiamo invocare then in successione per altre azioni.*/
// }).then((risp) => {
//     console.log(risp);
//     return azione('Portare a nostra madre');
// }).then((risp) => {
//     console.log(risp);
// })
// .catch((err) => {
//       console.log(err);
// });
// //Invochiamo then perchè sole se l'amico ci porta la
// //marmellata allora possiamo fare la crostata. resolve
// //corrisponde a then catch a reject. Adesso vogliamo
// //concatenare altre azioni, abbiamo ricevuto la
// //marmellata ma ancora la dobbiamo fare.

// /*--Abbiamo gestito con le promise il susseguirsi di
// una serie di azioni, e l'azione successiva può essere
// intrapresa solo se la precedente è andata a buon fine.