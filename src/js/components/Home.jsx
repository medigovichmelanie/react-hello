import React from "react";
import {Navbar} from "./Navbar"
import {Jumbotron} from "./Jumbotron"
import {Card} from "./Card"
import {Footer} from "./Footer"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<Jumbotron/>
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