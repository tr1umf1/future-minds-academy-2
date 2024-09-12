const express = require('express');
const app = express();
const port = 5000;

app.use(express.json()); 


let products = [
  { id: 1, name: 'Fli', price: 100 },
  { id: 2, name: 'Pizza', price: 200 },
];

app.get('/products', (req, res) => {
  res.json(products);
});

app.post('/products', (req, res) => {
  const { name, price } = req.body;
  const newProduct = { id: products.length + 1, name, price };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.get('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

app.put('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const { name, price } = req.body;
  const product = products.find(p => p.id === productId);

  if (product) {
    product.name = name || product.name;
    product.price = price || product.price;
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

app.delete('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  products = products.filter(p => p.id !== productId);

  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
