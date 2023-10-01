const express = require('express');
const router = express.Router();
router.get('/', (req, res, next) => {
    res.status(200).json({ message: 'Orders GET method' });
});
router.post('/', (req, res, next) => {
    res.status(200).json({ message: 'Orders Post method' });
});
router.patch('/:ordersId', (req, res, next) => {
    const id = req.params.ordersId;
    res.status(200).json({ message: 'products Patch method', id });
});
router.delete('/:ordersId', (req, res, next) => {
    const id = req.params.ordersId;
    res.status(200).json({ message: 'products Delete method', id });
});
module.exports = router;