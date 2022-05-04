import React from 'react';

const IndividualItem = (props) => {
 const {product} = props

   



    
    

	
    


return (
    
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20 }}>
    <div><h1>{product.title} </h1>
    <img src={product.image} alt= "" width= "500" height= "600"></img>
    </div>

    <div>
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
