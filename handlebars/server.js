const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// settings handlebars
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultlayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

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