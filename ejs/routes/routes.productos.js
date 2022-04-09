const {Router} = require('express');
const router = Router();
const Productos = require('../api/productos')

const producto = new Productos()

router.get('/', (req, res) => {
  const productosLista = producto.listarAll();
  res.render('products', {productosLista});
})

router.post('/', (req, res) => {
  const productoNuevo = req.body;
  producto.guardar(productoNuevo);
  res.redirect('/');
})

module.exports = router;