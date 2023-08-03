import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import { VscMenu } from 'react-icons/vsc'
import { PiStarThin } from 'react-icons/pi'
import { Context } from "../store/appContext.js";


export const GetPlanets = () => {
    const {store, actions} = useContext(Context);
    const [planets, setPlanets] = useState(JSON.parse(localStorage.getItem("planetsLocal")))
  
return (
  <div className="container" >
  <h1 className="text-center ms-5 primary">Planets</h1>
  {!planets ? ("ERROR") : ( 
  <div className="row d-flex justify-content-center" >
    {planets.results.map((planet) => (                    
              <div className="card col-3 mb-3 me-3 px-0 pt-0" style={{marginLeft: "5px" }}>
                  <div className="col-md-2 text-center" style={{width: '100%' }}>
                  { planet.uid === "1" ? (                    
                        <img src={`https://starwars-visualguide.com/assets/img/big-placeholder.jpg`}  className="img-fluid " style={{height: "329px", width: '100%'  }}></img>                        
                    
                    ):(
                        <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}  className="img-fluid " ></img>
                       )}                              
                    </div>
                    <div className="col-md-8 m-3">                          
                        <h5>{planet.name}</h5>                          
                    </div>
                      <div className="card-footer text-end">
                          <div className="">
                              <Link to={`/planets/${planet.uid}`} className="btn shadow-sm me-2">
                                  <VscMenu />
                              </Link>
                              <button className="btn shadow-sm me-2" onClick={ () => {actions.addFavorite(planet.name)}}>
                                  <PiStarThin />
                              </button>
                            </div>
                        </div>                      
                </div>))}                
    </div>)}            
  </div>  
     )
};

