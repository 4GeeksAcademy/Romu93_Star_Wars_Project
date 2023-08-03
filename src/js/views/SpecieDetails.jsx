import React, { useState, useEffect, useContext } from "react";
import {useParams} from "react-router-dom"
import { Context } from "../store/appContext.js";
import { PiStarThin } from 'react-icons/pi'

export const SpecieDetails = () => {
    const {store, actions} = useContext(Context);
    const params = useParams();
    const id = params.theid
    const [specieid, setSpecieid] = useState({}); 
    const specieView = JSON.parse(localStorage.getItem("speciesLocal"))

    const getDetails = async () =>{ 
        var requestOptions = {
        method: 'GET',
        redirect: 'follow'};        

        if(specieView && specieView[id]){            
            setSpecieid(specieView[id])
        }else{
            const response = await fetch(`https://swapi.tech/api/species/${id}`, requestOptions)        
            if(response.ok){
                const specie = await response.json();
                const specieDetail = specie.result.properties;
                setSpecieid(specieDetail)
                localStorage.setItem("speciesLocal", JSON.stringify({...specieView,[id] : specieDetail} ));
            }else{
                console.log( "ERROR" + response.status)}
            }
        }
        useEffect(() => {
            getDetails()
        },[])
    
    return(
        <div className="d-flex justify-content-center">
            <div>
                <img src={`https://starwars-visualguide.com/assets/img/species/${id}.jpg`} className="img-fluid my-4" alt="..." style={{ width: '330px'}}></img>
            </div>      
            <div className="card my-4"  style={{ width: "480px"}}>
            { specieid.name === "Droid" ? (
            <div className= "p-3 flex-grow-1">
                <h4>Character Id: {specieView.results[id - 1 ].uid}</h4>
                <h2>Classification: {specieid.classification}</h2>
                <p><b>Designation:</b>  {specieid.designation}</p>
                <p><b>Average lifespan:</b> {specieid.average_lifespan}</p>
                <p><b>Language:</b> {specieid.language}</p>                                
            </div>
             ) : (
            <div className= "p-3 flex-grow-1">
                <h4>Character Id: {specieView.results[id - 1 ].uid}</h4>
                <h2>Classification: {specieid.classification}</h2>
                <p><b>Average height:</b>  {specieid.average_height} cm</p>
                <p><b>Language:</b> {specieid.language}</p>
                <p><b>Hair colors:</b> {specieid.hair_colors}</p>
                <p><b>Skin colors:</b>  {specieid.skin_colors}</p>
                <p><b>Eye colors:</b> {specieid.eye_colors}</p>                
            </div> ) }
            <div className="card-footer text-end">                          
                <button className="btn shadow-sm me-2" onClick={ () => {actions.addFavorite(specieid.name)}}>
                    <PiStarThin />
                </button>
            </div>                                
            </div>          
        </div>
    )
}