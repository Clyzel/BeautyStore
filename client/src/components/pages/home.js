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

	let displayBlock;
	if (selected != null) {
		displayBlock = (
			<div> 
			<button onClick={() => setSelected(null)}>Go back</button> 
			<IndividualItem product={selected} />
			</div>
			)
	} else {
		displayBlock = (<div><h2> List of Items </h2>
		<ul>
			{products.map((product, index) => (
				
				<img key={index} src={product.image} alt= "" width= "500" height= "600" onClick={() => setSelected(product)}/>
				
				// onClick={loadProduct}
				// <IndividualItem key={index} product={product}/>
			))}                               
		</ul> </div>
		)

	}
	


return (
	<div>

	<h1>Home</h1>

	{displayBlock}

	</div>
);
};

export default Home;
