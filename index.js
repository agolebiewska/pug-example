const express = require('express');
const app = express();
const port = 3000;

// configure pug as template engine
app.set('view engine', 'pug');

app.use(express.static('public'));

// This url won't be called as we have the index.html
app.get('/', (request, response) => {
  response.send('Hi, use express');
});

// this is express getting the request at /about
app.get('/about', (request, response) => {
  const content = {
    title: 'This is a dynamic title',
    mainTitle: 'This is a dynamic main title'
  };
  
  response.render('about', content);
});

const getProductsFromDB = () => {
  const products = [
    { name: 'PS4', price: 499, image: 'ps4.png' },
    { name: 'TV', price: 1600, image: 'bigtv.png' },
    { name: 'PS4 control', price: 79, image: 'ps4control.png' }
  ];

  return products;
}

// this is express getting the request at /about
app.get('/products', (request, response) => {
  const products = getProductsFromDB();

  const content = {
    title: 'Products',
    mainTitle: 'Products',
    productCollection: products,
    imagesFolder: '/imgs/'
  };

  response.render('products', content);
});

// Start express server and listen in port 3000
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
