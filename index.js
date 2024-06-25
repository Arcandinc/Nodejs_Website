const express = require('express')
const app = express()
const port = 3000

app.set("view engine" , "ejs");

const data =[
  {id:1, name:"product-1", price: 24500, isActive:true},
  {id:2, name:"product-2", price: 34500, isActive:false},
  {id:3, name:"product-3", price: 44500, isActive:true}
]

app.get('/', (req, res) => {
  res.render('index');
})

app.get('/products/:id', (req, res) => {
  const list = data.find(u => u.id == req.params.id);
  res.render("product-details", list);
})

app.get('/products', (req, res) => {
  res.render('product', {
    list: data
  });
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})