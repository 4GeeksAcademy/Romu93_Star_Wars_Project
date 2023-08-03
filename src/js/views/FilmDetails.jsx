import React, { useState, useEffect, useContext } from "react";
import {useParams} from "react-router-dom"
import { PiStarThin } from 'react-icons/pi'
import { Context } from "../store/appContext.js";


export const FilmDetails = () => {
    const {store, actions} = useContext(Context);
    const params = useParams();
    const id = params.theid
    const [filmid, setFilmid] = useState({}); 
    const filmView = JSON.parse(localStorage.getItem("filmsLocal"))

    const getDetails = async () =>{ 
        var requestOptions = {
        method: 'GET',
        redirect: 'follow'};        

        if(filmView && filmView[id]){            
            setFilmid(filmView[id])
        }else{
            const response = await fetch(`https://swapi.tech/api/films/${id}`, requestOptions)        
            if(response.ok){
                const film = await response.json();
                const filmDetail = film.result.properties;
                setFilmid(filmDetail)
                localStorage.setItem("filmsLocal", JSON.stringify({...filmView,[id] : filmDetail} ));                
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
                <img src={`https://starwars-visualguide.com/assets/img/films/${id}.jpg`} className="img-fluid my-4" alt="..." style={{ width: '330px'}}></img>
            </div>      
            <div className="card my-4"  style={{ width: '480px'}}>
                <div className= "p-3 flex-grow-1">
                <h4>Film Id: {filmView.result[id - 1 ].uid}</h4>
                <h2>Title: {filmid.title}</h2>
                <p><b>Director:</b>  {filmid.director}</p>
                <p><b>Producer:</b> {filmid.producer}</p>
                <p><b>Episode:</b>  {filmid.episode_id}</p>
                <p><b>Release:</b> {filmid.release_date}</p>
                </div>
                <div className="card-footer text-end">                          
                <button className="btn shadow-sm me-2" onClick={ () => {actions.addFavorite(filmid.title)}}>
                    <PiStarThin />
                </button>            
                </div>                 
            </div>          
        </div>
    )
}