import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
background: #f52091;
border-bottom: 12px solid black;
height: 105px;
display: flex;
justify-content: space-between;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;
`;

export const NavLink = styled(Link)`
color: #ffe23b;
margin: 15px;
display: flex;
font-size: 40px;
text-shadow: -1px 5px 3px #000,
				  3px 5px 5px #000,
				  2px -1px 0 #000,
				  -1px -1px 0 #000;
font-weight: bold;
align-items: center;
text-align: right;
text-decoration: none;
text-decoration-thickness: 500px;
padding: 0 5rem;
height: 100%;
cursor: pointer;
&.active {
	color: #ff4dd3;
	text-decoration: line-through;
}
`;

export const Bars = styled(FaBars)`
display: none;
color: #808080;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
}
`;
