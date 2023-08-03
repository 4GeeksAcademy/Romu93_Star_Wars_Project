
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			myFavorites: []
		},
		actions: {
			// Use getActions to call a function within a 
			addFavorite: (title) =>{
				setStore({myFavorites: [...getStore().myFavorites, title]})
			},
			removeFavorite: (id) => {
				setStore({myFavorites: getStore().myFavorites.filter((item, i) => {
					return i != id;
				})})
			},
			getCharacter: async () => {
				var requestOptions = {
					method: 'GET',
					redirect: 'follow'}
				if (localStorage.getItem("characterLocal") === null){
					const response = await fetch("https://swapi.tech/api/people",requestOptions)
					if (response.ok){
						const data = await response.json();
						localStorage.setItem("characterLocal", JSON.stringify(data));
						//const details = JSON.parse(localStorage.getItem("characterLocal"));
						//const thedetail = details.results.map((urls) => urls.url);
						//const theurls1 = details.results.map((urls) => urls.url);
						
						//crear array para guardadr resultados
						//if (localStorage.getItem("characterDetailsLocal") === null){
						/*const responses = await Promise.all ( 
							theurls1.map(async (urls) => {
								const urlsResponse = await fetch(urls,{method: 'GET',redirect: 'follow'})	
								if (urlsResponse.ok){
									const urls = await urlsResponse.json();
									localStorage.setItem("characterDetailsLocal", JSON.stringify(urls))
							} else {
							  console.log("ERROR" + urlsResponse.status);
							  return null;									
								}									
							})	
						 )}*/
						//hacer map a details para obtener urls//dentro del map hacer fetch a cada resultdo//guardarlos en el array//y guardarlos n el local storage
					}else {
						console.log( "ERROR" + response.status)
					}
				}   
			},
			getPlanets : async () => {
				var requestOptions = {
					method: 'GET',
					redirect: 'follow'};
				if(localStorage.getItem("planetsLocal") === null){
					const response = await fetch("https://swapi.tech/api/planets", requestOptions)
					if(response.ok){
						const planets = await response.json();
						localStorage.setItem("planetsLocal", JSON.stringify(planets))
					}else{
						console.log( "ERROR" + response.status)}
				}
			},
			getFilms : async () => {
				var requestOptions = {
					method: 'GET',
					redirect: 'follow'};
				if(localStorage.getItem("filmsLocal") === null){
					const response = await fetch("https://www.swapi.tech/api/films", requestOptions)
					if(response.ok){
						const planets = await response.json();
						localStorage.setItem("filmsLocal", JSON.stringify(planets))
					}else{
						console.log( "ERROR" + response.status)}
				}
			},
			getSpecies : async () => {
				var requestOptions = {
					method: 'GET',
					redirect: 'follow'};
				if(localStorage.getItem("speciesLocal") === null){
					const response = await fetch("https://www.swapi.tech/api/species", requestOptions)
					if(response.ok){
						const planets = await response.json();
						localStorage.setItem("speciesLocal", JSON.stringify(planets))
					}else{
						console.log( "ERROR" + response.status)}
				}
			}				
	}
}
};

export default getState;

