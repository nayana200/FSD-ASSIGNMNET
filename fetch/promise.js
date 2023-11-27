// let promise = new Promise((reslove, reject) => {
//   setTimeout(() => {
//     let result = {
//       marks: "90%",
//     };
//     reslove(result);
//   }, 1000);
// });
// let promise2 = new Promise((reslove, reject) => {
//   setTimeout(() => {
//     let result = {
//       marks: "90%",
//     };
//     reslove(result);
//   }, 2000);
// });
// let promise3 = new Promise((reslove, reject) => {
//   fileuploded = true;
//   if (fileuploded) {
//     reslove("sucess");
//   } else {
//     reject("try next time");
//   }
// });

// Promise.allSettled([promise3, promise2, promise]).then((result) => {
//   console.log(result);
// });
// let promise = new Promise((reslove, reject) => {
//   setTimeout(() => {
//     let result = {
//       marks: "90%",
//     };
//     reslove(result);
//   }, 2000);
// });
// let promise2 = new Promise((reslove, reject) => {
//   let account = {
//     accountname: "nayaana",
//   };
//   reslove(account);
//   reject(account);
// });
// let promise3 = new Promise((reslove, reject) => {
//   fileuploded = true;
//   if (fileuploded) {
//     reslove("sucess fullly resloved");
//   } else {
//     reject("unsccesssfull");
//   }
// });
// Promise.all([promise, promise2, promise3])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch(() => {
//     console.log("error");
//   });

let promise = new Promise((reslove, reject) => {
  setTimeout(() => {
    let result = {
      marks: "90%",
    };
    reslove(result);
  }, 1000);
});
let promise2 = new Promise((reslove, reject) => {
  setTimeout(() => {
    let account = {
      account_name: "nayanaa",
    };
    reslove(account);
  });
}, 3000);
let promise3 = new Promise((reslove, reject) => {
  fileuploeded = false;
  if (fileuploeded) {
    reslove("success");
  } else {
    reject("unsccess");
  }
});
//all means it should satisfy all the consitions
//allsettled it should be satteled by the result
//race;  if one promise is fullfilled it wont wait for anyother promise
//any any of the promise should be excute and only the promise will give the result
Promise.race([promise, promise2, promise3])
  .then((result) => {
    console.log(result);
  })
  .catch(() => console.log("error not uploeded"));
