import React from "react";
import './Header.css';
import imagen from './img.jpeg';

export default function Header() {
    return (
        <header>
            <div className='img-lg'>
                <img  src={imagen} alt="logo" />
            </div>
            <div className="links">
                <a href="">extra</a>
                <a href="">extra</a>
            </div>
            <div>
                <h1 className="title">
                    INTERNET PC TECH
                </h1>
            </div>
            <div className="about">
                <a href="">Contactanos</a>
                <a href="">Categorias</a>
                <a href="">Sobre nosotros</a>
            </div>
            <input type="text" placeholder="¿Que estas buscando?"/>
        </header>
    )
}

