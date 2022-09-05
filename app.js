const express = require ('express');
const path = require('path')

const app = express();



app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'/views/index.html'))
})

app.get('/productCart', (req,res)=>{
    res.sendFile(path.join(__dirname,'/views/productCart.html'))
})

app.get('/register', (req,res)=>{
    res.sendFile(path.join(__dirname,'/views/register.html'))
})

app.get('/login', (req,res)=>{
    res.sendFile(path.join(__dirname,'/views/login.html'))
})

app.get('/productDetails', (req,res)=>{
    res.sendFile(path.join(__dirname,'/views/productDetails.html'))
})

app.listen('3000')