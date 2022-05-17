import React from "react";
import { useState, useEffect } from "react";
import IndividualItem from "./individualitem";

const ClothingItems = () =>  {
  const [selected, setSelected] = useState(null);
  const [clothing, setClothing] = useState([]);

  const loadClothingOnly = () => {
    fetch("http://localhost:5000/categoryWomensClothing")
      .then((response) => response.json())
      .then((womensClothing) => {
        console.log(womensClothing);
        setClothing(womensClothing);
      });
  };

  useEffect(() => {
    loadClothingOnly();
  }, []);

  let displayClothes;
  console.log("This is the component state", selected);
  if (selected != null) {
    displayClothes = (
      <div>
        <IndividualItem product={selected} />
        <button onClick={() => setSelected(null)}>Go back</button>
      </div>
    );
  } else {
    
    displayClothes = (
      
      <div>
        <h2> Women's Clothing </h2>
        <ul>
          {clothing.map((clothes, index) => (
            <img
              key={index}
              src={clothes.image}
              alt=""
              width="300"
              height="400"
              onClick={() => setSelected(clothes)}
            />
          ))}
        </ul>
      </div>
    );
  }

  return (
  
  <div>
   {displayClothes}
  </div>
  
  );
};

export default ClothingItems;
