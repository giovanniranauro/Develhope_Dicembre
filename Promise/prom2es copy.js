// -Crea una catena di Promises per simulare un'operazione asincrona in più fasi.
// -La prima Promise recupera i dati dell'utente { id: 1, name: 'John' }. 
//  -La seconda Promise recupera i post dell'utente ['Post 1', 'Post 2', 'Post 3'].
// -Infine, chiama le funzioni per recuperare e stampare in console il nome dell'utente e i titoli dei post.


function fetchUserData(login){
    return new Promise((resolve,reject) => {
    setTimeout(()=> {
        const login = [
            { id: 1, name: 'John' }
        ]
    if(true === true){
    resolve(login)
    }else reject(new Error("Non è possibile operazione"))
    },1500)
    }
}
    function printUserDataAndPosts(userData, userPosts) {
    console.log('User Name:', userData.name);
    console.log('User Posts:', userPosts);
}
   fetchUserData() 
   .then((name)=>{ return fetchUserData(name.id, name.name) }) 
   .then((dati) => { console.log("nome utente:",dati.name ,'user post: ',dati.post) })
   .catch((error) => { console.log(error)})