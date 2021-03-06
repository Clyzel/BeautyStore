import React from "react";
import FavoriteItem from "../favorite";
import { useState, useEffect } from "react";

const IndividualItem = (props) => {
  const { product } = props;

  const [addItems, setAddItems] = useState();

  const loadAddItems = () => {
    fetch("http://localhost:5000/additems")
      .then((response) => response.json())
      .then((additems) => {
        //console.log(additems);
        setAddItems(additems);
      });
  };

  useEffect(() => {
    loadAddItems();
  }, []);

  const postAddItems = (newAddItem) => {
    return fetch("http://localhost:5000/additems", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newAddItem),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("A Post Was Made ", data);
        loadAddItems();
      });
  };

  const deleteAddedItem = (additem) => {
    return fetch("http://localhost:5000/additems", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(additem),
    }).then((response) => {
      //console.log(response);
      if (response.ok) {
        //setaddItems(null);
        console.log("A Delete Was Made ", response);
        loadAddItems();
      }
    });
  };

  let addItemButton;
  let currentlyAdded = addItems
    ? addItems.find((everyaddItems) => everyaddItems.product_id === product.id)
    : null;
  //console.log("This is addItems",addItems);
  if (currentlyAdded) {
    console.log("Added to Cart");
    addItemButton = (
      <div>
        <button
          style={{ backgroundColor: "yellow" }}
          onClick={() => {
            deleteAddedItem(currentlyAdded);
          }}
        >
          Item Added!
        </button>
      </div>
    );
  } else {
    console.log("Removed from Cart");
    addItemButton = (
      <div>
        <button
          style={{ backgroundColor: "#20f5c7" }}
          onClick={() => {
            postAddItems(product);
          }}
        >
          Add Item
        </button>
      </div>
    );
  }

  let buyNowButton;
  currentlyAdded = addItems
    ? addItems.find((everyaddItems) => everyaddItems.product_id === product.id)
    : null;
  //console.log("This is addItems",addItems);
  if (currentlyAdded) {
    console.log("Already in cart");
    buyNowButton = (
      <div>
        <a href="http://localhost:3000/checkout/">
          {" "}
          <button style={{ backgroundColor: "#f0f"}}>Buy Now</button>{" "}
        </a>
      </div>
    );
  } else {
    console.log("Item hasn't been added");
    buyNowButton = (
      <div>
        <a href="http://localhost:3000/checkout/">
          <button
            style={{ backgroundColor: "#f0f" }}
            onClick={() => {
              postAddItems(product);
            }}
          >
            Buy Now
          </button>
        </a>
      </div>
    );
  }
  return (
    <div className="pogebody"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridGap: 20,
      }}
    >
      <div>
        <h3>{product.title} </h3>
        <img src={product.image} className="image" alt="" width="500" height="600"></img>
      </div>

      <div>
        <b>Description:</b> {product.description}
        <br/>
        <br/>
        <FavoriteItem product={product} />
        <br />
        <b>Category:</b> {product.category}
        <br />
        <br />
        <b>Price:</b> {product.price}
        <br />
        <br />
        {addItemButton}
        {buyNowButton}
      </div>
    </div>
  );
};

export default IndividualItem;
