const express = require("express");
const dotEnv = require('dotenv');
const mongoose = require('mongoose');
const vendorRoutes = require('./routes/vendorRoutes');
const bodyParser = require('body-parser');
const firmRoutes = require('./routes/firmRoutes');
const productRoutes = require('./routes/productRoutes')
const Path = require('path')

const app = express()

const PORT = process.env.PORT || 4000;

dotEnv.config();

mongoose.connect(process.env.MONGO_URI)
.then(()=>{console.log("mongo db connected successfully!")})
.catch((error)=>{console.log(error)})

app.use(bodyParser.json());

app.use('/vendor', vendorRoutes);
app.use('/firm', firmRoutes);
app.use('/product', productRoutes);
app.use('/uploads', express.static('uploads'));


app.listen(PORT, ()=>{
    console.log(`server running at ${PORT}`)
});

app.use('/', (req,res)=>{
    res.send("<h1> welcome to the server </h1>")
})