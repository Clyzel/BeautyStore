import React from 'react';

const IndividualItem = () => {
return (
    <>
	<h1>Individual Item Here</h1>

    <p>
        <form action="http://localhost:3000/checkout">
        <input type="submit" value="Buy Now" />
        </form>
    </p>
    </>
);
};

export default IndividualItem;
