// app.post('/api/faveitems', cors(), async (req, res) => {
//     const newProducts = { id: req.body.id, category: req.body.category, image: req.body.image, title: req.body.title, description: req.body.description, price: req.body.price }
//     console.log([newProducts.id, newProducts.category, newProducts.image, newProducts.title, newProducts.description, newProducts.price]);
//     const result = await db.query(
//         'INSERT INTO faveitems(id, category, image, title, description, price) VALUES($1, $2, $3, $4, $5, $6) RETURNING *',
//         [newProducts.id, newProducts.category, newProducts.image, newProducts.title, newProducts.description, newProducts.price]
//     );
//     console.log(result.rows[0]);
//     res.json(result.rows[0]);
// });


// app.get("/api/individual/:id", async (req, res) => {
//     yelpResponse = await client.business(req.params.alias);
//     res.send(yelpResponse.jsonBody)
//     try {
//         const data = await response.json
//         console.log(data);
//     } catch (err) {
//         console.error(err);
//         res.send(err)
//     }
// });


// app.get("/api/individual/:id", async (req, res) => {
//     try{
//         const id = req.params.id;
//         const { rows: faveitems } = await db.query('SELECT * FROM faveitems');
//         res.send(faveitems);
//     } catch (e){
//         return res.status(400).json({e});
//     }
//   });

//   app.get("/api/individual/:id", async (req, res) => {
//     try{
//          const id = req.params.id;
//          const individual = { image: req.body.image, title: req.body.title, description: req.body.description, category: req.body.category};
//          const result = await db.query(
//          'SELECT faveitems(category, image, title, description, ) VALUES($1, $2, $3, $4) RETURNING *',
//          [individual.image, individual.title, individual.description, individual.category]
//         );
//      console.log(result.rows[0]);
//      res.json(result.rows[0]);
//     }
//   });

//   app.get("/data/:id", async (req, res) => {
//     try{
//         const id = req.params.id;
//         await db.query('SELECT * FROM faveitems WHERE id=$1', [id]);
//         res.send(faveitems);
//     } catch (e){
//         return res.status(400).json({e});
//     }
//   });


//   app.get('data/:id', cors(), async (req, res) => {
//     const id = req.params.id;
//     //can eliminate , [blogId] bc being reffed before
//     const getId = await db.query(`SELECT * FROM faveitems WHERE id=${id}`);
//     console.log("getId", getId.rows);
//     res.send(getId.rows);
// });






// const loadProduct = () => {
//     fetch(`http://localhost:5000/data/${product.id}`)
//         .then((response) => response.json())
//         .then(data => {
//             setItem(data);
//             console.log(item);
//         })
// }
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
//     const newAddItem = { products_id: req.body.products_id }
//     console.log([newAddItem.products_id]);
//     const result = await db.query(
//         'INSERT INTO favitems(products_id) VALUES($1) RETURNING *',
//         [newAddItem.products_id]
//     );
//     console.log(result.rows[0]);
//     res.json(result.rows[0]);
// });


// const postFavitem = (newAddItemitem) => {
//     return fetch('http://localhost:5000/favitems', {
//     method: 'POST',
//     headers: {'Content-Type': 'application/json'}, 
//     body: JSON.stringify(newAddItemitem)
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

// app.delete('/favitems', cors(), async (req, res) =>{
//     const deleteId = req.params.id;
//     //console.log(req.params);
//     await db.query('DELETE FROM favitems WHERE products_id=$1', [deleteId]);
//     res.status(200).end();


//     const newAddItem = { id: req.body.id }

//     app.post('/favitems', cors(), async (req, res) => {
//         const newAddItem = { id: req.body.id }
//         console.log([newAddItem.id]);
//         const result = await db.query(
//             'INSERT INTO favitems(products_id) VALUES($1) RETURNING *',
//             [newAddItem.id]
//         );
//         console.log(result.rows[0]);
//         res.json(result.rows[0]);
//       });

// app.delete('/favitems', cors(), async (req, res) => {
//     //console.log("looking here", req);
//     const deleteFavItem = { id: req.body.id }
//     console.log("testing info ", [deleteFavItem.id]);

//     const result = await db.query(
//         'DELETE FROM favitems WHERE id=$1',
//         [deleteFavItem.id]
//     );
    
//     console.log(result.rows[0]);
//     res.json(result.rows[0]);
// });

// app.get('/jointable', cors(), async (req, res) => {
//     try{
//         const { rows: joinItems } = await db.query('SELECT title, price FROM products JOIN favitems ON products.id = favitems.products_id;');
//         res.send(joinItems);
//     } catch (e){
//         return res.status(400).json({e});
//     }
//   });

//   const loadJoinItems = () => {
//     // user.id and product.id
//    fetch("http://localhost:5000/jointable")
//        .then((response) => response.json())
//        .then(joinItems => {
//            //console.log(joinItems);
//                setFavitems(joinItems);
//        })
// }

// app.post('/additems', cors(), async (req, res) => {
//     const newAddItem = { id: req.body.id }
//     console.log([newAddItem.id]);
//     const result = await db.query(
//         'INSERT INTO additems(product_id) VALUES($1) RETURNING *',
//         [newAddItem.id]
//     );
//     console.log(result.rows[0]);
//     res.json(result.rows[0]);
//   });

//   app.delete('/additems', cors(), async (req, res) =>{
//     const deleteId = req.body.id;
//     console.log(req.params);
//     await db.query('DELETE FROM additems WHERE id=$1', [deleteId]);
//     res.status(200).end();
  
//    });

//    app.get('/additems', cors(), async (req, res) => {
//     try{
//         const { rows: additems } = await db.query('SELECT * FROM addtems');
//         res.send(additems);
//     } catch (e){
//         return res.status(400).json({e});
//     }
//   });

// const loadAddItems = () => {
//     fetch("http://localhost:5000/additems")
//         .then((response) => response.json())
//         .then(additems => {
//             //console.log(additems);
//                 setAddItems(additems);
//         })
//     }