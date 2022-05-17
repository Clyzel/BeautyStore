import React from "react";
import { useState, useEffect } from "react";
import IndividualItem from "./individualitem";

const BagItems = () => {
  const [selected, setSelected] = useState(null);
  const [bags, setBags] = useState([]);

  const loadBagsOnly = () => {
    fetch("http://localhost:5000/categoryBags")
      .then((response) => response.json())
      .then((bagItems) => {
        console.log(bagItems);
        setBags(bagItems);
      });
  };

  useEffect(() => {
    loadBagsOnly();
  }, []);

  let displayBags;
  if (selected != null) {
    displayBags = (
      <div>
        <IndividualItem product={selected} />
        <button onClick={() => setSelected(null)}>Go back</button>
      </div>
    );
  } else {
    displayBags = (
      <div>
        <h2> Women's Clothing </h2>
        <ul>
          {bags.map((bag, index) => (
            <img
              key={index}
              src={bag.image}
              alt=""
              width="300"
              height="400"
              onClick={() => setSelected(bag)}
            />
          ))}
        </ul>
      </div>
    );
  }

  return (

  <div>
    {displayBags}
  </div>

  );
};

export default BagItems;
