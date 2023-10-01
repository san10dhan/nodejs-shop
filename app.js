const express = require('express');
const app = express();
const productRouter = require('./api/routers/productRouter');
const orderRouter = require('./api/routers/orderRouter');
app.use('/products', productRouter);
app.use('/orders', orderRouter);
module.exports = app;