import React from 'react';
import { useState } from 'react';
//import Home from './home';

const IndividualItem = (props) => {
 const {product} = props

   



    
    

	
    


return (
    <div>
	<h1>Individual Item Here </h1>
    <img src={product.image} alt= "" width= "500" height= "600"></img>
           
    </div>
);
};

export default IndividualItem;
