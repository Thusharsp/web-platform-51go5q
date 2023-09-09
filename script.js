// let num = 3;
// if (num > 5)
//   try {
//     alert('The number is greater');
//   } catch (err) {
//     document.getElementById('demo').innerHTML = err.message;
//   }

// promise error handler

const testPromise = new Promise((resolve, reject) => {
  let value = 5;

  if (value > 4) {
    resolve('Value is greater than 4');
  } else {
    reject('value is not greater than 4');
  }
});

testPromise
  .then((result) => {
    console.log('Success ===>', result);
  })
  .catch((error) => console.log('Error ====>', error));
