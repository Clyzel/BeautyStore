import React from "react";
import { useState, useEffect } from "react";
import IndividualItem from "./individualitem";

const JewelryItems = () => {
  const [selected, setSelected] = useState(null);
  const [jewelry, setJewelry] = useState([]);

  const loadJewelryOnly = () => {
    fetch("http://localhost:5000/categoryJewelry")
      .then((response) => response.json())
      .then((jewelryItems) => {
        console.log(jewelryItems);
        setJewelry(jewelryItems);
      });
  };

  useEffect(() => {
    loadJewelryOnly();
  }, []);

  let displayJewelry;
  if (selected != null) {
    displayJewelry = (
      <div>
        <IndividualItem product={selected} />
        <button onClick={() => setSelected(null)}>Go back</button>
      </div>
    );
  } else {
    displayJewelry = (
      <div>
        <h2> Women's Clothing </h2>
        <ul>
          {jewelry.map((jewels, index) => (
            <img
              key={index}
              src={jewels.image}
              alt=""
              width="300"
              height="400"
              onClick={() => setSelected(jewels)}
            />
          ))}
        </ul>
      </div>
    );
  }

  return (
  <div>
    {displayJewelry}
  </div>
  );
};

export default JewelryItems;
