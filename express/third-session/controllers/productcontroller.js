const router = require('express').Router();

router.get('/', (req,res) => {
    res.writeHead(200, 'Get all the products')
    res.end();
})

router.get('/:id', (req,res) => {
    const id = req.params.id;
    res.writeHead(200, 'Get all the products by id')
    res.end();
})

router.post('/', (req,res) => {
    res.writeHead(200, 'Create a product')
    res.end();
})

module.exports = router;