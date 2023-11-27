//callback
// function x() {
//   setTimeout(() => {
//     console.log("good afternoon");
//   }, 1000);
// }
// console.log("hello");
// function y() {
//   console.log("good morning");
// }
// x(y());

// function add(a, b) {
//   return a + b;
// }
// function mul(a, b) {
//   return a * b;
// }
// function cal(x, y, operator) {
//   return operator(x, y);
// }
// console.log(cal(2, 7, add));
// console.log(cal(9, 8, mul));

//clousers

// function a(n1) {
//   function b(n2) {
//     function c(n3) {
//       return 10 * n1 * n2 * n3;
//     }
//     return c;
//   }
//   return b;
// }
// let out = a(1)(2)(4);
// console.log(out);
// let promise1 = new Promise((reslove, reject) => {
//   setTimeout(() => {
//     let result = {
//       marks: "90%",
//     };
//     reslove(result);
//   }, 3000);
// });
// let promise2 = new Promise((reslove, reject) => {
//   let account = {
//     account_name: "nayana",
//   };
//   reslove(account);
// });
// let promise3 = new Promise((reslove, reject) => {
//   fileuploeded = false;
//   if (fileuploeded) {
//     reslove("successfull");
//   } else {
//     reject("unsuccesfull");
//   }
// }).then(console.log("updared"));
// Promise.allSettled([promise1, promise2, promise3])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// let arr = [1, 3, 4, 5, 6, 7, 8, 9];
// let max = arr[0];
// let sec_max = arr[0];
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     sec_max = max;
//     max = arr[i];
//   } else if (arr[i] > sec_max) {
//     sec_max = arr[i];
//   }
// }
// console.log(max);
// console.log(sec_max);
// let arr = [1, 3, 4, 5, 6, 7, 8, 9];
// for (i = 0; i <= arr.length; i++) {
//   if (arr[i] > arr[i + 1]) {
//     let temp = arr[i];
//     arr[i] = arr[i + 1];
//     arr[i + 1] = temp;
//     i = -1;
//   }
// }
// console.log(arr);
// let str = "nayan";
// let rev = "";
// for (i = str.length - 1; i >= 0; i--) {
//   rev += str[i];
// }
// if (str == rev) {
//   console.log("palidrome");
// } else {
//   console.log("not");
// }
// fetch("https://fakestoreapi.com/products", {
//   method: "POST",
//   headers: {
//     "content-type": "application/Json",
//   },
//   body: JSON.stringify({
//     title: "this is title",
//     discription: "Lorem text",
//   }),
// })
//   .then((data) => data.json())
//   .then((objectdata) => console.log(objectdata))
//   .catch((err) => console.log(err));
//destructuring

// let arr1 = [8, 0, 9, 0, 6];
// let arr2 = [9, 7, 8, 4];
// let out = [...arr1, ...arr2];
// console.log(out);

// let person={
//     name:"nayaan",age:90,values:500,skills:[html,css,js]
// ;
// let {}}
