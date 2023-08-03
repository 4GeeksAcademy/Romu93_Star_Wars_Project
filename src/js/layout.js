import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { CharacterDetails } from "./views/CharacterDetails.jsx";
import { PlanetDetails } from "./views/PlanetDetails.jsx";
import { FilmDetails } from "./views/FilmDetails.jsx";
import { SpecieDetails } from "./views/SpecieDetails.jsx";
//import { Single } from "./views/single";
import { GetCharacters } from "./views/GetCharacters.jsx";
import { GetPlanets } from "./views/GetPlanets.jsx";
import { GetFilms } from "./views/GetFilms.jsx";
import { GetSpecies } from "./views/GetSpecies.jsx";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />

						<Route path="/characters" element={<GetCharacters />} />
						<Route path="/planets" element={<GetPlanets />} />
						<Route path="/films" element={<GetFilms />} />
						<Route path="/species" element={<GetSpecies />} />

						<Route path="/characters/:theid" element={<CharacterDetails />} />
						<Route path="/planets/:theid" element={<PlanetDetails />} />
						<Route path="/films/:theid" element={<FilmDetails />} />
						<Route path="/species/:theid" element={<SpecieDetails />} />

						{/*<Route path="/single/:theid" element={<Single />} />*/}
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
