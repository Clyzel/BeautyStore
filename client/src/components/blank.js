app.post('/api/products', cors(), async (req, res) => {
    const newProducts = { id: req.body.id, category: req.body.category, image: req.body.image, title: req.body.title, description: req.body.description, price: req.body.price }
    console.log([newProducts.id, newProducts.category, newProducts.image, newProducts.title, newProducts.description, newProducts.price]);
    const result = await db.query(
        'INSERT INTO products(id, category, image, title, description, price) VALUES($1, $2, $3, $4, $5, $6) RETURNING *',
        [newProducts.id, newProducts.category, newProducts.image, newProducts.title, newProducts.description, newProducts.price]
    );
    console.log(result.rows[0]);
    res.json(result.rows[0]);
});