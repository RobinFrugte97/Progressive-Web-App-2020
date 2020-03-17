require('dotenv').config()

const express = require('express')
const fetch = require('node-fetch')

const app = express()
const url = 'https://gateway.marvel.com/v1/public/characters'
const limit = 100
const port = process.env.PORT || 3000

app.use(express.static('static'))
app.set('view engine', 'ejs')
app.set('views', 'views')

app.get("/", (req, res) => {
    res.redirect('/home')
})

app.get("/offline", (req, res) => {
    res.render("offline.ejs")
})
app.get("/home", (req, res) => {
    fetch(`${url}?ts=1&apikey=${process.env.APIKEY}&hash=${process.env.HASH}&limit=${limit}`)
        .then((resp) => resp.json())
        .then(index => {
            let indexData = index.data.results
            res.render('index.ejs', {indexData})
        })
})

app.get("/:id", (req, res) => {
    const id = req.params.id
    fetch(`${url}/${id}?ts=1&apikey=${process.env.APIKEY}&hash=${process.env.HASH}`)
        .then((resp) => resp.json())
        .then(detail => {
            let detailData = detail.data.results[0]
            res.render('detail.ejs', { detailData })
        })
        .catch((error) => {

        })
})


app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})
