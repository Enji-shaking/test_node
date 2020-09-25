const express = require('express')
const app = express()

// app.use(express.json())

app.get('/', (req, res)=>{
    res.sendFile(__dirname+ '/index.html');
})

app.get('/test', (req, res)=>{
    res.send('I am here');
})

app.listen(3000, ()=> console.log("server started"))