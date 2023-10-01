const express = require('express');
const router = express.Router();
router.get('/', (req, res, next) => {
    res.status(200).json({ message: 'products GET method' });
});
router.post('/', (req, res, next) => {
    const {name, price} = req.body;
    res.status(200).json({ message: 'products POST method', name, price });
});
router.patch('/:produtId', (req, res, next) => {
    const id = req.params.produtId;
    res.status(200).json({ message: 'products PATCH method', id });
});
router.delete('/:productId', (req, res, next) => {
    const id = req.params.produtId;
    res.status(200).json({ message: 'products DELETE method', id });
});
module.exports = router;