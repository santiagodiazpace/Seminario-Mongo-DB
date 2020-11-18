const express = require('express');

const router = express.Router();

const Venta = require('../modelos/esquema_ventas');


// CRUD - Get (obtiene todas las ventas)
router.get('/', async (req, res) => {
    try {
        const sales = await Venta.find()
        .populate('products')
        res.json(sales);

    } catch (err) {
        res.json({ message: err });
    }
});

// CRUD - Get (obtiene una venta dado su ID)
router.get('/:venta_ID', async (req, res) => {
    try {
        const venta_ID = await Venta.findById(req.params.venta_ID)
        res.json(venta_ID);
    } catch (err) {
            res.json({ status: "404 Not Found", message: err });
        }
});

// CRUD - Delete (elimina una venta dado su ID)
router.delete('/:id', async (req,res) => {
    try {
        const deleteVenta = await Venta.remove({ _id: req.params.id });
        res.json(deleteVenta);
    } catch (err) {
        res.json({ message: err });
    }
});

// CRUD - Post (crea una venta nueva)
router.post('/', async (req, res) => {
    const sale = new Venta(req.body);

    try {
        const postSale = await sale.save();
        res.json(postSale);
    } catch (err) {
        res.json({ message: err });
    }
});

// CRUD - Put (modifica una venta dado se ID)
router.patch('/:id', async (req,res) => {
    try {
        const updateSale = await Venta.updateOne({ _id: req.params.id },
            {$set: {
                direction: req.body.direction,
                totalPrice: req.body.totalPrice,
                products: req.body.products
            }});
        res.json(updateSale);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;