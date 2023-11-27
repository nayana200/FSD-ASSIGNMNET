// let api = "https://jsonplaceholder.typicode.com/users";
// let getbtn = document.querySelector("#getmethod");
// let postbtn = document.querySelector("#postmethod");
// let putbtn = document.querySelector("#postmethod");
// let deletebtn = document.querySelector("#postmethod");
// function getposts() {
//   fetch(api)
//     .then((respose) => respose.json())
//     .then((data) => console.log(data));
// }
// getbtn.addEventListener('click',change()){
//     function change(){
//         alert("clicked")
//     }
// }
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data.title);
//     if (data.title) {
//       for (let i = 0; i < data.title.array.length; i++) {
//         document.getElementById("username").innerHTML = data.tit;
//         document.getElementById("aircraftId").innerHTML =
//           response.data.result.aircraftId;
//         document.getElementById("heading").innerHTML =
//           response.data.result.heading;
//         document.getElementById("latitude").innerHTML =
//           response.data.result.latitude;
//         document.getElementById("longitude").innerHTML =
//           response.data.result.longitude;
//         document.getElementById("speed").innerHTML = response.data.result.speed;
//         document.getElementById("altitude").innerHTML =
//           response.data.result.altitude;
//       }
//     }
//   })
//   .catch((error) => console.error(error));
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response =>
// console.log(response.data.result));
