import React from 'react';
import { useState, useEffect } from "react";


const IndividualItem = () => {

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
	<h1>Individual Item Here</h1>
     <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>

    <div>Column 1
    <img src={products.image} alt="Italian Trulli" width= "500" height= "600" />
        

    </div>


    <div> 
        <div style={{display: "flex"}}>
        <hr></hr>
        <p>
            <h1>Description</h1>
            {products.description}
            <br/>
            <br/>
            <form action="http://localhost:3000/shop">
            <input type="submit" value="Back To Shop" />
            </form>
            <form action="http://localhost:3000/checkout">
            <input type="submit" value="Buy Now" />
            </form>
            <form action="http://localhost:3000/checkout">
            <input type="submit" value="Add Item" />
            </form>
            
        </p>
        
        </div>
    </div>
  </div>




    
    </div>
);
};

export default IndividualItem;
