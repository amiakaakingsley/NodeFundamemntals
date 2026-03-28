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

app.get('/api/editUser', (req, res) => {
    res.sendFile(__dirname + '/public/findPerson.html');
});

app.put('/api/people/:id', (req, res) => {
  const { id } = req.params; 
  const { name } = req.body;

  const person = people.find((person) => person.id === Number(id));

  if(!person){
    return res.status(404).json({"success": false, "message" : "person does nor eexit"})
  }

  person.name = name;
  res.status(200).json({success: true, data: people});  

  
  });

  app.delete('/api/delete/:name', (req, res) => {
    const {name} = req.params; 

    const person = people.find((person) => person.name === name);

    if(!person){
      return res.status(404).json({"success" : false, "message" : "User not found"});
    };

    people = people.filter((person) => person.name !== name);
    res.status(200).json({success: true, data: person});


      
  });
 

app.get('/api/peoplePage', (req, res) => {
  res.status(200).sendFile(__dirname + '/public/user.html');
})

app.get('/api/people', (req, res) => {
  res.status(200).json({seccusee: true, data : people});
})

app.post('/api/people', (req, res) => {
  const { name, password } = req.body;
  console.log(name, password + "from the server");

  const personId = people.length + 1;  
  
  if(!name || !password){
    return res.status(400).json({ success: false, message: 'Please provide credentials' });
  } 
  people.push({id: personId, name, password});
   res.status(201).json({ success: true, people: name });  // return the name of the person 
  
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});

app.get('api/person/:id', (req, res) => {
   
})

app.listen(5000, () => {
  console.log('Server is running on port 5000');
  
})