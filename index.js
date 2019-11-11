const express = require('express')
const http = require('http')
const app = express()
app.use(express.json())
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', '*')
    next()
})
app.use(express.static('public'))
app.get('/serve', (req, res) => {
    res.send('data.json')
})

http.createServer(app).listen(3000)
console.log('服务器启动')