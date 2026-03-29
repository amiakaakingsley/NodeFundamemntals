const express = require('express');
const router = express.Router();

let {people} = require('../product.js')

router.get('/', (req, res) => {
  res.status(200).json({ seccusee: true, data: people });
})

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res.status(404).json({ "success": false, "message": "person does not exit" })
  }

  person.name = name;
  res.status(200).json({ success: true, data: people });


});

router.post('', (req, res) => {
  const { name, password } = req.body;
  console.log(name, password + "from the server");

  const personId = people.length + 1;

  if (!name || !password) {
    return res.status(400).json({ success: false, message: 'Please provide credentials' });
  }
  people.push({ id: personId, name, password });
  res.status(201).json({ success: true, people: name });  // return the name of the person 

});


router.delete('/:name', (req, res) => {
  const { name } = req.params;

  const person = people.find((person) => person.name === name);

  if (!person) {
    return res.status(404).json({ "success": false, "message": "User not found" });
  };

  people = people.filter((person) => person.name !== name);
  res.status(200).json({ success: true, data: person });



});

module.exports = router