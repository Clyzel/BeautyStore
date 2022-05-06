import React from 'react';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from 'react';

const IndividualItem = (props) => {
 const {product} = props
 const [fav, setFav] = useState();
   


 let displayHearts;
 if (fav) {
     displayHearts = (
         <div> 
        {/* onClick={() => setFav( )}  may need to be added */}
         <h1> <FaHeart style={{color: 'red'}} onClick={() => setFav()}/> </h1>
         
         </div>
         )
 } else {
     displayHearts = (
     <div>

          {/* <a href='idk what to put here yet'> <FaRegHeart style={{color: 'red'}}/> </a> */}

         <h1><FaRegHeart style={{color: 'red'}} onClick={() => setFav(product)}/> </h1>
     
     </div>
     )
 };
//   } else {

//     displayHearts = (
//         <div> 
//        {/* onClick={() => setFav( )}  may need to be added */}
//         <h1> <button > <FaHeart style={{color: 'red'}} onClick={() => setFav(product)} /> </button> </h1>
        
//         </div>
//         )
//   }
    
    

	
    


return (
    
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20 }}>
    <div><h1>{product.title} </h1>
    <img src={product.image} alt= "" width= "500" height= "600"></img>
    </div>

    <div>
        {displayHearts}
        <b>Description:</b> {product.description}
        <br/>
        <br/>
        <b>Category:</b> {product.category}
        <br/>
        <br/>
        <b>Price:</b> {product.price}

    </div>
    </div>

	
);
};

export default IndividualItem;
