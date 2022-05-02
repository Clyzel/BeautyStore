import React from 'react';
import { useState, useEffect } from "react";

const Home = () => {
	const [products, setProducts] = useState([]);

	const loadProducts = () => {
        fetch("http://localhost:5000/data")
            .then((response) => response.json())
            .then(products => {
                console.log(products);
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

	{/* <p>{products}</p> */}
	<ul>
		{products.map((product, index) => (
			<li key={product.id}>
			<a href={`http://localhost:3000/individualitem?id=${product.id}`}><img src={product.image} width="100" height="100" ></img></a>
					<br/>
					{product.title}
					<br/>
					{product.category} 
					</li>
		)
			)}
                        
                       
    </ul>

	
	
	</div>
);
};

export default Home;
