import React from "react";
import {Navbar} from "./Navbar"
import {Jumbotrom} from "./Jumbotrom"
import {Card} from "./Card"
import {Footer} from "./Footer"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<Jumbotrom/>
			<div className="d-flex gap-1">
			<Card/>
			<Card/>
			<Card/>
			<Card/>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;