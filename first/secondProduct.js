const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('./public'))


const {product} = require("./product.js");
  const applicationUser = {
      "name": "Amiaka kingsley",
      "role" : "Full stack DEveloper",
      "Tech Stack" : ["Java", "javaScript", "React", "Node.JS", "Spring Boot", "Spring Framework"]
    }
  const secondApplicationUser = {
      "name": "Munachi Micheal ",
      "role" : "Web Developer",
      "Tech Stack" : ["Html", "css", "React", "NextJs", "Boot Strap", "React Native"]
    }

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/api/products', (req, res) => {

  const newProduct = product.map((product) => {
  const {id, name, image} = product;
  return {id, name, image}
  })

  res.json({users: [applicationUser, secondApplicationUser], newProduct});
});

app.get('/api/products/:productID', (req, res) => {
  // console.log(req.url);
  // console.log(req.params);
  const {productID} = req.params;
  const singleProduct = product.find((product) => product.id === Number(productID))

  res.json(singleProduct);
})

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server listening to port ${PORT}`);
  })