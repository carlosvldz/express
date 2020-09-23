const express = require('express');
const path = require("path");
const app = express();
const productsRouter = require('./routes/products');

// establecemos template engine
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "pug");

// endpoints productos
app.use('/products', productsRouter)

const server = app.listen(8000, function() {
    console.log(`Listening http://localhost:${server.address().port}`)
})