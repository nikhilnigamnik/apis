const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const products = [
  {
    id: 1,
    image: 'https://example.com/product1.jpg',
    title: 'Product 1',
    price: 9.99,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    image: 'https://example.com/product2.jpg',
    title: 'Product 2',
    price: 19.99,
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    image: 'https://example.com/product3.jpg',
    title: 'Product 3',
    price: 29.99,
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
