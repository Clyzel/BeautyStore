import React from 'react';
import FavoriteItem from '../favorite';


const IndividualItem = (props) => {
 const {product} = props
 


 
    

	
    


return (
    
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20 }}>
    <div><h1>{product.title} </h1>
    <img src={product.image} alt= "" width= "500" height= "600"></img>
    </div>

    <div>
        <FavoriteItem product={product} />
        <b>Description:</b> {product.description}
        <br/>
        <br/>
        <b>Category:</b> {product.category}
        <br/>
        <br/>
        <b>Price:</b> {product.price}
        <br/>
        <br/>
        
        <a href="http://localhost:3000/checkout/">
        <button>Buy Now</button>
        </a>
        
        
    </div>
    </div>

	
);
};

export default IndividualItem;
