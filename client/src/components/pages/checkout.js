import React from 'react';
import { useState, useEffect } from "react";

const Checkout = () => {
	const [products, setProducts] = useState([]);
    const [favitems, setFavitems] = useState([]);
    const [joinItems, setJoinItems] = useState([]);
    const [addedItems, setAddedItems] = useState([]);

	const loadProducts = () => {
        fetch("http://localhost:5000/data")
            .then((response) => response.json())
            .then(products => {
                console.log(products);
					setProducts(products);
            })
    }

    const loadFavitems = () => {
       fetch("http://localhost:5000/favitems")
           .then((response) => response.json())
           .then(favitems => {
               //console.log(favitem);
                   setFavitems(favitems);
           })
   }

   const loadFavJoinItems = () => {
   fetch("http://localhost:5000/favejointable")
       .then((response) => response.json())
       .then(joinItems => {
           //console.log(joinItems);
               setJoinItems(joinItems);
       })
    }

    const loadAddedJoinItems = () => {
        fetch("http://localhost:5000/addedjointable")
            .then((response) => response.json())
            .then(addedItems => {
                //console.log(joinItems);
                    setAddedItems(addedItems);
            })
         }

	useEffect(() => {
        loadProducts();
        loadFavitems();
        loadFavJoinItems();
        loadAddedJoinItems();
    }, []);

    let displayFav = (
    <ol>
    {joinItems.map((item, index) => (
        <li key={index}>
            <h2>{item.title}</h2>
        </li>
        
    ))}                               
    </ol> );

let displayAddedItemName = (
    <ol>
    {addedItems.map((item, index) => (
        <li key={index}>
           <h2>{item.title} || ${item.price}</h2>
        </li>
        
    ))}                               
    </ol> );

    // let subtotal = (parseInt({item.price}));

return (
	<div>
	<h1>Checkout</h1>
{/* column 1 & (a column in a column) */}
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
    <div>
	<div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
	<div> 
		<h1>Items</h1>
		<p>
			{displayAddedItemName}
			<br/>
		</p>
{/* lower left of this column 1 */}
		<hr></hr>
		<h1>Payment</h1>
	</div>
{/* upper right side of this coulmn 1 */}
	<div>
	<div style={{display: "flex"}}>
        <hr></hr>
		<h1>Favorites</h1>
        {displayFav}
	</div>
	</div>
	</div>
    </div>

{/* column 2 */}
    <div> 
        <div style={{display: "flex"}}>
        <hr></hr>
        <p>
            <h1>Subtotal</h1>
           
            <br/>
			<h2>Shipping</h2>
            free
            <br/>
            <input type="submit" value="Purchase"/>
            
        </p>
        
        </div>
    </div>
  </div>
  </div>
);
};

export default Checkout;
