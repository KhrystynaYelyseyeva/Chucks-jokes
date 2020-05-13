import React from "react";
import PropTypes from "prop-types";
import './FavoriteJoke.css';

import like from "../../img/heart.svg";

const FavoriteJoke = ({
                          deleteJokeToFavorite,
                          id,
                          icon_url,
                          url,
                          value,
                          updated_at
                      }) => {
    return (
        <div className="FavoriteJoke">
            <img onClick={() => deleteJokeToFavorite(id)}
                 className="favorite-joke-like"
                 src={like}
                 alt="joke-like"/>
            <img className="favorite-joke-icon" src={icon_url} alt="joke-icon"/>
            <div className="favorite-joke-container-article">
                <a className="favorite-joke-id" href={url}>
                    ID: {id}
                </a>
                <article>{value}</article>
                <p className="favorite-joke-update">Last
                    update: {Math.round((Date.now() - new Date(updated_at)) / 3600000)} hours ago</p>
            </div>
        </div>
    )
}

FavoriteJoke.propTypes = {
    deleteJokeToFavorite: PropTypes.func,
    id:PropTypes.string,
    icon_url:PropTypes.string,
    url:PropTypes.string,
    value:PropTypes.string,
    updated_at:PropTypes.string,
};

FavoriteJoke.defaultProps = {
    id:'',
    icon_url:'',
    url:'',
    value:'',
    updated_at:'',
    deleteJokeToFavorite: () => {
    },
};

export default FavoriteJoke;