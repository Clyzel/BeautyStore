import React from 'react';
import { useState, useEffect } from "react";

const Checkout = () => {
	const [products, setProducts] = useState([]);

	const loadProducts = () => {
        fetch("http://localhost:5000/api")
            .then((response) => response.json())
            .then(products => {
                setProducts(products);
            })
    }

	useEffect(() => {
        loadProducts();
    }, []);



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
			Name:
			<br/>
			Quantity:
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
            {products.price}
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
