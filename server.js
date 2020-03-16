const express = require('express')
const fetch = require('node-fetch')

const app = express()
const url = 'https://gateway.marvel.com/v1/public/characters'
const apikey = 'e2c13dcb787436182cc25b65cbcfde95'
const hash = 'f60cbe16481792de29bc9c79da37aa05'
const limit = 100
const port = 3000

app.use(express.static('static'))
app.set('view engine', 'ejs')
app.set('views', 'views')

app.get("/", (req, res) => {
    res.redirect('/home')
})

app.get("/home", (req, res) => {
    fetch(`${url}?ts=1&apikey=${apikey}&hash=${hash}&limit=${limit}`)
        .then((resp) => resp.json())
        .then(index => {
            let indexData = index.data.results
            res.render('index.ejs', {indexData})
        })
})

app.get("/:id", (req, res) => {
    const id = req.params.id
    fetch(`${url}/${id}?ts=1&apikey=${apikey}&hash=${hash}`)
        .then((resp) => resp.json())
        .then(detail => {
            let detailData = detail.data.results[0]
            res.render('detail.ejs', { detailData })
        })
        .catch((error) => {

        })
})

app.listen(port, () => {
    console.log('server is running on port 3000')
})
