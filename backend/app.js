const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');
const authJwt = require('./helpers/jwt');
const errorHandler = require('./helpers/error-handler');

app.use(cors());
app.options('*', cors())

//MIDLLEWARES

app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(authJwt());
app.use(errorHandler)

//ROUTERS


const serviceRouter = require('./routers/services');
const categoriesRoutes = require('./routers/category');
const productsRouter = require('./routers/products');
const usersRoutes = require('./routers/users');
const ordersRoutes = require('./routers/orders');
const AppoitmentRouter = require('./routers/appoitment');



const api = process.env.API_URL

app.use(`${api}/categories`, categoriesRoutes);
app.use(`${api}/products`, productsRouter);
app.use(`${api}/users`, usersRoutes);
app.use(`${api}/orders`, ordersRoutes);
app.use(`${api}/services`, serviceRouter);
app.use(`${api}/appoitments`, AppoitmentRouter);


//DATABASE

mongoose.connect('mongodb://localhost:27017/local')
.then(() => {
    console.log('Database connected')
})
.catch((err) => {
    console.log(err);
})

//SERVER

app.listen(3000, () =>{
    console.log(api)
    console.log('Connection')
})