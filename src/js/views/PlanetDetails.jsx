import React, { useState, useEffect, useContext } from "react";
import {useParams} from "react-router-dom"
import { Context } from "../store/appContext.js";
import { PiStarThin } from 'react-icons/pi'

export const PlanetDetails = () => {
    const {store, actions} = useContext(Context);
    const params = useParams();
    const id = params.theid
    const [planetid, setPlanetid] = useState({}); 
    const planetData = JSON.parse(localStorage.getItem("planetsLocal"))
    console.log(planetData)

    const getDetails = async () =>{ 
        var requestOptions = {
        method: 'GET',
        redirect: 'follow'};        

        if(planetData && planetData[id]){            
            setPlanetid(planetData[id])
        }else{
            const response = await fetch(`https://swapi.tech/api/planets/${id}`, requestOptions)        
            if(response.ok){
                const planet = await response.json();
                const planetDetail = planet.result.properties;
                setPlanetid(planetDetail)
                localStorage.setItem("planetsLocal", JSON.stringify({...planetData,[id] : planetDetail} ));
            }else{
                console.log( "ERROR" + response.status)}
            }
        }
        useEffect(() => {
            getDetails()
        },[])
        console.log(planetData.results.uid)
    return(
        <div className="d-flex justify-content-center">
            <div>
                { planetData.results[id -1].uid === "1" ? (
                    <img src={`https://starwars-visualguide.com/assets/img/big-placeholder.jpg`}  className="img-fluid my-4" style={{height: "370px", width: '350px'}}></img>                        
                ) :
                    (<img src={`https://starwars-visualguide.com/assets/img/planets/${params.theid}.jpg`} className="img-fluid my-4"style={{ width: '350px', height: '370px'}}></img>)}
            </div>      
            <div className="card mb-3 my-4"  style={{ width: '450px', height: '370px'}}>
                <div className= "p-3 flex-grow-1">
                <h4>Planet Id: {planetData.results[id - 1 ].uid}</h4>
                <h2>Name: {planetid.name}</h2>
                <p><b>Rotation period:</b> {planetid.rotation_period} days</p>
                <p><b>Orbital period:</b> {planetid.orbital_period} years</p>
                <p><b>Population:</b>  {planetid.population}</p>
                <p><b>Climate:</b> {planetid.climate}</p>
                <p><b>Terrain:</b> {planetid.terrain}</p>
                </div> 
                <div className="card-footer text-end">                          
                <button className="btn shadow-sm me-2" onClick={ () => {actions.addFavorite(planetid.name)}}>
                    <PiStarThin />
                </button>            
                </div>               
            </div>          
        </div>
    )
}