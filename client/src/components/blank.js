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


app.get("/api/individual/:id", async (req, res) => {
    yelpResponse = await client.business(req.params.alias);
    res.send(yelpResponse.jsonBody)
    try {
        const data = await response.json
        console.log(data);
    } catch (err) {
        console.error(err);
        res.send(err)
    }
});


app.get("/api/individual/:id", async (req, res) => {
    try{
        const id = req.params.id;
        const { rows: products } = await db.query('SELECT * FROM products');
        res.send(products);
    } catch (e){
        return res.status(400).json({e});
    }
  });

  app.get("/api/individual/:id", async (req, res) => {
    try{
         const id = req.params.id;
         const individual = { image: req.body.image, title: req.body.title, description: req.body.description, category: req.body.category};
         const result = await db.query(
         'SELECT products(category, image, title, description, ) VALUES($1, $2, $3, $4) RETURNING *',
         [individual.image, individual.title, individual.description, individual.category]
        );
     console.log(result.rows[0]);
     res.json(result.rows[0]);
    }
  });

  app.get("/data/:id", async (req, res) => {
    try{
        const id = req.params.id;
        await db.query('SELECT * FROM products WHERE id=$1', [id]);
        res.send(products);
    } catch (e){
        return res.status(400).json({e});
    }
  });


  app.get('data/:id', cors(), async (req, res) => {
    const id = req.params.id;
    //can eliminate , [blogId] bc being reffed before
    const getId = await db.query(`SELECT * FROM products WHERE id=${id}`);
    console.log("getId", getId.rows);
    res.send(getId.rows);
});






const loadProduct = () => {
    fetch(`http://localhost:5000/data/${product.id}`)
        .then((response) => response.json())
        .then(data => {
            setItem(data);
            console.log(item);
        })
}
// useEffect(() => {
    //     loadProducts();
    // }, []);







  //   const id = req.params.id;
//     console.log(req.params);
//     await db.query('SELECT FROM products WHERE id=$1', [id]);
//     res.status(200).end();

  // const id = req.params.id;
  // const individual = { image: req.body.image, title: req.body.title, description: req.body.description, category: req.body.category}
//     const result = await db.query(
//         'SELECT products(category, image, title, description, ) VALUES($1, $2, $3, $4) RETURNING *',
//         [individual.image, individual.title, individual.description, individual.category]
  //      );
//     console.log(result.rows[0]);
//     res.json(result.rows[0]);
// });

// image title description category