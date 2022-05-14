import React from 'react';
import { useState, useEffect } from "react";
import IndividualItem from './individualitem';


const Home = () => {
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


//if an item (product.id) is clicked-on, then display only that item (product.id)
// this function would go into an onClick within the <a><img> tag to happen when picture is clicked on.

	products.splice(3,17);

	let displayThree;
		displayThree = (
		<div>
		<h2> Featured </h2>
		<ul>
			{products.map((product, index) => (
				
				<img key={index} src={product.image} alt= "" width= "300" height= "400" onClick={() => setSelected(product)}/>
				
			))}                               
		</ul> 
		</div>
		);

	let displayBlock;
	if (selected != null) {
		displayBlock = (
			<div> 

			<IndividualItem product={selected} />
			<br/>
			<br/>
			<button onClick={() => setSelected(null)}>Go back</button>

			</div>
			)
	} else {
		displayBlock = displayThree;

	}
	


return (
	<div>

	<h1>Home</h1>

	{displayBlock}

	</div>
);
};

export default Home;
