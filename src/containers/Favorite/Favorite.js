import React from "react";
import './Favorite.css';

import FavoriteHeader from "../../components/FavoriteHeader/FavoriteHeader";
import FavoriteJoke from "../../components/FavoriteJoke/FavoriteJoke";

const Favorite = ({
                      isFavoriteExist,
                      menu,
                      handlerMenu,
                      favoriteJokes,
                      deleteJokeToFavorite,
                  }) => {

    return (
        <div className={menu ? "Favorite Favorite__active" : "Favorite"}>
            <div className="jokes-wrapper">
                <FavoriteHeader handlerMenu={handlerMenu}/>
                {isFavoriteExist && <div className="favorite-joke-container">
                    {favoriteJokes.map(joke =>
                        <FavoriteJoke
                            deleteJokeToFavorite={deleteJokeToFavorite}
                            key={joke.id}
                            id={joke.id}
                            icon_url={joke.icon_url}
                            url={joke.url}
                            value={joke.value}
                            updated_at={joke.updated_at}
                        />)}
                </div>}
            </div>
        </div>
    );
}

export default Favorite;
