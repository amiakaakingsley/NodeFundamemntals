const express = require('express');
const app = express();
const logger = require('./logger');
const authorize = require('./authorize');
app.use(express.static('./public'));
const morgan = require('morgan');
app.use(morgan('tiny'));

app.use( logger);

app.get('/' ,(req, res) => {
   res.send(`welcome Home ${req.user}`)
})

app.get('/about', (req, res) => {
  res.send('About')
})

app.get('/api/service', (req, res) => {
   res.send('Service')
})

app.get('/products', (req, res) => {
   res.send('products')
})

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server listens to port ${PORT}`);
  
})