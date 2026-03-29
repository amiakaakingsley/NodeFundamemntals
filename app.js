const express = require('express');
const app = express();
const pages = require('./Routes/pages.js')
const people = require('./Routes/people.js');
app.use(express.static('./public'))

app.set('json spaces', 2);
app.use(express.json());

app.use('/api/people', people);
app.use('/', pages);

let { product } = require('./product.js')

app.get('/api/products', (req, res) => {
  res.status(200).json({ success: true, data: product });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
})