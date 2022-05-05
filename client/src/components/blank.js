app.post('/api/faveitems', cors(), async (req, res) => {
    const newProducts = { id: req.body.id, category: req.body.category, image: req.body.image, title: req.body.title, description: req.body.description, price: req.body.price }
    console.log([newProducts.id, newProducts.category, newProducts.image, newProducts.title, newProducts.description, newProducts.price]);
    const result = await db.query(
        'INSERT INTO faveitems(id, category, image, title, description, price) VALUES($1, $2, $3, $4, $5, $6) RETURNING *',
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
        const { rows: faveitems } = await db.query('SELECT * FROM faveitems');
        res.send(faveitems);
    } catch (e){
        return res.status(400).json({e});
    }
  });

  app.get("/api/individual/:id", async (req, res) => {
    try{
         const id = req.params.id;
         const individual = { image: req.body.image, title: req.body.title, description: req.body.description, category: req.body.category};
         const result = await db.query(
         'SELECT faveitems(category, image, title, description, ) VALUES($1, $2, $3, $4) RETURNING *',
         [individual.image, individual.title, individual.description, individual.category]
        );
     console.log(result.rows[0]);
     res.json(result.rows[0]);
    }
  });

  app.get("/data/:id", async (req, res) => {
    try{
        const id = req.params.id;
        await db.query('SELECT * FROM faveitems WHERE id=$1', [id]);
        res.send(faveitems);
    } catch (e){
        return res.status(400).json({e});
    }
  });


  app.get('data/:id', cors(), async (req, res) => {
    const id = req.params.id;
    //can eliminate , [blogId] bc being reffed before
    const getId = await db.query(`SELECT * FROM faveitems WHERE id=${id}`);
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
//     await db.query('SELECT FROM faveitems WHERE id=$1', [id]);
//     res.status(200).end();

  // const id = req.params.id;
  // const individual = { image: req.body.image, title: req.body.title, description: req.body.description, category: req.body.category}
//     const result = await db.query(
//         'SELECT faveitems(category, image, title, description, ) VALUES($1, $2, $3, $4) RETURNING *',
//         [individual.image, individual.title, individual.description, individual.category]
  //      );
//     console.log(result.rows[0]);
//     res.json(result.rows[0]);
// });

// image title description category

// app.get('/favitems', cors(), async (req, res) => {
//     try{
//         const { rows: favitems } = await db.query('SELECT * FROM favitems');
//         res.send(favitems);
//     } catch (e){
//         return res.status(400).json({e});
//     }
//   });

// app.post('/favitems', cors(), async (req, res) => {
//     const newFav = { products_id: req.body.products_id }
//     console.log([newFav.products_id]);
//     const result = await db.query(
//         'INSERT INTO favitems(products_id) VALUES($1) RETURNING *',
//         [newFav.products_id]
//     );
//     console.log(result.rows[0]);
//     res.json(result.rows[0]);
// });


// const postFavitem = (newFavitem) => {
//     return fetch('http://localhost:5000/favitems', {
//     method: 'POST',
//     headers: {'Content-Type': 'application/json'}, 
//     body: JSON.stringify(newFavitem)
//   }).then((response) => {
//       return response.json()
//   }).then((data) => {
//     console.log("From the post ", data);
//     props.saveFavItem(data);
  
// });
// }


// const deleteFav = (favitems) => {
//     return fetch(`'http://localhost:5000/favitems/${product.id}`, {
//         method: "DELETE"
//     }).then((response) =>{
//         //console.log(response);
//         if(response.ok){
//             loadFavitems();
//         }
//     })
// }

// const loadFavitems = () => {
//     fetch("http://localhost:5000/favitems")
//         .then((response) => response.json())
//         .then(favitems => {
//             console.log(favitems);
//                 setFav(favitems);
//         })
// }

// useEffect(() => {
//     loadFavitems();
// }, []);
