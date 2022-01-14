const path = require('path')
const express = require('express')
const morgan = require('morgan')  
// const { engine } = require('express-handlebars');
// const handlebars = require('express-handlebars')  
const app = express()
const port = 3000



const exphbs = require('express-handlebars')
const hbs = exphbs.create({ extname: '.hbs' })

app.use(express.static(path.join(__dirname, 'public')))

// Use body-parser lay duoc data tu req.body
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

// XMLHttpRequest, fetch, axios,..

// Http logger
// app.use(morgan('combined'))
// template engine
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set("views", path.join(__dirname, 'resources\\views')); // cách mình tìm đến file, hệ điều hành window (\\)

app.get('/', (req, res) => {
  res.render('home')
})
app.get('/news', (req, res) => {
  console.log(req.query.q)
  res.render('news')
})
app.get('/search', (req, res) => {
  // console.log(req.query.author)
  res.render('search')
})
app.post('/search', (req, res) => {
  console.log(req.body)
  res.send('')
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})