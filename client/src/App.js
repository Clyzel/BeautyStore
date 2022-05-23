import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/home';
import Shop from './components/pages/shop';
import Checkout from './components/pages/checkout';
import About from './components/pages/about';
import IndividualItem from './components/pages/individualitem';


function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/' exact element={<Home/>} />
		<Route path='/shop' element={<Shop/>} />
		<Route path='/checkout' element={<Checkout/>} />
		<Route path='/about' element={<About/>} />
    <Route path='/individualitem' element={<IndividualItem/>} />
	</Routes>
	</Router>
);
}

export default App;
