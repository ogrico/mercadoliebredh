const express = require('express')
const path = require('path')

const app = express()

const PORT = process.env.PORT || 3001

app.use(express.static('src/public'))

app.get('/', (_,res)=>{
    res.sendFile(path.resolve('src/views/home.html'))
})

app.get('/home', (_,res)=>{
    res.sendFile(path.resolve('src/views/home.html'))
})

app.get('/register', (_,res)=>{
    res.sendFile(path.resolve('src/views/register.html'))
})

app.listen(PORT, ()=>{
    console.log('Servidor corriendo en el puerto ', PORT)
})