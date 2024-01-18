
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
