const button = document.querySelector('button');
const output = document.querySelector('p');

const setTimer= (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Timer done!');
    }, duration);
  });
  return promise;
};

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      posData => {
        resolve(posData);
      },
      error => {
        reject(error);
      }
    );
  });
  return promise;
};

function trackUserHandler() {
  let positionData;
  getPosition().then(posData => {
    positionData = posData;
    return setTimer(2000);
  }).then(data => {
    console.log(positionData);
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
    console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler);

// let result = 0;

// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result);
