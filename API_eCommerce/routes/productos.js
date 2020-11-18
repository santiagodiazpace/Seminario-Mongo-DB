const express = require('express');

const router = express.Router();

const Producto = require('../modelos/esquema_productos');

// CRUD - Get (obtiene todos los productos)
router.get('/', async (req, res) => {
    try {
        const products = await Producto.find();
        res.json(products); 
    } catch (err) {
        res.json({ message: err });
    }
});

// CRUD - Get (obtiene un producto dado por su ID)
router.get('/:producto_ID', async (req, res) => {
    try {
        const producto_ID = await Producto.findById(req.params.producto_ID)
        res.json(producto_ID);
    } catch (err) {
            res.json({ status: "404 Not Found", message: err });
        }
});

// CRUD - Delete (elimina un producto dado se ID)
router.delete('/:id', async (req,res) => {
    try {
        const deleteProducto = await Producto.remove({ _id: req.params.id });
        res.json(deleteProducto);
    } catch (err) {
        res.json({ message: err });
    }
});

// CRUD - Post (crea un nuevo producto)
router.post('/', async (req, res) => {
    const prod_nuevo = new Producto({
        name: req.body.name,
        description: req.body.description,
        stock: req.body.stock,
        price: req.body.price
    });
    try {
        const postProduct = await prod_nuevo.save();
        res.json(postProduct);
    } catch (err) {
        res.json({ message: err });
    }
});


// CRUD - Put (modifica un producto dado su ID)
router.patch('/:id', async (req,res) => {
    try {
        const updateProduct = await Producto.updateOne({ _id: req.params.id },
            {$set: {
                name: req.body.name,
                description: req.body.description,
                stock: req.body.stock,
                price: req.body.price
            }});
        res.json(updateProduct);
    } catch (err) {
        res.json({ message: err });
    }
});


module.exports = router;