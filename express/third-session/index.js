const express = require('express');
const productController = require('./controllers/productcontroller')
const CalculateController = require('./controllers/calculateController')

const app = express();

app.use('/calculator', CalculateController)

app.listen(8585)