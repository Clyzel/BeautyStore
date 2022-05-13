import React from 'react';
import { useState, useEffect } from "react";
import IndividualItem from './individualitem';


const Shop = () => {

	const [products, setProducts] = useState([]);
	const [selected, setSelected] = useState(null);

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

	let displayBlock;
	if (selected != null) {
		displayBlock = (
			<div> 
			<IndividualItem product={selected} />
			<button onClick={() => setSelected(null)}>Go back</button> 
			</div>
			)
	} else {
		displayBlock = (<div><h2> List of Items </h2>
		<ul>
			{products.map((product, index) => (
				
				<img key={index} src={product.image} alt= "" width= "300" height= "400" onClick={() => setSelected(product)}/>
				
				// onClick={loadProduct}
				// <IndividualItem key={index} product={product}/>
			))}                               
		</ul> </div>
		)

	}


	
return (
	<div>
	<h1>Shop</h1>
	{displayBlock}
	</div>
);
};

export default Shop;
