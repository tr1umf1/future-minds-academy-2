async function getUser() {
    return new Promise ((resolved, reject) => {
        setTimeout(() => {
          resolved("Done");
        }, 2000);
    });
}

async function getPosts(userId, callback) {
   return new Promise ((resolved, reject) => {
        setTimeout(() => {
          resolved("Done");
        }, 2000);
    });
}

async function getComments() {
    return new Promise ((resolved, reject) => {
        setTimeout(() => {
          resolved("Done");
        }, 2000);
    });
}


const [response, post, comment] = await Promise.all([getUser(), getPosts(), getComments()]);

console.log (response, post, comment)