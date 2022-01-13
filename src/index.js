const path = require('path')
const express = require('express')
const morgan = require('morgan')  
// const { engine } = require('express-handlebars');
// const handlebars = require('express-handlebars')  
const app = express()
const port = 3000

const exphbs = require('express-handlebars')
const hbs = exphbs.create({ extname: '.hbs' })


// Http logger
app.use(morgan('combined'))
// template engine
// app.engine('handlebars', handlebars())
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set("views", path.join(__dirname, 'resources\\views')); // cách mình tìm đến file, hệ điều hành window (\\)

app.get('/', (req, res) => {
  res.render('home')
})
app.get('/news', (req, res) => {
  res.render('news')
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})