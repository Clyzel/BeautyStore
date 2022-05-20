import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState, useEffect } from "react";

/*
 load fav 
  is this product favorited by this user? if yes, then heart is red else hear is white
*/
const FavoriteItem = (props) => {
  const { product } = props;
  const [fav, setFav] = useState();

  const loadFavitem = () => {
    // user.id and product.id
    fetch("http://localhost:5000/favitems")
      .then((response) => response.json())
      .then((favitem) => {
        //console.log(favitem);
        setFav(favitem);
      });
  };

  useEffect(() => {
    loadFavitem();
  }, []);

  // send product.id and user.id not the whole product
  const postFavitem = (newFavitem) => {
    return fetch("http://localhost:5000/favitems", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newFavitem),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("A Post Was Made ", data);
        //setFav(data);
        loadFavitem();
      });
  };

  const deleteFav = (favitem) => {
    console.log(favitem);
    return fetch("http://localhost:5000/favitems", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(favitem),
    }).then((response) => {
      //console.log(response);
      if (response.ok) {
        //setFav(null);
        console.log("A Delete Was Made ", response);
        loadFavitem();
      }
    });
  };

  let displayHeart;
  let currentlyFav = fav
    ? fav.find((everyFav) => everyFav.products_id === product.id)
    : null;
  //console.log("This is fav",fav);
  if (currentlyFav) {
    console.log("Favorited");
    displayHeart = (
      <div>
        <FaHeart
          style={{ color: "pink" }}
          onClick={() => {
            deleteFav(currentlyFav);
          }}
        />
      </div>
    );
  } else {
    console.log("Has not Been Favorited");
    displayHeart = (
      <div>
        <FaRegHeart
          style={{ color: "red" }}
          onClick={() => {
            postFavitem(product);
          }}
        />
      </div>
    );
  }

  return <div>{displayHeart}</div>;
};

export default FavoriteItem;
