// -Crea una catena di Promises per simulare un'operazione asincrona in più fasi.
//  -La prima Promise recupera i dati dell'utente { id: 1, name: 'John' }. 
//  -La seconda Promise recupera i post dell'utente ['Post 1', 'Post 2', 'Post 3'].
//   -Infine, chiama le funzioni per recuperare e stampare in console il nome dell'utente e i titoli dei post.

// function fetchUserData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const dati = { id: 1, name: 'John' }
//             resolve(dati)
//             }el
//             } else reject(new Error('Non è possibile operazione'))
//         }, 1000)
//     })
// }

// fetchUserData()
//     .then((name) => printUserDataAndPost(resolve.id,resolve.name))
//     .then((dati) => { console.log(`nome utente: `, dati.name, 'user post: ', dati.post) })
//     .catch((error) => { console.log(errore) })


// function printUserDataAndPosts(userData, userPosts) {
//     console.log('User Name:', userData.name);
//     console.log('User Posts:', userPosts);
// }
// fetchUserData()
//     .then((resolve) => fetchUserPosts(dati.name, dati.post))
//     .then((dati) => {console.log(dati.name,dati.id)
//     printUserDataAndPosts({ id: 1, name: 'John' }, userPosts)
//     })
//     .catch((errore) => console.error(errore))




function fetchUserData() {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                const userData = { id: 1, name: 'John' }
                if(true == true){
                resolve(userData)
                } else reject(new Error(`non è possibile`))
             },1000)
        })
}

function fetchUserPosts(userId, userName) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const posts = ['Post 1', 'Post 2', 'Post 3'];
        resolve({ userId,userName, posts });
      }, 1500);
    });
  }
  fetchUserData()
    .then((user) => {
      return fetchUserPosts(user.id, user.name);
    })
    .then((userPosts) => {
      console.log(`User: ${userPosts.userId}, Name: ${userPosts.userName}`);
      console.log('Posts:', userPosts.posts);
    });




// function fetchUserData() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const userData = { id: 1, name: 'John' };
//         resolve(userData)
//       }, 1000);
//     });
//   }
  
//   function fetchUserPosts(userId, userName) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const userPosts = ['Post 1', 'Post 2', 'Post 3'];
//         resolve(userPosts);
//       }, 1000);
//     });
//   }

//   fetchUserData()
//     .then((userData) => {
//       console.log(`UserName: ${userData.name}`);
//       return fetchUserPosts(userData.id, userData.name);
//     })
//     .then((userPosts) => {
//       console.log('User Posts:', userPosts);
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });