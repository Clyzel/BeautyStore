import React from "react";
import { useState } from "react";
import CheckoutDefault from "./checkoutDefault";

const Checkout = () => {
  const [selected, setSelected] = useState(null);

 

  let displayThankYou;
  
  if (selected != null) { 
  	displayThankYou = (
      
  		<div>

  		<h1>Thank you!!</h1>
  		<br/>
  		<br/>
      <a href="http://localhost:3000/home/">
  		<button>Back to Home</button>
      </a>

  		</div>
  		)
  } else { 
    
  	displayThankYou = ( 
      <div>
      <CheckoutDefault/>
      <button onClick={() => setSelected(true)}>purchase</button>
      </div>
    )
  }

  return (
    <div>
      
    {displayThankYou}
    

    </div>
      
  );
};

export default Checkout;
