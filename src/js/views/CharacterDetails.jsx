import React, { useState, useEffect, useContext } from "react";
import {useParams} from "react-router-dom"
import { PiStarThin } from 'react-icons/pi'
import { Context } from "../store/appContext.js";


export const CharacterDetails = () => {
    const {store, actions} = useContext(Context);
    const params = useParams();
    const id = params.theid
    const [personid, setPersonid] = useState({}); 
    const userView = JSON.parse(localStorage.getItem("characterLocal"))

    const getDetails = async () =>{ 
        var requestOptions = {
        method: 'GET',
        redirect: 'follow'};        

        if(userView && userView[id]){            
            setPersonid(userView[id])
        }else{
            const response = await fetch(`https://swapi.tech/api/people/${id}`, requestOptions)        
            if(response.ok){
                const character = await response.json();
                const characterDetail = character.result.properties;
                setPersonid(characterDetail)
                localStorage.setItem("characterLocal", JSON.stringify({...userView,[id] : characterDetail} ));
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
                <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="img-fluid my-4" alt="..." style={{ width: '330px'}}></img>
            </div>      
            <div className="card my-4"  style={{ width: '450px'}}>
                <div className= "p-3 flex-grow-1">
                <h4>Character Id: {userView.results[id - 1 ].uid}</h4>
                <h2>Nombre: {personid.name}</h2>
                <p><b>Gender:</b>  {personid.gender}</p>
                <p><b>Birth:</b> {personid.birth_year}</p>
                <p><b>Hair color:</b>  {personid.hair_color}</p>
                <p><b>Skin color:</b> {personid.skin_color}</p>
                <p><b>Eye color:</b> {personid.eye_color}</p>
                </div>
                <div className="card-footer text-end">                          
                <button className="btn shadow-sm me-2" onClick={ () => {actions.addFavorite(personid.name)}}>
                    <PiStarThin />
                </button>            
                </div>                                         
            </div>
                      
        </div>
    )
}
