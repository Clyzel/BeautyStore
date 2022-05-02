import React from 'react';
import { useState, useEffect } from "react";


const IndividualItem = () => {

    const [products, setProducts] = useState([]);

	const loadProducts = () => {
        fetch("http://localhost:5000/data")
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
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20 }}>

    <div>Column 1
    <ul>
		{products.map((product, index) => (
			<li key={product.id}>
            <img src={product.image} alt= "" width= "500" height= "600" />
			</li>
		))}                     
    </ul>
        

    </div>


    <div> 
        <div style={{display: "flex"}}>
        <hr></hr>
        <p>
            <h1>  Description</h1>
            <ul>
                {products.map((product, index) => (
                <li key={product.id}>
                {product.title}
                <br/>
                {product.description}
                <br/>
                {product.category}
                </li>
		        ))}                     
            </ul>
            
            <br/>
            <br/>
           
            <input type="button" value="Back To Shop"/>
         
            
            <input type="button" value="Buy Now" />
          
    
            
        </p>
        
        </div>
    </div>
  </div>




    
    </div>
);
};

export default IndividualItem;
