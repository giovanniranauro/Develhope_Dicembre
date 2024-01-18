// -Crea una catena di Promises per simulare un'operazione asincrona in più fasi.
//  -La prima Promise recupera i dati dell'utente { id: 1, name: 'John' }. 
//  -La seconda Promise recupera i post dell'utente ['Post 1', 'Post 2', 'Post 3'].
//   -Infine, chiama le funzioni per recuperare e stampare in console il nome dell'utente e i titoli dei post.

function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true === true) {
                resolve(UserData)
            } else reject(new Error('Non è possibile operazione'))
        }, 1000)
    })
}

fetchUserData()
    .then((name) => { return fetchUserPosts(name.id, name.name) })
    .then((dati) => { console.log("nome utente:", dati.name, 'user post: ', dati.post) })
    .catch((error) => { console.log(errore) })


function printUserDataAndPosts(userData, userPosts) {
    console.log('User Name:', userData.name);
    console.log('User Posts:', userPosts);
}

// Crea la catena di Promises
fetchUserData()
    .then((userData) => {
        // userData contiene { id: 1, name: 'John' }
        return fetchUserPosts(userData.id, userData.name);
    })
    .then((userPosts) => {
        // userPosts contiene ['Post 1', 'Post 2', 'Post 3']
        printUserDataAndPosts({ id: 1, name: 'John' }, userPosts);
    })
    .catch((error) => console.error('Error:', error))