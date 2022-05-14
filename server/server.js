const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config()
const db = require('../server/db/db-connection.js'); 
//const { request } = require('http');
var request = require('request');
const REACT_BUILD_DIR = path.join(__dirname, '..', 'client', 'build');
const app = express();
app.use(express.static(REACT_BUILD_DIR));

const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

//const URL = "https://fakestoreapi.com/products/1";

//creates an endpoint for the route /api
// app.get("/api", (req, res) => {
//     request(
//       URL,
//       function(error, response, body) {
//         if (!error && response.statusCode == 200) {
//           res.send(body);
  
//         }
//       }
//     );
//   });

// //create the get request

app.get('/data', cors(), async (req, res) => {
  try{
      const { rows: products } = await db.query('SELECT * FROM products');
      res.send(products);
  } catch (e){
      return res.status(400).json({e});
  }
});

app.get('/favitems', cors(), async (req, res) => {
  try{
      const { rows: favitems } = await db.query('SELECT * FROM favitems');
      res.send(favitems);
  } catch (e){
      return res.status(400).json({e});
  }
});

app.get('/additems', cors(), async (req, res) => {
  try{
      const { rows: additems } = await db.query('SELECT * FROM additems');
      res.send(additems);
  } catch (e){
      return res.status(400).json({e});
  }
});

app.get('/maxitems', cors(), async (req, res) => {
  try{
      const { rows: additems } = await db.query('SELECT MAX (id) FROM additems;');
      res.send(additems);
  } catch (e){
      return res.status(400).json({e});
  }
});

app.get('/favejointable', cors(), async (req, res) => {
  try{
      const { rows: joinItems } = await db.query('SELECT title, price FROM products JOIN favitems ON products.id = favitems.products_id;');
      res.send(joinItems);
  } catch (e){
      return res.status(400).json({e});
  }
});

app.get('/addedjointable', cors(), async (req, res) => {
  try{
      const { rows: addedItems } = await db.query('SELECT title, price FROM products JOIN additems ON products.id = additems.product_id;');
      res.send(addedItems);
  } catch (e){
      return res.status(400).json({e});
  }
});


// app.get('/favitems/id', cors(), async (req, res) => {
//   try{
//       const { rows: favitems } = await db.query('SELECT id FROM favitems');
//       res.send(favitems);
//   } catch (e){
//       return res.status(400).json({e});
//   }
// });

app.post('/favitems', cors(), async (req, res) => {
  const newFav = { id: req.body.id }
  console.log([newFav.id]);
  const result = await db.query(
      'INSERT INTO favitems(products_id) VALUES($1) RETURNING *',
      [newFav.id]
  );
  console.log(result.rows[0]);
  res.json(result.rows[0]);
});

app.post('/additems', cors(), async (req, res) => {
  const newAddItem = { id: req.body.id }
  console.log([newAddItem.id]);
  const result = await db.query(
      'INSERT INTO additems(product_id) VALUES($1) RETURNING *',
      [newAddItem.id]
  );
  console.log(result.rows[0]);
  res.json(result.rows[0]);
});

app.delete('/favitems', cors(), async (req, res) =>{
  const deleteId = req.body.id;
  console.log(req.params);
  await db.query('DELETE FROM favitems WHERE id=$1', [deleteId]);
  res.status(200).end();

 });

 app.delete('/additems', cors(), async (req, res) =>{
  const deleteId = req.body.id;
  console.log(req.params);
  await db.query('DELETE FROM additems WHERE id=$1', [deleteId]);
  res.status(200).end();

 });

//  app.delete('/favitems', cors(), async (req, res) => {
//   //console.log("looking here", req);
//   const deleteFavItem = { id: req.body.id }
//   console.log("testing info ", [deleteFavItem.id]);

//   const result = await db.query(
//       'DELETE FROM favitems WHERE id=$1',
//       [deleteFavItem.id]
//   );
  
//   console.log(result.rows[0]);
//   res.json(result.rows[0]);
// });

