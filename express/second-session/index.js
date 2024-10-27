const express = require('express');
const db = require('./db.js');
const app = express();

app.use(express.json());

const PAGE_SIZE = 10;

app.get('/products', (req, res) => {
    let page =Math.max(parseInt(req.query.page) || 1, 1);

    

    const products = db.products.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

    if (products.length === 0){
        res.status(404);
        res.end();
    } else {
        res.json(products)
    }

     res.json(products);
});

app.get('/products/:id', (req, res) => {
    const id =req.params.id;
    const product = db.products.find(p => p.id === id);

    if (!product) {
        res.status(404);
        res.end();
        return;
    }

    product.supplier = db.suppliers.find(s => s.id == product.supplierId)

    res.json(product)
});


app.get("/suppliers/:id/products", (req, res) => {
    const id = req.params.id;
    const supplierProducts = db.products.filter(p => p.supplierId === id);
    res.json(db.products);
})

app.post('/products', (req, res) => {
    const newProduct = req.body;

    if (!newProduct.name || !newProduct.price || !newProduct.supplier === undefined) {
        res.status(400).send('Plese provide a name, price and a supplier for the product')
        return;
    }

    newProduct.id = db.products.length + 1;
    db.products.push(newProduct);
    res.status(201).json(newProduct);
})

app.put('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const newProduct = req.body;
    const product = db.products.find(p => p.id === id);

    if (!product) {
        res.status(404).send('Product not found');
        return;
    } 
    
    if (!newProduct.name ||!newProduct.price ||!newProduct.supplier === undefined) {
        res.status(400).send('Plese provide a name, price and a supplier for the product')
        return;
    }

    product.name = newProduct.name;
    product.price = newProduct.price;
    product.supplierId = newProduct.supplier;
    res.json(product);
});

app.delete("/products/:id", (req, res) => {
    const { id } = req.params;

    const productIndex = db.products.findIndex((p) => p.id === parseInt(id));

    if (productIndex === -1) {
        return res.status(404).json({ message: "Product not found" });
    }

    db.products.splice(productIndex, 1);
    res.status(200).json({ message: "Deleted" });
});

// Suppliers

app.get('/suppliers', (req, res) => {
    res.json(db.suppliers);
});

app.get('/suppliers/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const supplier = db.suppliers.find(s => s.id === id);

    if (!supplier) {
        return res.status(404).json({ message: "Supplier not found" });
    }

    res.json(supplier);
});

app.post('/suppliers', (req, res) => {
    const newSupplier = req.body;

    if (!newSupplier.name || !newSupplier.phoneNumber || !newSupplier.location) {
        return res.status(400).json({ message: "Please provide name, phone number, and location for the supplier" });
    }

    newSupplier.id = db.suppliers.length + 1; // Assuming ID is based on array length
    db.suppliers.push(newSupplier);
    res.status(201).json(newSupplier);
});





app.listen(8585)