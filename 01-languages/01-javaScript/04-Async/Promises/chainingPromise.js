// Create a sequence:

// Promise 1: fetch username (mock data)

// Promise 2: fetch posts using username

// Promise 3: log them



function getUser(){
    return new Promise(resolve => {
        setTimeout(() => resolve("Abdulhakeem_Abdullahi"), 2000);
    })
}

function getPosts(userName){
    return new Promise(resolve => {
        setTimeout(()=> resolve(`Post by ${userName}`), 3000);
    });
}

getUser()
    .then(user => {
        console.log(user);
        return getPosts(user);
    })
    .then(post => {
        console.log(post);
    });