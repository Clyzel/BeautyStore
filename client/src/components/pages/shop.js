import React from 'react';
import { useState, useEffect } from "react";
import IndividualItem from './individualitem';


const Shop = () => {

	const [products, setProducts] = useState([]);
	const [clothing, setClothing] = useState([]);
	const [jewelry, setJewelry] = useState([]);
	const [bags, setBags] = useState([]);
	const [selected, setSelected] = useState(null);
	const [isChecked, setIsChecked] = useState(false);

	const loadProducts = () => {
        fetch("http://localhost:5000/data")
            .then((response) => response.json())
            .then(products => {
                console.log(products);
					setProducts(products);
            })
    }


	const loadClothingOnly = () => {
        fetch("http://localhost:5000/categoryWomensClothing")
            .then((response) => response.json())
            .then(womensClothing => {
                console.log(womensClothing);
				setClothing(womensClothing);
            })
    }

	const loadJewelryOnly = () => {
        fetch("http://localhost:5000/categoryJewelry")
            .then((response) => response.json())
            .then(jewelryItems => {
                console.log(jewelryItems);
				setJewelry(jewelryItems);
            })
    }

	const loadBagsOnly = () => {
        fetch("http://localhost:5000/categoryBags")
            .then((response) => response.json())
            .then(bagItems => {
                console.log(bagItems);
				setBags(bagItems);
            })
    }
		
	useEffect(() => {
        loadProducts();
		loadClothingOnly();
		loadJewelryOnly();
		loadBagsOnly();
    }, []);


	console.log("Womens Clothing Category", clothing);
	console.log("Jewlery Category", jewelry);
	console.log("Bags Category", bags);








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
				
			))}                               
		</ul> </div>
		)

	}


	
return (
	<div>
		<div className='myDivContainer'>

		<div className='column'>
		<input onChange={() => setIsChecked(!isChecked)} aria-checked={isChecked} type="checkbox" value={isChecked ? "on" : "off"}/>


		
		</div>


		<div className='column'>
			<h1>Shop</h1>
			{displayBlock}

		</div>
		</div>
	</div>

	
);
};

export default Shop;
