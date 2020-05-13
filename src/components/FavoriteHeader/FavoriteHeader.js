import React from "react";
import './FavoriteHeader.css';

const FavoriteHeader = ({handlerMenu}) => {
    return (
        <header className="FavoriteHeader">
            <p className="favorite-title favorite">Favorite</p>
            <div onClick={handlerMenu} className="like__burger_close">
                <p className="favorite">Favorite</p>
            </div>
        </header>
    )
}


export default FavoriteHeader;