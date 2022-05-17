import React from "react";
import { useState, useEffect, useRef } from "react";
import ClothingItems from "./clothingItems";
import IndividualItem from "./individualitem";
//import JewelryItems from "./jewelryItems";
//import BagItems from "./bagItems";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

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
  //console.log("This is what ur looking for", selected);
  console.log("This is an ID",clothesId);
//   console.log("This is an ID",jewelryId);
//   console.log("This is an ID",bagsId);
  if (selected != null) {
    displayBlock = (
      <div>
        <IndividualItem product={selected} />
        <button onClick={() => setSelected(null)}>Go back</button>
      </div>
    ); 
  } else if (clothesId.current != null && clothesId.current.checked === true) {
    console.log("It Reached this block", clothesId);
	<ClothingItems />; 
	console.log("After Clothes", <ClothingItems/>);
//   } else if (jewelryId.current === null && jew isChecked) {
//     <JewelryItems product={selected} />;
//   } else if (bagsId.current === isChecked) {
//     <BagItems product={selected} />;
  } else {
    displayBlock = (
      <div>
        <h2> List of Items </h2>
        <ul>
          {products.map((product, index) => (
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



  return (
    // Bellow are my radio buttons
    <div>
      <div className="myDivContainer">
        <div className="column">
          <input
            ref={clothesId}
            onChange={() => setIsChecked(!isChecked)}
            aria-checked={isChecked}
            type="radio"
            value="Women's Clothing"
          />
          <input
            ref={jewelryId}
            onChange={() => setIsChecked(!isChecked)}
            aria-checked={isChecked}
            type="radio"
            value="Jewelry"
          />
          <input
            ref={bagsId}
            onChange={() => setIsChecked(!isChecked)}
            aria-checked={isChecked}
            type="radio"
            value="Bags"
          />
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
