import React from "react";
import { useState, useEffect, useRef } from "react";
import ClothingItems from "./clothingItems";
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

  //This is where my shop page renders the default or the individualitem page
//   let displayBlock;
//   if (selected != null) {
//     displayBlock = (
//       <div>
//         <IndividualItem product={selected} />
//         <button onClick={() => setSelected(null)}>Go back</button>
//       </div>
//     );
//   } else {
//     displayBlock = (
//       <div>
//         <h2> List of Items </h2>
//         <ul>
//           {products.map((product, index) => (
//             <img
//               key={index}
//               src={product.image}
//               alt=""
//               width="300"
//               height="400"
//               onClick={() => setSelected(product)}
//             />
//           ))}
//         </ul>
//       </div>
//     );
//   }

  // This is my guess of how to do an if else with the radio buttons
  let displayBlock;
  if (selected != null) {
    displayBlock = (
      <div>
        <IndividualItem product={selected} />
        <button onClick={() => setSelected(null)}>Go back</button>
      </div>
    ); 
  } else {
    displayBlock = (
      <div>
        <h2> List of Items </h2>
        <ul>
          {products.filter((product) => {
			  if (selectedCategory === "all"){
				  return true;
			  } else{
				  return product.category === selectedCategory
			  }

		  }).map((product, index) => (
            <img
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
    <div>
      <div className="myDivContainer">
        <div className="column">
		<form>
			womens clothing
          <input
            ref={clothesId}
            onChange={handleCategoryChange}
            aria-checked=""
            type="radio"
            value="womens clothing"
			checked={selectedCategory === 'womens clothing'}
          />
		  jewelry
          <input
            ref={jewelryId}
            onChange={handleCategoryChange}
            aria-checked=""
            type="radio"
            value="jewelry"
			checked={selectedCategory === 'jewelry'}
          />
		  bags
          <input
            ref={bagsId}
            onChange={handleCategoryChange}
            aria-checked=""
            type="radio"
            value="bags"
			checked={selectedCategory === 'bags'}
          />
		  all
		  <input
            onChange={handleCategoryChange}
            aria-checked=""
            type="radio"
            value="all"
			checked={selectedCategory === 'all'}
          />
		</form>
        </div>

        <div className="column">
          <h1>Shop</h1>
          {displayBlock}
        </div>
      </div>
    </div>
  );
};

export default Shop;
