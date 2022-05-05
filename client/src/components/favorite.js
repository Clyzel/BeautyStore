import React from 'react';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState, useEffect } from 'react';


/*
 load fav 
  is this product favorited by this user? if yes, then heart is red else hear is white
*/
const FavoriteItem = (props) => {
 const {product} = props
 const [fav, setFav] = useState();


 const loadFavitem = () => {
     // user.id and product.id
    fetch("http://localhost:5000/favitems")
        .then((response) => response.json())
        .then(favitem => {
            console.log(favitem);
                setFav(favitem);
        })
}

useEffect(() => {
    loadFavitem();
}, []);

// send product.id and user.id not the whole product
 const postFavitem = (newFavitem) => {
    return fetch('http://localhost:5000/favitems', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'}, 
    body: JSON.stringify(newFavitem)
  }).then((response) => {
      return response.json()
  }).then((data) => {
    console.log("From the post ", data);
     setFav(data);
  
});
}

const deleteFav = (favitems) => {
    return fetch(`'http://localhost:5000/favitems/${favitems.id}`, {
        method: "DELETE"
    }).then((response) =>{
        //console.log(response);
        if(response.ok){
            loadFavitem();
        }
    })
}
   


 let displayHearts;
 console.log(displayHearts);
 if (fav === undefined) {
     console.log("filled heart")
     displayHearts = (
         <div> 
         <h1> <FaHeart style={{color: 'red'}} onClick={() => deleteFav(fav.id)}/> </h1>
         </div>
         )
 } else {
    console.log("empty heart")
     displayHearts = (
     <div>
         <h1><FaRegHeart style={{color: 'red'}} onClick={() => postFavitem(product)}/> </h1> emptyheart
     </div>
     )
 };

    

	
    


return (
    
    
    <div>
        {displayHearts}
    </div>
    

	
);
};

export default FavoriteItem;
