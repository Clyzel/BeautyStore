import React from "react";
import { Nav, NavLink, NavMenu } from "./navbarelements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/home" activeStyle>
			Home
		</NavLink>
		<NavLink to="/shop" activeStyle>
			Shop
		</NavLink>
		<NavLink to="/checkout" activeStyle>
			Checkout
		</NavLink>
		<NavLink to="/about" activeStyle>
			About
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
