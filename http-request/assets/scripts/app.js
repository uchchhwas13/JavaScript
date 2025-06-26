const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');

function sendHttpRequest(method, url) {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = 'json';
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else {
                reject(new Error('Failed to load data'));
            }
        };
        xhr.onerror = function() {
            reject(new Error('Network error'));
        };
        xhr.send();
    });
    return promise;
}

async function fetchPosts() {
    try {
        const response = await sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts');
        const listOfPosts = response;
        console.log(listOfPosts);
        for (const post of listOfPosts) {
            const postEl = document.importNode(postTemplate.content, true);
            postEl.querySelector('h2').textContent = post.title.toUpperCase();
            postEl.querySelector('p').textContent = post.body;
            const newPost = document.createElement('li');
            newPost.appendChild(postEl);
            listElement.appendChild(newPost);
        }
    } catch (error) {
        console.error(error);
    }
}   

fetchPosts();