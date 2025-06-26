const storeBtn = document.getElementById('store-btn');
const retrieveBtn = document.getElementById('retrieve-btn');

const userId = 'u123';



storeBtn.addEventListener('click', () => {
    localStorage.setItem('userId', userId);
});

retrieveBtn.addEventListener('click', () => {
    localStorage.getItem('userId')
        ? alert(`User ID: ${localStorage.getItem('userId')}`)
        : alert('No user ID found!');
});
