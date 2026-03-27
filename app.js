const express = require('express');
const app = express();
app.use(express.static('./public'))
app.use(express.urlencoded({extended:false}));
app.set('json spaces', 2);
app.use(express.json());

let {people, product} = require('./product.js')

app.get('/api/products', (req, res) => {
  res.status(200).json({success:true, data: product});
});

app.get('/api/people', (req, res) => {
  res.status(200).json({success: true,data:people});
})

app.post('/api/people', (req, res) => {
  const { name, password } = req.body;
  console.log(name, password + "from the server");
  
  if(!name || !password){
    return res.status(400).json({ success: false, message: 'Please provide credentials' });
  } 
  people.push({name, password});
   res.status(201).json({ success: true, people: name });  // return the name of the person 
  
});



app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
  
})