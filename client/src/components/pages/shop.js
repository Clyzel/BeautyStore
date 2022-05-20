import React from "react";
import { useState, useEffect, useRef } from "react";
import IndividualItem from "./individualitem";
//import JewelryItems from "./jewelryItems";
//import BagItems from "./bagItems";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const clothesId = useRef();
  const jewelryId = useRef();
  const bagsId = useRef();

  const loadProducts = () => {
    fetch("http://localhost:5000/data")
      .then((response) => response.json())
      .then((products) => {
        console.log(products);
        setProducts(products);
      });
  };

  useEffect(() => {
    loadProducts();
  }, []);


  // This is my guess of how to do an if else with the radio buttons
  let displayBlock;
  if (selected != null) {
    displayBlock = (
      <div>
        <IndividualItem product={selected} />
        <button style={{ backgroundColor: "yellow"}} onClick={() => setSelected(null)}>Go back</button>
      </div>
    ); 
  } else {
    displayBlock = (
      <div>
        <ul>
          {products.filter((product) => {
			  if (selectedCategory === "all"){
				  return true;
			  } else{
				  return product.category === selectedCategory
			  }

		  }).map((product, index) => (
            <img
			  className="image"
              key={index}
              src={product.image}
              alt=""
              width="300"
              height="400"
              onClick={() => setSelected(product)}
            />
          ))}
        </ul>
      </div>
    );
  }

// function buttonChecked(){
// 	console.log("This is working!")
// };

let handleCategoryChange = (changeEvent) => {
	setSelectedCategory(changeEvent.target.value);
  }

  return (
    // Bellow are my radio buttons
    <div className="pogebody">
      <div className="myDivContainer">
        <div className="column">
          <div>
		<form className="ayye">
          <input
            ref={clothesId}
            onChange={handleCategoryChange}
            type="radio"
            value="womens clothing"
			checked={selectedCategory === 'womens clothing'}
          /> <b>Clothing</b>
          <br/>
          <br/>
          <input
            ref={jewelryId}
            onChange={handleCategoryChange}
            type="radio"
            value="jewelry"
			checked={selectedCategory === 'jewelry'}
          /> <b>Jewelry</b>
          <br/>
          <br/>
          <input
            ref={bagsId}
            onChange={handleCategoryChange}
            type="radio"
            value="bags"
			checked={selectedCategory === 'bags'}
          /> <b>Bags</b>
          <br/>
          <br/>
		  <input
            onChange={handleCategoryChange}
            type="radio"
            value="all"
			checked={selectedCategory === 'all'}
          /> <b>All</b>
		</form>
    </div>
        </div>

        <div className="column">
          <div className="shopstuff">
          <h1> The Shop 💕 </h1>
          {displayBlock}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
