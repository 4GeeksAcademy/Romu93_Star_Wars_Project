import React from "react";
import { Link } from "react-router-dom";
import logoStart from "../../img/star_wars.png";
import { BtnFavorites } from "./BtnFavorites.jsx";


export const Navbar = () => {
	return (
		<nav className="navbar bg-black">
			<div className=" justify-content-center" style={{marginLeft: "30%"}}>
			<Link to="/characters" className="text-decoration-none">
				<span className="navbar-brand  h1 text-white">Characters</span>
			</Link>
			<Link to="/planets" className="text-decoration-none">
				<span className="navbar-brand h1 text-white">Planets</span>
			</Link>
			<Link to="/">
				<span className="navbar-brand h1 text-white"><img className="mx-5" src={logoStart} /></span>
			</Link>
			<Link to="/films" className="text-decoration-none">
				<span className="navbar-brand h1 text-white">Films</span>
			</Link>
			<Link to="/species" className="text-decoration-none">
				<span className="navbar-brand h1 text-white">Species</span>
			</Link>
			</div>	
			<div className="col-1">
			<BtnFavorites />
			</div>		
		</nav>
	);
};
