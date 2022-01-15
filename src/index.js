const path = require('path');
const express = require('express');
const morgan = require('morgan')  ;
// const { engine } = require('express-handlebars');
// const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const exphbs = require('express-handlebars');
const hbs = exphbs.create({ extname: '.hbs' });

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

// Use body-parser lay duoc data tu req.body
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json());

// XMLHttpRequest, fetch, axios,..

// Http logger
// app.use(morgan('combined'))
// template engine
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, 'resources\\views')); // cách mình tìm đến file, hệ điều hành window (\\)

//Routes initialization
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})