import React from "react";
import { Nav, NavLink, NavMenu } from "./navbarelements";
import wow from "./wow.png";
const Navbar = () => {
return (
	<>
	
	<Nav>
		<NavMenu>
		<NavLink to="/home"  activeStyle>
			<div><img src={wow} alt="" className="Logo"/></div>
		</NavLink>
		<NavLink to="/home"  activeStyle>
			<div className="page"> Home</div>
		</NavLink>
		<NavLink to="/shop" className="page" activeStyle>
			Shop
		</NavLink>
		<NavLink to="/checkout" className="page" activeStyle>
			Checkout
		</NavLink>
		<NavLink to="/about" className="page" activeStyle>
			About
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
