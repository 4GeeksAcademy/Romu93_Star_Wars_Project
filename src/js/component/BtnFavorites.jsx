import React, {useContext} from "react";
import { Context } from "../store/appContext.js";

export const BtnFavorites = () => {
     const {store, actions} = useContext(Context);

     const favorites = store.myFavorites;

     return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle me-4" type="button" data-bs-toggle="dropdown">
                Favorites
                    <span className="position-absolute top-0 start-90 translate-middle badge rounded-circle bg-warning ">
                        {favorites.length}
                    </span>
            </button>
            <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end">
                {favorites.length === 0 ? (
                    <li><span className="dropdown-item"> No favorites selected </span></li>
                ) : (
                    favorites.map((item, id) => (
                        <li key={id} className="d-flex justify-content-between m-2 ">
                            <span className="dropdown-items text-nowrap">{item}</span>
                            <button type="button" className="btn btn-outline-danger ms-2"
                            onClick={() => {actions.removeFavorite(id)}}>
                            <i className="fa fa-trash"></i>
                            </button>
                        </li>
                    ))                
                )
                }
            </ul>
        </div>
     )
}