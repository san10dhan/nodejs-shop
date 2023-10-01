const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const productRouter = require('./api/routers/productRouter');
const orderRouter = require('./api/routers/orderRouter');
const customError = require('./errorHandler/customError');
const headerInterceptor = require('./interceptors/headerInterceptor');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(headerInterceptor);
app.use('/products', productRouter);
app.use('/orders', orderRouter);
app.use(customError);
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})
module.exports = app;