import React from 'react';
import { useState, useEffect } from "react";

const Home = () => {
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
	<h1>Home</h1>

	<h2> List of Items </h2>

	<ul>
                
					<li>
					<form action="http://localhost:3000/individualitem">
					<input type="image" src={products.image} alt="Submit" width="100" height="100">
					</input>
					<br/>
					{products.title}
					<br/>
					{products.category} 
					</form></li>
				
                        
                       
    </ul>

	
	
	</div>
);
};

export default Home;
