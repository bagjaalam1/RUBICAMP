const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const { readFileSync, writeFileSync } = require('fs')

const bacaData = readFileSync('data.json', 'utf-8')
const data = JSON.parse(bacaData)

const app = express()
const port = 3000

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.render('list', { rows: data })
})

app.get('/add', (req, res) => {
    res.render('add')
})

app.post('/add', (req, res) => {
    data.push({
        string: req.body.string,
        integer: req.body.integer,
        float: req.body.float,
        date: req.body.date,
        boolean: req.body.boolean
    })
    let masukJSON = JSON.stringify(data)
    writeFileSync('data.json', masukJSON)
    res.redirect('/')
})

app.get('/delete/:id', (req, res) => {
    const index = req.params.id
    data.splice(index, 1)
    let masukJSON = JSON.stringify(data)
    writeFileSync('data.json', masukJSON)
    res.redirect('/')
})

app.get('/edit/:id', (req, res) => {
    res.render('edit', { item: data[req.params.id] })
})

app.post('/edit/:id', (req, res) => {
    data[req.params.id] = {
        string: req.body.string,
        integer: req.body.integer,
        float: req.body.float,
        date: req.body.date,
        boolean: req.body.boolean
    }
    console.log(data)
    let masukJSON = JSON.stringify(data)
    writeFileSync('data.json', masukJSON)
    res.redirect('/')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})