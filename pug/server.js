const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// settings pug
app.set('view engine', 'pug');

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