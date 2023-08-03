import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import { VscMenu } from 'react-icons/vsc'
import { PiStarThin } from 'react-icons/pi'
import { Context } from "../store/appContext.js";


export const GetCharacters = () => {
  const {store, actions} = useContext(Context);
  const [characters, setCharacters] = useState(JSON.parse(localStorage.getItem("characterLocal")))
  
return (
  <div className="container" >
  <h1 className="text-center ms-5 primary">Characters</h1>
  {!characters ? ("ERROR") : ( 
  <div className="row d-flex justify-content-center" >
    {characters.results.map((character) => (                    
              <div className="card col-3 mb-3 me-3 px-0 pt-0" style={{marginLeft: "5px" }}>
                  <div className="col-md-2 text-center" style={{width: '100%' }}>
                      <img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} className="img-fluid " ></img>                               
                    </div>
                    <div className="col-md-8 m-3">                          
                        <h5>{character.name}</h5>                          
                      </div>
                      <div className="card-footer text-end">
                          <div>
                              <Link to={`/characters/${character.uid}`} className="btn shadow-sm me-2">
                                  <VscMenu />
                              </Link>
                              <button className="btn shadow-sm me-2" onClick={ () => {actions.addFavorite(character.name)}}>
                                  <PiStarThin />
                              </button>
                            </div>
                        </div>                      
                </div>))}                
    </div>)}            
  </div>  
     )
};

