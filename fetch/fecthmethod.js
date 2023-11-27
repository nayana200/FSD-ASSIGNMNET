fetch("https://fakestoreapi.com/products", {
  method: "POST",
  body: JSON.stringify({
    title: "product of the flipkart",
    description: "lorem text",
    category: "the above from",
    image: "https:/",
  }),
})
  .then((data) => data.json())
  .then((objectdata) => console.log(objectdata));
