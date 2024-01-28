async function fetchData(url) {
    const response = await fetch(url);
    return response.json();
}

async function getComments() {
    const url = 'https://jsonplaceholder.typicode.com/comments/1';
    return fetchData(url);
}

async function getPosts() {
    const url = 'https://jsonplaceholder.typicode.com/posts/2';
    return fetchData(url);
}

Promise.all([getComments(), getPosts()])
    .then(results => {
        console.log("Promise.all Result:", results);
    })
    .catch(error => {
        console.error("Promise.all Error:", error);
    });

Promise.allSettled([getComments(), getPosts()])
    .then(results => {
        console.log("Promise.allSettled Result:", results);
    });
