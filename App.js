const express = require('express');
const database = require('./App/database/conexao') 

var app = express()

app.use(express.json())



app.listen(3000, function(){
    console.log("Servidor iniciado!")
})