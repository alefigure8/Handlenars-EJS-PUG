const express = require('express');
const app = express();
const path = require('path');
const engine = require('ejs-mate');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// settings ejs
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs')

// routes
app.use('/productos', require('./routes/routes.productos'));
app.use('/', require('./routes/routes.index'));

// public
app.use(express.static(__dirname + '/public'));

// listen
const server = app.listen(8080, ()=>{
  console.log(`Server listo en http://localhost:${server.address().port}`);
})

server.on('error', err => {
  console.log(err);
})