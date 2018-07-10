const express = require('express')
const fetch = require('axios')
const app = express()

app.get('/', (req, res) => 
    res.send('Hello World!'))

app.get('/user', (req, res) => 
    fetch('https://randomuser.me/api/')
        .then(response => {
            res.json({
                name: response.data.results[0].name.first,
                age: 32,
                gender: 'male'
            })
        })
)

app.get('/home', (req,res) =>
    res.sendFile(__dirname + '/public/home.html'))

app.listen(3000, () => 
    console.log('Example app listening on port 3000!'))
