const storeBtn = document.getElementById('store-btn');
const retrieveBtn = document.getElementById('retrieve-btn');

const userId = 'u123';
const user = {
    id: userId,
    name: 'Max',
    age: 30
};


storeBtn.addEventListener('click', () => {
    sessionStorage.setItem('userId', userId);
    localStorage.setItem('user', JSON.stringify(user));
});

retrieveBtn.addEventListener('click', () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    console.log(storedUser);
    sessionStorage.getItem('userId')
        ? alert(`User ID: ${sessionStorage.getItem('userId')}`)
        : alert('No user ID found!');
});

console.log(document.cookie);
