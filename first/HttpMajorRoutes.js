const express = require('express');
const app = express();
const path = require('path');
app.use(express.static( './public'))

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


app.get('/about', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'about.html'));
});

app.get('/api/products', (req, res) => {
  const newProduct = product.map((product) => {
  const {id, productName, image} = product;
  return {id, productName, image}
  })

  res.json({users: [applicationUser, secondApplicationUser], newProduct});
});

app.get('/api/products/:productID', (req, res) => {
  const {productID} = req.params;
  const singleProduct = product.find((product) => product.id === Number(productID))
  if(!singleProduct){
    return res.status(404).send("Product does not exist")
  };
  res.json(singleProduct);
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
  const { productID, reviewID } = req.params;
  res.json
  ({message: "Review fetched successfully", product: productID, review: reviewID
  });
});

app.get('/api/v1/query', (req, res) => {
  const {search, limit} = req.query;
  let filteredProducts = [...product];

  if(search){
    filteredProducts = filteredProducts.filter((p) => {
    return  p.productName.toLowerCase().startsWith(search.toLowerCase());
    })
  }

  if(limit){
    filteredProducts = filteredProducts.slice(0, Number(limit));
  }
  if(filteredProducts.length < 1){
    //always set a return when you set up a condition, to prevent the server from returning two parameters in one request
   
    return res.status(200).json({success: true, data: []})


  } 
  res.status(200).json(filteredProducts);
})

app.use((req, res) => {
  res.status(404).sendFile(path.resolve(__dirname, 'public', 'error.html'));
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server listening to port ${PORT}`);
  })