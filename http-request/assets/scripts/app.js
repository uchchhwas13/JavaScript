const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const xhr  = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

xhr.responseType = 'json';

xhr.onload = function() {
    const listOfPosts = xhr.response;
    console.log(listOfPosts);
    for (const post of listOfPosts) {
        const postEl = document.importNode(postTemplate.content, true);
        postEl.querySelector('h2').textContent = post.title.toUpperCase();
        postEl.querySelector('p').textContent = post.body;
        const newPost = document.createElement('li');
        newPost.appendChild(postEl);
        listElement.appendChild(newPost);
    }
}

xhr.send();

