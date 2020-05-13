import React from "react";
import './Header.css';

const Header = ({handlerMenu}) => {
    return (
        <div className='Header'>
            <header className="header">
                <p className="logo">MSI 2020</p>
                <div onClick={handlerMenu} className="like__burger_open">
                    <p className="favorite">Favorite</p>
                </div>
            </header>
            <section className="intro">
                <h2>Hey!</h2>
                <h1 className="intro-title">Let’s try to find a joke for you:</h1>
            </section>
        </div>
    )
}

export default Header;