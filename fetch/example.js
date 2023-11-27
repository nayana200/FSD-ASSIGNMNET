// let arr = [10, 3, 4, 5, 7, 8, 19];
// let arr2 = [90, 10, 5, 7, 9];
// let out = arr.filter((values) => arr2.includes(values));
// console.log(out);
// let arr = [10, 3, 4, 5, 7, 8, 9, 10, 19];
// let out = arr.filter((values, item) => arr.indexOf(values) !== item);
// console.log(out);
// let arr2 = ["a", "b", "c", "f", "f", "f", "e", "p", "p"];
// let out2 = arr2.filter((item, value) => arr2.indexOf(item) !== value);
// console.log(out2);
// let arr = [10, 6, 8, 9, 12, 3];
// for (i = 0; i <= arr.length; i++) {
//   if (arr[i] < arr[i + 1]) {
//     let temp = arr[i];
//     arr[i] = arr[i + 1];
//     arr[i + 1] = temp;
//     i = -1;
//   }
// }
// console.log(arr);
// let name1 = {
//   fname: "nayana",
//   lname: "reddy",
// };
// let name2 = {
//   fname: "virat",
//   lname: "kohli",
// };
// let fullname = function (age, city) {
//   console.log(this.fname + " " + this.lname + " " + age + " " + city);
// };
// fullname.call(name1, 23, "bangalore");
// fullname.apply(name2, [34, "mysore"]);
// let out = fullname.bind(name2, 21, "mumbai");
// out();

// let promise = new Promise((reslove, reject) => {
//   setTimeout(() => {
//     let result = {
//       marks: "90%",
//     };
//     reslove(result);
//   });
// }, 1000);
// let promise2 = new Promise((reslove, reject) => {
//   setTimeout(() => {
//     let account = {
//       accountname: "nayana",
//     };
//     reslove(account);
//   });
// }, 500);
// let promise3 = new Promise((resolve, reject) => {
//   fileuploeded = false;
//   if (fileuploeded) {
//     resolve("sucesss");
//   } else {
//     reject("unsucessfull");
//   }
// });
// Promise.all([promise, promise2, promise3])
//   .then((res) => console.log(res))
//   .catch(() => console.log("error"));

// fetch("https://fakestoreapi.com/products")
//   .then((data) => data.json())
//   .then((objectdata) => {
//     let titledata = "";
//     objectdata.map((el) => {
//       titledata = `${el.title}`;
//       console.log(titledata);
//     });
//   });
//post
// fetch("https://fakestoreapi.com/products", {
//   method: "POST",
//   headers: {
//     "content-type": "application/JSON",
//   },
//   body: JSON.stringify({
//     title: "cotton cloths",
//     description: "lorem text",
//     price: 123.78,
//     image: "htttps://////",
//   }),
// })
//   .then((data) => data.json())
//   .then((objectdata) => console.log(objectdata));
//put
// fetch("https://fakestoreapi.com/products/2", {
//   method: "PUT",
//   headers: {
//     "content-type": "application/JSON",
//   },
//   body: JSON.stringify({
//     title: "cotton cloths",
//     description: "lorem text",
//     price: 123.78,
//     image: "htttps://////",
//   }),
// })
//   .then((data) => data.json())
//   .then((objectdata) => console.log(objectdata));
//delete
// fetch("https://fakestoreapi.com/products/5", {
//   method: "DELETE",
// })
//   .then((data) => data.json())
//   .then((objectdata) => console.log(objectdata));

// let out = arr.reduce(function (values, items) {
//   return {
//     age: values.age + items.age / 3,
//   };
// });
// console.log(out);
// let out = arr.reduce(function (acc, values) {
//   if (acc[acc.age]) {
//     acc[values.age] = ++acc[values.age];
//   } else {
//     acc[values.age] = 1;
//   }
//   return acc;
// }, {});
// console.log(out);
let arr = [
  {
    first_name: "John",
    last_name: "leo",
    age: 30,
    city: "New York",
    marks: 50,
  },
  { first_name: "valut", last_name: "roof", age: 40, city: "rk", marks: 40 },
  { first_name: "leof", last_name: "david", age: 50, city: "York", marks: 90 },
];