// app.get("/data/:id", async (req, res) => {
//   try{
//     //const product = { id: req.body.id
//       const { rows: products } = await db.query('SELECT * FROM products');
//       res.send(products);
//   } catch (e){
//       return res.status(400).json({e});
//   }
// });

// app.get("/data/:id", async (req, res) => {
//   try{
//       const id = req.params.id;
//       await db.query('SELECT * FROM products WHERE id=$1', [id]);
//       res.send(products);
//   } catch (e){
//       return res.status(400).json({e});
//   }
// });

// app.get("/data/:id", async (req, res) => {
//   try {
//   const id = req.params.id;
//   const getId = await db.query(`SELECT * FROM products WHERE id=${id}`);
//   //console.log("getId", getId.rows);
//   res.send(getId.rows);
//   } catch (e){
//       return res.status(400).json({e});
//   }
// });



// app.get('/api/students', cors(), async (req, res) => {
    
//     // const STUDENTS = [

//     //     { id: 1, firstName: 'Lisa', lastName: 'Lee' },
//     //     { id: 2, firstName: 'Eileen', lastName: 'Long' },
//     //     { id: 3, firstName: 'Fariba', lastName: 'Dako' },
//     //     { id: 4, firstName: 'Cristina', lastName: 'Rodriguez' },
//     //     { id: 5, firstName: 'Andrea', lastName: 'Trejo' },
//     // ];
//     // res.json(STUDENTS);
//     try{
//         const { rows: students } = await db.query('SELECT * FROM students');
//         res.send(students);
//     } catch (e){
//         console.log(e);
//         return res.status(400).json({e});
//     }
// });

//create the POST request

// app.post('/api/product', cors(), async (req, res) => {
//   const newProducts = { id: req.body.id, category: req.body.category, image: req.body.image, title: req.body.title, description: req.body.description, price: req.body.price }
//   console.log([newProducts.id, newProducts.category, newProducts.image, newProducts.title, newProducts.description, newProducts.price]);
//   const result = await db.query(
//       'INSERT INTO products(id, category, image, title, description, price) VALUES($1, $2, $3, $4, $5, $6) RETURNING *',
//       [newProducts.id, newProducts.category, newProducts.image, newProducts.title, newProducts.description, newProducts.price]
//   );
//   console.log(result.rows[0]);
//   res.json(result.rows[0]);
// });


// app.post('/api/students', cors(), async (req, res) => {
//     const newUser = { firstname: req.body.firstname, lastname: req.body.lastname }
//     console.log([newUser.firstname, newUser.lastname]);
//     const result = await db.query(
//         'INSERT INTO students(firstname, lastname) VALUES($1, $2) RETURNING *',
//         [newUser.firstname, newUser.lastname]
//     );
//     console.log(result.rows[0]);
//     res.json(result.rows[0]);
// });

// // delete request
// app.delete('/api/students/:studentId', cors(), async (req, res) =>{
//     const studentId = req.params.studentId;
//     //console.log(req.params);
//     await db.query('DELETE FROM students WHERE id=$1', [studentId]);
//     res.status(200).end();

// });

// // Put request - Update request
// app.put('/api/students/:studentId', cors(), async (req, res) =>{
//     const studentId = req.params.studentId;
//     const updateStudent = { id: req.body.id, firstname: req.body.firstname, lastname: req.body.lastname }
//     //console.log(req.params);
//     // UPDATE students SET lastname = 'TestMarch' WHERE id = 1;
//     console.log(studentId);
//     console.log(updateStudent);
//     const query = `UPDATE students SET lastname=$1, firstname=$2 WHERE id = ${studentId} RETURNING *`;
//     console.log(query);
//     const values = [updateStudent.lastname, updateStudent.firstname];
//     try{
//         const updated = await db.query(query, values);
//         console.log(updated.rows[0]);
//         res.send(updated.rows[0]);
//     } catch (e){
//         console.log(e);
//         return res.status(400).json({e});
//     }
// });

// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});